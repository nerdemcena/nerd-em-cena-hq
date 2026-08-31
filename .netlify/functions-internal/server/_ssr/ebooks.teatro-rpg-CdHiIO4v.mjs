import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ebooks.teatro-rpg-CdHiIO4v.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/nerd-logo.tsx";
var logoAsset = { url: "/assets-v1/logo-nerd-em-cena.png" };
function NerdLogo({ className = "h-28 w-28", alt = "Nerd em Cena", glow = true, loading = "eager" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: `relative inline-flex shrink-0 items-center justify-center rounded-full ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
			src: logoAsset.url,
			alt,
			loading,
			className: `h-full w-full rounded-full object-contain ${glow ? "drop-shadow-[0_0_30px_rgba(232,191,20,0.5)]" : ""}`
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 21,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/components/section-title.tsx";
function SectionTitle({ icon, children, subtitle, variant = "default" }) {
	const isBlue = variant === "blue";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${isBlue ? "bg-blue-600 text-white shadow-[inset_-2px_-3px_0_rgba(0,0,0,0.2)]" : "bg-gold text-black shadow-[inset_-2px_-3px_0_#b38a00]"}`,
					children: icon
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-heading text-[26px] sm:text-3xl tracking-wide text-foreground md:text-4xl whitespace-nowrap",
					children
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 19,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-[2px] w-24 rounded-full ${isBlue ? "bg-gradient-to-r from-gold to-blue-600" : "gold-underline"}` }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-1.5 w-1.5 rounded-full ${isBlue ? "bg-blue-500" : "bg-gold"}` }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-[2px] flex-1 rounded-full ${isBlue ? "bg-gradient-to-r from-blue-600 to-transparent" : "gold-underline"}` }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			subtitle && /* @__PURE__ */ (void 0)("p", {
				className: "mt-3 text-muted-foreground",
				children: subtitle
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 20
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
var CHECKOUT_UNICO = "https://pay.hotmart.com/I104079611H?sck=HOTMART_PRODUCT_PAGE&off=4c5nx472&hotfeature=32&bid=1787343121644";
//#endregion
export { NerdLogo as n, SectionTitle as r, CHECKOUT_UNICO as t };
