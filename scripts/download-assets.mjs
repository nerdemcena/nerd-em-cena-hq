import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const PREVIEW_HOST = "id-preview--14dd786f-ae3b-441a-ab20-7bfe5c8bb194.lovable.app";
const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets-v1');

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

const assetsSrcDir = path.join(process.cwd(), 'src', 'assets');
if (!fs.existsSync(assetsSrcDir)) {
  process.exit(0);
}

const files = fs.readdirSync(assetsSrcDir).filter(f => f.endsWith('.asset.json'));

for (const file of files) {
  const content = JSON.parse(fs.readFileSync(path.join(assetsSrcDir, file), 'utf-8'));
  const urlPath = content.url;
  const fileName = file.replace('.asset.json', '');
  const destPath = path.join(ASSETS_DIR, fileName);
  
  if (fs.existsSync(destPath)) {
    console.log(`Asset ${fileName} already exists, skipping.`);
    continue;
  }
  
  console.log(`Downloading ${fileName}...`);
  
  const fileStream = fs.createWriteStream(destPath);
  https.get(`https://${PREVIEW_HOST}${urlPath}`, {
    headers: { 'User-Agent': 'Node.js' }
  }, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      https.get(res.headers.location, (redirectRes) => {
        redirectRes.pipe(fileStream);
      });
      return;
    }
    res.pipe(fileStream);
  }).on('error', (err) => {
    fs.unlinkSync(destPath);
    console.error(`Error downloading ${fileName}:`, err.message);
  });
}
