import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-8xl text-gold">404</h1>
        <h2 className="mt-4 font-heading text-2xl text-foreground">
          Página não encontrada
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procurou não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105 hover:gold-glow"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-3xl tracking-wide text-foreground">
          Ops, algo deu errado
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A página não carregou corretamente. Tente recarregar ou voltar para o
          início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105"
          >
            Tentar novamente
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-gold px-6 py-3 text-sm font-bold text-gold transition-colors hover:bg-gold/10"
          >
            Início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nerd em Cena" },
      {
        name: "description",
        content:
          "Nerd em Cena: animes, games, cobertura de eventos, RPG e teatro com humor.",
      },
      { name: "author", content: "Nerd em Cena" },
      { property: "og:title", content: "Nerd em Cena" },
      {
        property: "og:description",
        content:
          "Animes, games, cobertura de eventos, RPG e teatro. Siga o Nerd em Cena.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@nerdemcenaoficial" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bangers&family=Bebas+Neue&family=Nunito:wght@400;600;700;800&family=Anton&family=Inter:wght@400;500;600;700;800&family=Cinzel:wght@600;700;900&family=Space+Grotesk:wght@400;500;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
