import { i as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as NerdLogo, r as SectionTitle, t as CHECKOUT_UNICO } from "./ebooks.teatro-rpg-CdHiIO4v.mjs";
import { r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { A as ArrowRight, T as Clapperboard, _ as Lock, a as Trophy, b as Gamepad2, d as Play, g as Mail, j as ArrowLeft, k as BookOpen, m as MessageCircle, n as Youtube, o as Swords, p as MessageSquare, t as Zap, w as Crown, y as Instagram } from "../_libs/lucide-react.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C3L7R9gX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-BCTD-eqq.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var _jsxFileName$5 = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-heading text-8xl text-gold",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 19,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 font-heading text-2xl text-foreground",
					children: "Página não encontrada"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 20,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "A página que você procurou não existe ou foi movida."
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105 hover:gold-glow",
						children: "Voltar ao início"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 25,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 24,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 18,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-heading text-3xl tracking-wide text-foreground",
					children: "Ops, algo deu errado"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 47,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "A página não carregou corretamente. Tente recarregar ou voltar para o início."
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 50,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105",
						children: "Tentar novamente"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 54,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-xl border border-gold px-6 py-3 text-sm font-bold text-gold transition-colors hover:bg-gold/10",
						children: "Início"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 63,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 53,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 46,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 45,
		columnNumber: 5
	}, this);
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{
				name: "theme-color",
				content: "#0b0b00"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "black-translucent"
			},
			{ title: "Nerd em Cena" },
			{
				name: "description",
				content: "Nerd em Cena: animes, games, cobertura de eventos, RPG e teatro com humor."
			},
			{
				name: "author",
				content: "Nerd em Cena"
			},
			{
				property: "og:title",
				content: "Nerd em Cena"
			},
			{
				property: "og:description",
				content: "Animes, games, cobertura de eventos, RPG e teatro. Siga o Nerd em Cena."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@nerdemcenaoficial"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "dns-prefetch",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "dns-prefetch",
				href: "https://fonts.gstatic.com"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bangers&family=Bebas+Neue&family=Nunito:wght@400;600;700;800&family=Anton&family=Inter:wght@400;500;600;700;800&family=Cinzel:wght@600;700;900&family=Space+Grotesk:wght@400;500;700&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 140,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 139,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 144,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 142,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 138,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 155,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 154,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/social-button.tsx";
function TwitchIcon$1({ className = "h-6 w-6" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" }, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 14,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
function TikTokIcon$1({ className = "h-6 w-6" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" }, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 22,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 21,
		columnNumber: 5
	}, this);
}
var icons = {
	instagram: Instagram,
	youtube: Youtube,
	tiktok: TikTokIcon$1,
	twitch: TwitchIcon$1
};
function SocialButton({ platform, label, handle, href, variant = "outline" }) {
	const Icon = icons[platform];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: `group relative flex flex-col gap-3 rounded-2xl border border-gold/30 p-4 transition-all duration-300 hover:border-gold hover:gold-glow sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${variant === "solid" ? "bg-black-card" : "bg-black-card/60"}`,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-black shadow-[inset_-2px_-3px_0_#b38a00]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-6 w-6" }, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 54,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 53,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-heading text-xl tracking-wide text-white",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 57,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: handle
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 58,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 56,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 52,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "bg-gold transition-colors group-hover:bg-gold-muted flex shrink-0 items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs font-bold text-black",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
				"VER N",
				[
					"Instagram",
					"YouTube",
					"TikTok"
				].includes(label) ? "O" : "A",
				" ",
				label.toUpperCase()
			] }, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 62,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" }, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 63,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 61,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 44,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/acervo-section.tsx";
var ACERVO_ITEMS = [
	{
		img: { url: "/assets-v1/kit-iniciante-capa.jpg" }.url,
		title: "KIT INICIANTE TEATRO-RPG",
		description: "Material introdutório para começar a unir teatro e RPG hoje mesmo",
		price: "GRÁTIS",
		href: "/kit-iniciante",
		cta: "BAIXAR"
	},
	{
		img: { url: "/assets-v1/ebook-rpg.jpg" }.url,
		title: "COMO ENSINAR TEATRO COM RPG",
		description: "Guia completo para integrar RPG no ensino teatral",
		price: "R$ 24,90",
		href: "/ebooks/teatro-rpg",
		variant: "blue"
	},
	{
		img: { url: "/assets-v1/ebook-criancas.jpg" }.url,
		title: "TEATRO PARA CRIANÇAS",
		description: "Técnicas e atividades teatrais para crianças",
		price: "R$ 19,90",
		href: "https://hotmart.com/pt-br/marketplace/produtos/como-ensinar-teatro-para-criancas/P86223542K?sck=HOTMART_PRODUCT_PAGE"
	},
	{
		img: { url: "/assets-v1/ebook-pacote.png" }.url,
		title: "SUPER PACOTE COMPLETO",
		description: "Todos os 3 ebooks em um único pacote com desconto especial",
		price: "R$ 45,90",
		oldPrice: "R$ 69,80",
		href: "https://go.hotmart.com/L104847133B",
		tag: "MAIOR DESCONTO"
	}
];
function AcervoSection({ items = ACERVO_ITEMS }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "mt-6",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "rounded-3xl border border-gold/20 bg-black-card/50 p-4 backdrop-blur-sm sm:p-6 md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, {
				icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookOpen, { className: "h-5 w-5" }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 63,
					columnNumber: 17
				}, this),
				subtitle: "Nossos E-books autorais escritos por Rogério Horvat",
				children: "ACERVO ORIGINAL"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 62,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-1 gap-5",
				children: items.map((item) => {
					const isInternal = item.href.startsWith("/");
					const isBlue = item.variant === "blue";
					const cardClass = `group flex flex-col gap-3 rounded-2xl border p-3 transition-all duration-300 hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-4 sm:p-4 ${isBlue ? "border-blue-900/40 bg-gradient-to-br from-[#0a192f] to-[#020817] hover:border-blue-500/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]" : "border-gold/30 bg-black hover:border-gold"}`;
					const btnClass = `transition-colors flex shrink-0 items-center justify-center gap-2 sm:justify-between rounded-xl px-4 py-2.5 text-sm font-bold ${isBlue ? "bg-blue-600 text-white hover:bg-blue-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" : "bg-gold text-black group-hover:bg-gold-muted"}`;
					const inner = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: item.img,
							alt: `Capa do e-book ${item.title}`,
							width: 160,
							height: 214,
							loading: "lazy",
							decoding: "async",
							className: "h-40 w-auto shrink-0 self-center rounded-xl object-contain sm:h-32"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 87,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-0 flex-1 text-center sm:text-left",
							children: [
								item.tag && /* @__PURE__ */ (void 0)("span", {
									className: "mb-2 inline-flex items-center gap-2 rounded-full border border-orange/40 px-3 py-1 font-heading text-[11px] tracking-widest text-[#e85d04]",
									children: item.tag
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 98,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "font-heading text-lg leading-tight tracking-wide text-white sm:text-xl",
									children: item.title
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 102,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: `mt-1 text-sm ${isBlue ? "text-blue-100/70" : "text-muted-foreground"}`,
									children: item.description
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 105,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 flex flex-wrap items-baseline justify-center gap-2 sm:justify-start",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: `font-heading text-2xl ${item.price === "GRÁTIS" ? "text-green-500" : isBlue ? "text-blue-400" : "text-foreground"}`,
										children: item.price
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 107,
										columnNumber: 21
									}, this), item.oldPrice && /* @__PURE__ */ (void 0)("span", {
										className: "text-sm text-muted-foreground line-through",
										children: item.oldPrice
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 111,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 106,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 96,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: btnClass,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.cta ?? "COMPRAR" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 118,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 119,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 117,
							columnNumber: 17
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 86,
						columnNumber: 15
					}, this);
					return isInternal ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: item.href,
						className: cardClass,
						children: inner
					}, item.title, false, {
						fileName: _jsxFileName$3,
						lineNumber: 124,
						columnNumber: 15
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: item.href,
						target: "_blank",
						rel: "noopener noreferrer",
						className: cardClass,
						children: inner
					}, item.title, false, {
						fileName: _jsxFileName$3,
						lineNumber: 128,
						columnNumber: 15
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 68,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 61,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 60,
		columnNumber: 5
	}, this);
}
var SOCIAL_LINKS = {
	instagram: "https://www.instagram.com/nerdemcenaoficial",
	youtube: "https://www.youtube.com/@NerdEmCenaOficial",
	tiktok: "https://www.tiktok.com/@nerdemcenaoficial",
	twitch: "https://www.twitch.tv/nerdemcena",
	instagramDm: "https://ig.me/m/nerdemcenaoficial"
};
var CONTACT = {
	email: "mailto:contato.nerdemcena@gmail.com",
	emailAddress: "contato.nerdemcena@gmail.com",
	handle: "@nerdemcenaoficial"
};
var _jsxFileName$2 = "/app/applet/src/routes/index.tsx";
function TwitchIcon({ className = "h-5 w-5" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 22,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 21,
		columnNumber: 5
	}, this);
}
function TikTokIcon({ className = "h-5 w-5" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 30,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Nerd em Cena — Acervo original de teatro e RPG" },
		{
			name: "description",
			content: "Acervo original do Nerd em Cena: animes, games, RPG, cobertura de eventos com humor, e-books e kit iniciante."
		},
		{
			property: "og:title",
			content: "Nerd em Cena — Acervo original de teatro e RPG"
		},
		{
			property: "og:description",
			content: "Acervo original do Nerd em Cena: animes, games, RPG, cobertura de eventos com humor, e-books e kit iniciante."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: Index
});
function Index() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative min-h-screen overflow-x-hidden bg-black dots-bg font-nunito text-foreground selection:bg-gold selection:text-black",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
			className: "relative mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "sr-only",
					children: "Nerd em Cena — Links e Acervo Oficial"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 61,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
					className: "flex flex-col items-center text-center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NerdLogo, {
						glow: false,
						className: "h-28 w-28 rounded-full border-[3px] border-gold p-[3px] shadow-[0_0_20px_rgba(232,191,20,0.4)] transition-transform duration-300 hover:scale-105 sm:h-32 sm:w-32 bg-black"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 65,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex w-full flex-col items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-heading text-sm tracking-[0.25em] text-white sm:text-base",
								children: "@NERDEMCENAOFICIAL"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 67,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-3.5 flex flex-wrap items-center justify-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: SOCIAL_LINKS.instagram,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": "Instagram do Nerd em Cena",
										className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-black shadow-[inset_-2px_-3px_0_#b38a00] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:gold-glow",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Instagram, { className: "h-5 w-5" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 80,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 73,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: SOCIAL_LINKS.youtube,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": "YouTube do Nerd em Cena",
										className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-black shadow-[inset_-2px_-3px_0_#b38a00] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:gold-glow",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Youtube, { className: "h-5 w-5" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 89,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 82,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: SOCIAL_LINKS.tiktok,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": "TikTok do Nerd em Cena",
										className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-black shadow-[inset_-2px_-3px_0_#b38a00] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:gold-glow",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TikTokIcon, { className: "h-5 w-5" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 98,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 91,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: SOCIAL_LINKS.twitch,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": "Twitch do Nerd em Cena",
										className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-black shadow-[inset_-2px_-3px_0_#b38a00] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:gold-glow",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TwitchIcon, { className: "h-5 w-5" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 107,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 100,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 72,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 max-w-md text-sm text-muted-foreground sm:text-base",
								children: "Animes, games, Eventos e RPG"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 111,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 66,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 64,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "mt-7",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-3xl border border-gold/20 bg-black-card/50 p-4 backdrop-blur-sm sm:p-6 md:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, {
							icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clapperboard, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 120,
								columnNumber: 33
							}, this),
							children: "NOSSO CONTEÚDO"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 120,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-1 gap-3.5 sm:gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SocialButton, {
									platform: "instagram",
									label: "Instagram",
									handle: "@NerdEmCenaOficial",
									href: SOCIAL_LINKS.instagram
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 124,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SocialButton, {
									platform: "youtube",
									label: "YouTube",
									handle: "Nerd em Cena",
									href: SOCIAL_LINKS.youtube
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 130,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SocialButton, {
									platform: "tiktok",
									label: "TikTok",
									handle: "@NerdEmCenaOficial",
									href: SOCIAL_LINKS.tiktok
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 136,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SocialButton, {
									platform: "twitch",
									label: "Twitch",
									handle: "nerdemcena",
									href: SOCIAL_LINKS.twitch
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 142,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 123,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 119,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 118,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcervoSection, {}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 153,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/torneios",
						className: "group block rounded-3xl border border-gold/20 bg-black-card/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:gold-glow sm:p-6 md:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, {
							icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Swords, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 162,
								columnNumber: 21
							}, this),
							subtitle: "Desafios, disputas e prêmios para quem vive de animes, games e cultura pop.",
							children: ["TORNEIOS ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-gold",
								children: "(EM BREVE)"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 165,
								columnNumber: 24
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 161,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex flex-col items-start gap-4 sm:flex-col sm:items-start",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-orange/40 px-3 py-1 font-heading text-[11px] tracking-widest text-[#e85d04]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "h-3 w-3" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 169,
									columnNumber: 17
								}, this), "SELADO POR ENQUANTO"]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 168,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "bg-gold transition-colors group-hover:bg-gold-muted inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-black sm:w-auto",
								children: ["DESCOBRIR", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 174,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 172,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 167,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 157,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 156,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-3xl border border-gold/20 bg-black-card/50 p-4 backdrop-blur-sm sm:p-6 md:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, {
							icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 184,
								columnNumber: 21
							}, this),
							subtitle: "Dúvidas, sugestões, parcerias ou convites para eventos? Chama a gente!",
							children: "FALE COM A GENTE"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 183,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: SOCIAL_LINKS.instagramDm,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group flex items-center justify-between gap-3 rounded-2xl bg-gold p-4 text-black transition-all duration-300 hover:scale-[1.02] hover:gold-glow sm:p-5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex min-w-0 items-center gap-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold text-black shadow-[inset_-2px_-3px_0_#b38a00]",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Instagram, { className: "h-5 w-5" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 199,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 198,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "block font-heading text-xs uppercase tracking-wider text-black/70",
											children: "INSTAGRAM DIRECT"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 202,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "block truncate text-xl text-black sm:text-2xl font-bebas tracking-wider",
											children: CONTACT.handle
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 205,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 201,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 197,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 210,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 191,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: CONTACT.email,
								className: "group flex items-center justify-between gap-3 rounded-2xl border border-gold/40 bg-gold/5 p-4 text-foreground transition-all duration-300 hover:border-gold hover:bg-gold/10 sm:p-5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex min-w-0 items-center gap-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold text-black shadow-[inset_-2px_-3px_0_#b38a00]",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-5 w-5" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 219,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 218,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "block font-heading text-xs uppercase tracking-wider text-[#ff6500]",
											children: "E-MAIL PROFISSIONAL"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 222,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "block truncate text-xs font-medium text-foreground sm:text-sm",
											children: CONTACT.emailAddress
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 225,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 221,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 217,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-5 w-5 shrink-0 text-gold transition-transform group-hover:translate-x-1" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 230,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 213,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 190,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 182,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 181,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
					className: "mt-12 flex flex-col items-center justify-between gap-6 border-t border-gold/20 py-8 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col items-center gap-3 sm:flex-row sm:gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NerdLogo, {
							className: "h-14 w-14",
							glow: false
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 239,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-center sm:text-left",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-heading text-xl tracking-wide text-foreground",
								children: [
									"NERD ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-gold",
										children: "EM"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 242,
										columnNumber: 22
									}, this),
									" CENA"
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 241,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									"Onde a cultura nerd ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-gold",
										children: "vira cena"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 245,
										columnNumber: 37
									}, this),
									"."
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 244,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 240,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 238,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-center text-sm text-muted-foreground sm:text-right",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Nerd em Cena.",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", { className: "hidden sm:inline" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 250,
								columnNumber: 55
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "sm:hidden",
								children: " "
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 251,
								columnNumber: 13
							}, this),
							"Todos os direitos reservados."
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 249,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 237,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 60,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 59,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$1 = () => import("./kit-iniciante-D2wlDweg.mjs");
var Route$3 = createFileRoute("/kit-iniciante")({
	head: () => ({
		meta: [
			{ title: "Teatro-RPG Kit Iniciante — Baixe grátis" },
			{
				name: "description",
				content: "Baixe grátis o Kit Iniciante de Teatro-RPG: ficha de personagem exclusiva, guia de 2 jogos práticos e uma aventura base para começar hoje mesmo."
			},
			{
				property: "og:title",
				content: "Teatro-RPG Kit Iniciante — Baixe grátis"
			},
			{
				property: "og:description",
				content: "Ficha de personagem, 2 jogos práticos e uma aventura base. Tudo que você precisa para iniciar uma aventura de Teatro-RPG."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Cinzel:wght@400;700;900&display=swap"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var _jsxFileName$1 = "/app/applet/src/routes/midiakit.tsx";
var Route$2 = createFileRoute("/midiakit")({
	head: () => ({ meta: [
		{ title: "Nerd em Cena — Mídia Kit 2026" },
		{
			name: "description",
			content: "Mídia kit do Nerd em Cena: 21 mil seguidores, 13,39% de engajamento, cobertura de eventos, curiosidades e humor sobre animes, games e cultura pop."
		},
		{
			property: "og:title",
			content: "Nerd em Cena — Mídia Kit 2026"
		},
		{
			property: "og:description",
			content: "Números reais, audiência e entregáveis de cobertura do @nerdemcenaoficial."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: MidiaKitPage
});
var HERO_TAGS = [
	"Animes",
	"Games",
	"Cultura Pop",
	"CNPJ 60.907.624/0001-19",
	"Emite NF"
];
var AGE_RANGES = [
	{
		label: "18–24",
		value: 13,
		width: "40%"
	},
	{
		label: "25–34",
		value: 29,
		width: "90%"
	},
	{
		label: "35–44",
		value: 32,
		width: "100%"
	},
	{
		label: "45–54",
		value: 16,
		width: "50%"
	},
	{
		label: "55–64",
		value: 6,
		width: "20%"
	}
];
var CONTENT_TAGS = [
	"Cobertura de eventos",
	"Curiosidades",
	"Entretenimento",
	"Humor",
	"Bastidores"
];
function MidiaKitPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-blk font-nunito text-wh selection:bg-y selection:text-blk",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
			className: "animate-mk-in relative overflow-hidden border-b-[5px] border-blk bg-y py-12 pb-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.04),rgba(0,0,0,0.04)1px,transparent_1px,transparent_12px)]" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 51,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-10 mx-auto max-w-[960px] px-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "mb-6 inline-flex items-center gap-2 font-bebas text-[0.85rem] uppercase tracking-[0.2em] text-blk/70 transition-colors hover:text-blk",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 57,
						columnNumber: 13
					}, this), " Voltar para os links"]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 53,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-1 items-center gap-7 sm:grid-cols-[auto_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						"aria-label": "Voltar para a página inicial",
						className: "animate-mk-pop mx-auto block h-28 w-28 shrink-0 transition-transform hover:scale-105 sm:mx-0",
						style: { animationDelay: "0.1s" },
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NerdLogo, { className: "h-full w-full" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 67,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 61,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "animate-mk-in text-center sm:text-left",
						style: { animationDelay: "0.15s" },
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
								className: "mb-2 font-bangers text-[clamp(2.6rem,6vw,4.2rem)] leading-[0.92] tracking-[0.04em] text-blk",
								children: [
									"Nerd em Cena",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 76,
										columnNumber: 17
									}, this),
									"Mídia Kit 2026"
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 74,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mb-3 font-bebas text-[0.9rem] tracking-[0.2em] text-black/55",
								children: "@nerdemcenaoficial · Parcerias e Patrocínios"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 79,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-wrap justify-center gap-2 sm:justify-start",
								children: HERO_TAGS.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-[3px] bg-blk px-3 py-1 font-bebas text-[0.7rem] tracking-[0.14em] text-y",
									children: tag
								}, tag, false, {
									fileName: _jsxFileName$1,
									lineNumber: 84,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 82,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 70,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 60,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 52,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 50,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "dots-bg bg-blk",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					id: "numbers",
					className: "border-b border-y/10 bg-black/40 py-16",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mx-auto max-w-[960px] px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "animate-mk-in mb-11",
								style: { animationDelay: "0.2s" },
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "mb-2 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org",
									children: "// dados verificados · Instagram Insights · mai 2026"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 103,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "font-bangers text-[clamp(2.6rem,7vw,4.2rem)] leading-[0.95] text-wh",
									children: ["Números ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-y",
										children: "reais"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 107,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 106,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 102,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mb-5 grid w-full gap-5 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "animate-mk-in relative -rotate-1 rounded-[18px] border-2 !border-t-4 border-dashed border-y/20 !border-t-y bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:-rotate-1 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]",
									style: { animationDelay: "0.25s" },
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-2 left-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 118,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-2 right-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 119,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mb-5 inline-flex items-center gap-2 rounded-full border border-y/20 px-3.5 py-1.5 font-bebas text-[0.8rem] uppercase tracking-[0.15em] text-mut",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Instagram, { className: "h-3.5 w-3.5" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 121,
												columnNumber: 19
											}, this), " Instagram"]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 120,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "block font-bangers text-[4.5rem] leading-[0.9] text-wh drop-shadow-[2px_2px_0_rgba(0,0,0,1)]",
											children: "21.148"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 123,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mb-6 mt-1 font-bebas text-[1rem] uppercase tracking-[0.18em] text-mut",
											children: "Seguidores"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 126,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mb-3 inline-flex items-center gap-2 rounded-md border border-org/30 bg-org/15 px-3.5 py-2 text-[0.85rem] font-bold text-org",
											children: "↑ +2.245 em 30 dias (+9,5%)"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 129,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-[0.8rem] font-semibold text-mut",
											children: "Crescimento constante no nicho"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 132,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 114,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "animate-mk-in relative h-full rotate-1 rounded-[18px] border-2 !border-t-4 border-dashed border-y/20 !border-t-org bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:rotate-1 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]",
									style: { animationDelay: "0.3s" },
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-2 left-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 142,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-2 right-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 143,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mb-5 inline-flex items-center gap-2 rounded-full border border-y/20 px-3.5 py-1.5 font-bebas text-[0.8rem] uppercase tracking-[0.15em] text-mut",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageSquare, { className: "h-3.5 w-3.5" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 145,
												columnNumber: 19
											}, this), " Taxa de Engajamento"]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 144,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "block font-bangers text-[5rem] leading-[0.9] text-org drop-shadow-[3px_3px_0_rgba(0,0,0,1)]",
											children: "13,39%"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 147,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "my-5 inline-flex items-center gap-1.5 rounded-full border-transparent bg-y px-3.5 py-1.5 font-bebas text-[0.82rem] uppercase tracking-[0.15em] text-blk",
											children: "EXCEPCIONAL"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 150,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-[0.85rem] leading-[1.6] text-mut",
											children: [
												"Média geral do nicho (10K–100K): ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
													className: "text-wh",
													children: "1% a 5%"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 154,
													columnNumber: 52
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 155,
													columnNumber: 19
												}, this),
												"A cada 100 seguidores, mais de 13 interagem ativamente com a página todos os dias."
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 153,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 138,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 112,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 gap-5 md:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "animate-mk-in relative rounded-[18px] border-2 border-dashed border-y/20 bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]",
										style: { animationDelay: "0.35s" },
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "mb-3 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org",
												children: "// views / mês"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 167,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "block font-bangers text-[3.5rem] leading-[0.9] text-wh",
												children: "259K"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 170,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "mt-3 text-[0.82rem] leading-snug text-mut",
												children: "Visualizações totais somando vídeos em alta"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 171,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 163,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "animate-mk-in relative rounded-[18px] border-2 border-dashed border-y/20 bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]",
										style: { animationDelay: "0.4s" },
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "mb-3 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org",
												children: "// compartilhamentos"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 180,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "block font-bangers text-[3.5rem] leading-[0.9] text-wh",
												children: "3.502"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 183,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "mt-3 text-[0.82rem] leading-snug text-mut",
												children: "Pessoas que enviam para o grupo geek / amigos"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 186,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 176,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "animate-mk-in relative rounded-[18px] border-2 border-dashed border-y/20 bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]",
										style: { animationDelay: "0.45s" },
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "mb-3 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org",
												children: "// salvamentos / mês"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 195,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "block font-bangers text-[3.5rem] leading-[0.9] text-wh",
												children: "1.553"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 198,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "mt-3 text-[0.82rem] leading-snug text-mut",
												children: "Indicador de conteúdo com alto valor e retenção"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 201,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 191,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 162,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 101,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 100,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					id: "audience",
					className: "border-b border-y/10 py-16",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mx-auto max-w-[960px] px-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "animate-mk-in mb-11",
							style: { animationDelay: "0.2s" },
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "mb-2 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org",
									children: "// perfil do público"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 213,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "font-bangers text-[clamp(2.6rem,7vw,4.2rem)] leading-[0.95] text-wh",
									children: ["Quem assiste ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-y",
										children: "é o seu público"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 217,
										columnNumber: 30
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 216,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-[0.9rem] text-mut",
									children: "O mesmo fã que compra ingresso, merchandising e quer ir no evento no final de semana."
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 219,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 212,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid w-full gap-5 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "animate-mk-in relative -rotate-1 rounded-[18px] border-2 border-dashed border-y/20 bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]",
								style: { animationDelay: "0.25s" },
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-2 left-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 231,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-2 right-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 232,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "mb-3 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-y",
										children: "// faixa etária"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 233,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mb-6 text-[0.85rem] text-mut",
										children: "Pico de retenção em 25–44 anos — o adulto fã com poder de compra."
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 236,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-4",
										children: AGE_RANGES.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "grid grid-cols-[52px_1fr_40px] items-center gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-bebas text-[0.9rem] tracking-[0.1em] text-wh/80",
													children: r.label
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 245,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "h-2.5 overflow-hidden rounded-full border border-white/5 bg-black/50",
													children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: `h-full rounded-full ${r.value >= 25 ? "bg-y" : r.value >= 15 ? "bg-org" : "bg-y/30"}`,
														style: { width: r.width }
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 249,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 248,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-right font-bangers text-[1.1rem] tracking-wide text-y",
													children: [r.value, "%"]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 256,
													columnNumber: 23
												}, this)
											]
										}, r.label, true, {
											fileName: _jsxFileName$1,
											lineNumber: 241,
											columnNumber: 21
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 239,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-7 rounded border border-org/20 bg-org/10 p-3 text-center font-bebas text-[1.1rem] tracking-[0.05em] text-org drop-shadow-md",
										children: "61% do público está ativo entre 25 e 44 anos"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 262,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 227,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col gap-5",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "animate-mk-in relative h-full rotate-1 rounded-[18px] border-2 border-dashed border-y/20 bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]",
									style: { animationDelay: "0.3s" },
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "mb-5 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org",
											children: "// gênero & demografia"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 273,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mb-6 flex flex-wrap items-center gap-4 border-b border-white/10 pb-6 sm:flex-nowrap sm:gap-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "font-bangers text-[2.5rem] leading-none text-wh drop-shadow-md sm:text-[3.5rem]",
													children: "59%"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 278,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "mt-1 font-bebas text-[0.9rem] tracking-[0.15em] text-mut",
													children: "Masculino"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 281,
													columnNumber: 23
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 277,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden h-12 w-[1px] bg-white/10 sm:block" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 285,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "font-bangers text-[2.5rem] leading-none text-y drop-shadow-md sm:text-[3.5rem]",
													children: "29%"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 287,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "mt-1 font-bebas text-[0.9rem] tracking-[0.15em] text-mut",
													children: "Feminino"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 290,
													columnNumber: 23
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 286,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 276,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "mb-3 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org",
											children: "// alcance regional"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 296,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mb-2 font-bangers text-[4.5rem] leading-none text-y drop-shadow-[2px_2px_0_rgba(0,0,0,1)]",
											children: "90% BR"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 299,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-[0.85rem] leading-relaxed text-mut",
											children: [
												"A esmagadora audiência é ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
													className: "text-wh",
													children: "brasileira"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 303,
													columnNumber: 46
												}, this),
												" focada na região sudeste.",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 305,
													columnNumber: 21
												}, this),
												"Top 5 capitais: ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-bold text-org",
													children: "SP"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 306,
													columnNumber: 37
												}, this),
												" · RJ · Manaus · Fortaleza · BH"
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 302,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 269,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 268,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 225,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 211,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 210,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					id: "about",
					className: "border-b border-y/10 py-16",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mx-auto max-w-[960px] px-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "animate-mk-in mb-11",
							style: { animationDelay: "0.2s" },
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "mb-2 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org",
									children: "// apresentação"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 319,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "font-bangers text-[clamp(2.6rem,7vw,4.2rem)] leading-[0.95] text-wh",
									children: ["Quem é o ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-y",
										children: "Nerd em Cena"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 323,
										columnNumber: 26
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 322,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-[0.9rem] text-mut",
									children: "Não é jornalismo. É o fã que faz conteúdo."
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 325,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 318,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid w-full gap-5 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "animate-mk-in relative -rotate-1 rounded-[18px] border-2 !border-t-4 border-dashed border-y/20 !border-t-y bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]",
								style: { animationDelay: "0.25s" },
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-2 left-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 336,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-2 right-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 337,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "mb-3 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org",
										children: "// o criador"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 338,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "mb-4 font-bangers text-[1.8rem] tracking-[0.05em] text-wh",
										children: "Rogério Horvat"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 341,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mb-6 text-[0.9rem] leading-relaxed text-wh/75",
										children: "Produtor cultural e ator com anos de experiência, especializado em transformar a cultura nerd em experiência cênica. Une teatro, cosplay, anime, RPG, games e cultura pop para levar o público viver o universo dos personagens."
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 344,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "inline-flex items-center gap-2 rounded-full border border-y/20 bg-y/5 px-4 py-1.5 font-bebas text-xs tracking-[0.1em] text-mut",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-block h-2 w-2 rounded-full bg-y" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 350,
											columnNumber: 19
										}, this), "CNPJ 60.907.624/0001-19 · Emite NF"]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 349,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 332,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "animate-mk-in relative h-full rotate-1 rounded-[18px] border-2 !border-t-4 border-dashed border-y/20 !border-t-org bg-[#111100] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)]",
								style: { animationDelay: "0.3s" },
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-2 left-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 360,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-2 right-[22px] h-[13px] w-[13px] rounded-full border-2 border-y/20 bg-blk" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 361,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "mb-3 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org",
										children: "// estilo de conteúdo"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 362,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mb-6 text-[0.9rem] leading-relaxed text-wh/75",
										children: "Cobertura de eventos vivida de dentro, curiosidades sobre animes, games e cultura pop, e muito humor. Entretenimento leve, com reações genuínas e bastidores — o tipo de conteúdo que o público assiste até o fim e compartilha."
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 365,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap gap-2",
										children: CONTENT_TAGS.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-y/20 bg-y/5 px-3.5 py-1.5 font-bebas text-[0.82rem] uppercase tracking-[0.1em] text-mut",
											children: tag
										}, tag, false, {
											fileName: _jsxFileName$1,
											lineNumber: 372,
											columnNumber: 21
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 370,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 356,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 330,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 317,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 316,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					id: "portfolio",
					className: "border-b border-y/10 bg-black/30 py-16",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mx-auto max-w-[960px] px-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "animate-mk-in mb-11",
							style: { animationDelay: "0.2s" },
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "mb-2 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org",
									children: "// conteúdo em três plataformas"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 389,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "font-bangers text-[clamp(2.6rem,7vw,4.2rem)] leading-[0.95] text-wh",
									children: ["Vídeos que ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-y",
										children: "performam"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 393,
										columnNumber: 28
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 392,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-[0.9rem] text-mut",
									children: "Assista aqui mesmo. Números orgânicos, sem impulsionamento pago."
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 395,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 388,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "animate-mk-in flex flex-col",
									style: { animationDelay: "0.25s" },
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex h-full flex-col rounded-[18px] border-2 border-dashed border-y/30 bg-[#111100] p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "mb-3 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "flex items-center gap-2 font-bebas text-[0.8rem] uppercase tracking-[0.18em] text-mut",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "h-3.5 w-3.5 fill-org text-org" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 406,
														columnNumber: 23
													}, this), " TikTok"]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 405,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "inline-flex items-center gap-1.5 rounded-full border border-org/30 bg-org/15 px-3.5 py-1.5 font-bebas text-[0.82rem] uppercase tracking-[0.1em] text-org",
													children: "Viralizou 🚀"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 408,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 404,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "h-[520px] w-full overflow-hidden rounded-xl bg-black",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
													src: "https://www.tiktok.com/embed/v2/7637615685648043284",
													className: "h-full w-full border-none",
													title: "Vídeo no TikTok",
													allowFullScreen: true,
													allow: "autoplay; encrypted-media"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 413,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 412,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "mt-4 text-center",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "font-bangers text-[3.4rem] leading-[0.9] text-y drop-shadow-[3px_3px_0_rgba(255,140,0,0.3)]",
													children: "1M+"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 422,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "mt-1 font-bebas text-[0.95rem] uppercase tracking-[0.15em] text-mut",
													children: "Visualizações orgânicas"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 425,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 421,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 403,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 402,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "animate-mk-in flex flex-col",
									style: { animationDelay: "0.3s" },
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex h-full flex-col rounded-[18px] border-2 border-dashed border-y/30 bg-[#111100] p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "mb-3 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "flex items-center gap-2 font-bebas text-[0.8rem] uppercase tracking-[0.18em] text-mut",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Instagram, { className: "h-3.5 w-3.5 text-y" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 437,
														columnNumber: 23
													}, this), " Instagram"]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 436,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "inline-flex items-center gap-1.5 rounded-full border border-org/30 bg-org/15 px-3.5 py-1.5 font-bebas text-[0.82rem] uppercase tracking-[0.1em] text-org",
													children: "Reel"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 439,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 435,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "h-[520px] w-full overflow-hidden rounded-xl bg-black",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
													src: "https://www.instagram.com/p/DbrLrbgoTaf/embed",
													className: "h-full w-full border-none",
													title: "Reel no Instagram",
													allowFullScreen: true
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 444,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 443,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "mt-4 text-center",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "font-bangers text-[3.4rem] leading-[0.9] text-y drop-shadow-[3px_3px_0_rgba(255,140,0,0.3)]",
													children: "368K"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 452,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "mt-1 font-bebas text-[0.95rem] uppercase tracking-[0.15em] text-mut",
													children: "Views / mês no perfil"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 455,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 451,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 434,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 433,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "animate-mk-in flex flex-col",
									style: { animationDelay: "0.35s" },
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex h-full flex-col rounded-[18px] border-2 border-dashed border-y/30 bg-[#111100] p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "mb-3 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "flex items-center gap-2 font-bebas text-[0.8rem] uppercase tracking-[0.18em] text-mut",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Youtube, { className: "h-4 w-4 text-org" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 467,
														columnNumber: 23
													}, this), " YouTube"]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 466,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "inline-flex items-center gap-1.5 rounded-full border border-org/30 bg-org/15 px-3.5 py-1.5 font-bebas text-[0.82rem] uppercase tracking-[0.1em] text-org",
													children: "Shorts"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 469,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 465,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "h-[520px] w-full overflow-hidden rounded-xl bg-black",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
													src: "https://www.youtube.com/embed/j1NtCBQ_fTc",
													className: "h-full w-full border-none",
													title: "Vídeo no YouTube",
													allowFullScreen: true,
													allow: "accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 474,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 473,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "mt-4 text-center",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "font-bangers text-[3.4rem] leading-[0.9] text-y drop-shadow-[3px_3px_0_rgba(255,140,0,0.3)]",
													children: "13,39%"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 483,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "mt-1 font-bebas text-[0.95rem] uppercase tracking-[0.15em] text-mut",
													children: "Taxa de engajamento"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 486,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 482,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 464,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 463,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 400,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 387,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 386,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					id: "request",
					className: "border-b border-y/10 bg-black/40 pb-24 pt-16",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mx-auto max-w-[960px] px-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "animate-mk-in mb-11 text-center",
							style: { animationDelay: "0.2s" },
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "mb-2 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org",
									children: "// parcerias e patrocínios"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 500,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "font-bangers text-[clamp(2.6rem,7vw,4.2rem)] leading-[0.95] text-wh",
									children: ["O que eu ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-y",
										children: "entrego"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 504,
										columnNumber: 26
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 503,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-[0.9rem] text-mut",
									children: "Formatos flexíveis para marcas, eventos e patrocínios."
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 506,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 499,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "animate-mk-in relative mx-auto mt-12 w-full max-w-5xl",
							style: { animationDelay: "0.25s" },
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid w-full items-stretch gap-6 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative flex flex-col justify-center overflow-hidden rounded-[20px] border border-y/20 bg-gradient-to-br from-[#1a1200] to-[#332200] p-8 shadow-[0_0_20px_rgba(255,214,0,0.1)]",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "pointer-events-none absolute right-0 top-0 flex p-8 text-y opacity-10",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Instagram, { className: "h-[120px] w-[120px] rotate-12" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 519,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 518,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative z-10 flex h-full flex-col justify-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "mb-3 flex items-center gap-2 font-bebas text-[1rem] tracking-[0.2em] text-y",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-2.5 w-2.5 animate-pulse rounded-full bg-y" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 523,
													columnNumber: 23
												}, this), "Formatos disponíveis"]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 522,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "mb-4 font-bangers text-[clamp(2.5rem,5vw,3.5rem)] leading-[1] text-wh",
												children: [
													"Publi, cobertura",
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 528,
														columnNumber: 23
													}, this),
													"e patrocínio"
												]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 526,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "mb-8 max-w-[90%] text-[0.95rem] leading-relaxed text-mut",
												children: [
													"Reels e Shorts patrocinados, cobertura de evento com equipe de",
													" ",
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "2 pessoas" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 532,
														columnNumber: 23
													}, this),
													", ações de humor e curiosidades com o produto integrado."
												]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 530,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "mt-auto flex flex-wrap gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "rounded border border-y/30 bg-y/10 px-4 py-2.5 font-bebas text-[1.05rem] tracking-[0.1em] text-y",
													children: "CNPJ · Emite NF"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 536,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "rounded border border-org/30 bg-org/10 px-4 py-2.5 font-bebas text-[1.05rem] tracking-[0.1em] text-org",
													children: "Mídia 100% Orgânica"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 539,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 535,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 521,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 517,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex flex-col rounded-[20px] border border-white/5 bg-black/40 p-8 shadow-lg",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "mb-8 font-bangers text-[2rem] tracking-wide text-wh",
										children: "Entregáveis"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 548,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
										className: "grid flex-1 gap-6 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "flex flex-col gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-y to-org shadow-md",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "ml-1 h-[22px] w-[22px] fill-blk text-blk" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 554,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 553,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
												className: "mb-1 block text-[1.1rem] text-wh",
												children: "Vídeo vertical multiplataforma"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 557,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "block text-[0.9rem] leading-[1.6] text-mut",
												children: "O mesmo conteúdo publicado no Instagram, TikTok e YouTube Shorts."
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 560,
												columnNumber: 25
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 556,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 552,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "flex flex-col gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-y to-org shadow-md",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Instagram, { className: "h-[22px] w-[22px] text-blk" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 567,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 566,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
												className: "mb-1 block text-[1.1rem] text-wh",
												children: "Stories ao vivo e bastidores"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 570,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "block text-[0.9rem] leading-[1.6] text-mut",
												children: "Interação constante, curiosidades e humor durante toda a ação."
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 573,
												columnNumber: 25
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 569,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 565,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 551,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 547,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 515,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 511,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 498,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 497,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					id: "contact",
					className: "border-t border-y/20 bg-blk pb-32 pt-16",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mx-auto max-w-[960px] px-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "animate-mk-in mb-11",
							style: { animationDelay: "0.2s" },
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "mb-2 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org",
									children: "// vamos crescer juntos"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 589,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "font-bangers text-[clamp(2.6rem,7vw,4.2rem)] leading-[0.95] text-wh",
									children: ["Dê o ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-y",
										children: "próximo passo"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 593,
										columnNumber: 22
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 592,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-[0.9rem] text-mut",
									children: "Respondemos rápido no direct e no e-mail."
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 595,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 588,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mx-auto grid w-full max-w-4xl gap-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: SOCIAL_LINKS.instagramDm,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "animate-mk-in group flex flex-col items-start justify-between gap-4 rounded-xl border-2 border-border bg-[#111100] p-6 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:border-org hover:shadow-[0_15px_30px_rgba(255,101,0,0.15)] md:flex-row md:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center",
								style: { animationDelay: "0.25s" },
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-org/20 bg-org/10 text-org transition-all group-hover:scale-110 group-hover:bg-org group-hover:text-black",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Instagram, { className: "h-5 w-5" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 610,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 609,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mb-0.5 font-bebas text-[0.8rem] uppercase tracking-[0.1em] text-org",
										children: "Instagram Direct"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 613,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "font-bangers text-[1.4rem] lowercase tracking-wide text-wh",
										children: CONTACT.handle
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 616,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 612,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 608,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "hidden h-6 w-6 text-mut transition-colors group-hover:text-org xl:block" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 621,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 601,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: CONTACT.email,
								className: "animate-mk-in group flex flex-col items-start justify-between gap-4 overflow-hidden rounded-xl border-2 border-border bg-[#111100] p-6 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:border-y hover:shadow-[0_15px_30px_rgba(255,214,0,0.15)] md:flex-row md:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center",
								style: { animationDelay: "0.3s" },
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-y/20 bg-y/10 text-y transition-all group-hover:scale-110 group-hover:bg-y group-hover:text-black",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-5 w-5" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 631,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 630,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "min-w-0 pr-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mb-0.5 truncate font-bebas text-[0.8rem] uppercase tracking-[0.1em] text-y",
											children: "E-mail Profissional"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 634,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "truncate font-bangers text-[1rem] lowercase tracking-wide text-wh md:text-[1.1rem]",
											children: CONTACT.emailAddress
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 637,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 633,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 629,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "hidden h-6 w-6 shrink-0 text-mut transition-colors group-hover:text-y xl:block" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 642,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 624,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 600,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 587,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 586,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
					className: "border-t border-y/20 bg-black/60 py-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 font-bebas text-[0.85rem] uppercase tracking-[0.2em] text-mut transition-colors hover:text-y",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 654,
							columnNumber: 13
						}, this), " Voltar para os links"]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 650,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 font-nunito text-xs text-mut",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Nerd em Cena · CNPJ 60.907.624/0001-19"
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 656,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 649,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 98,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 48,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/torneios.tsx";
var Route$1 = createFileRoute("/torneios")({
	head: () => ({ meta: [
		{ title: "Nerd em Cena — Torneios (Em Breve)" },
		{
			name: "description",
			content: "Torneios Nerd em Cena: desafios, disputas e prêmios para quem vive de animes, games e cultura pop. Algo épico está sendo forjado!"
		},
		{
			property: "og:title",
			content: "Nerd em Cena — Torneios (Em Breve)"
		},
		{
			property: "og:description",
			content: "Desafios, disputas e prêmios para quem vive de animes, games e cultura pop. Em breve no Nerd em Cena."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: TorneiosPage
});
var TAGS = [
	"Animes",
	"Games",
	"Disputas",
	"Prêmios",
	"Ranking Geek",
	"Cosplays"
];
var PREVIEW_CARDS = [
	{
		icon: Swords,
		tag: "// Dramaturgias e Cosplay",
		title: "Disputas de Escritores e Cosplayers",
		desc: "Seja o melhor na escrita ou na interpretação e se torne o campeão.",
		accent: "text-y"
	},
	{
		icon: Trophy,
		tag: "// recompensas reais",
		title: "Premiações & Troféus",
		desc: "Itens lendários, colecionáveis, brindes exclusivos e reconhecimento no Hall da Fama do Nerd em Cena.",
		accent: "text-org"
	},
	{
		icon: Gamepad2,
		tag: "// transmissão & zoeira",
		title: "Cobertura & Muito Humor",
		desc: "Melhores momentos transmitidos com narração descontraída, react dos participantes e aquela resenha imperdível.",
		accent: "text-y"
	}
];
function TorneiosPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-black font-nunito text-wh selection:bg-y selection:text-blk",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
			className: "relative overflow-hidden border-b-[5px] border-blk bg-y py-12 pb-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.04),rgba(0,0,0,0.04)1px,transparent_1px,transparent_12px)]" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-10 mx-auto max-w-[960px] px-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "mb-6 inline-flex items-center gap-2 font-bebas text-[0.85rem] uppercase tracking-[0.2em] text-blk/70 transition-colors hover:text-blk",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 13
					}, this), " Voltar"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-1 items-center gap-7 sm:grid-cols-[auto_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						"aria-label": "Voltar para a página inicial",
						className: "mx-auto block h-28 w-28 shrink-0 transition-transform hover:scale-105 sm:mx-0",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NerdLogo, { className: "h-full w-full" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-center sm:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mb-2 inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1 font-bebas text-[0.75rem] uppercase tracking-[0.16em] text-y",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "h-3 w-3" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 80,
									columnNumber: 17
								}, this), " Selado por enquanto"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
								className: "mb-2 font-bangers text-[clamp(2.6rem,6vw,4.2rem)] leading-[0.92] tracking-[0.04em] text-blk",
								children: "Torneios Nerd em Cena"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 82,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mb-3 font-bebas text-[0.9rem] tracking-[0.2em] text-black/60",
								children: "Desafios · Disputas · Prêmios para quem vive a cultura pop"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-wrap justify-center gap-2 sm:justify-start",
								children: TAGS.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-[3px] bg-black px-3 py-1 font-bebas text-[0.7rem] tracking-[0.14em] text-y",
									children: tag
								}, tag, false, {
									fileName: _jsxFileName,
									lineNumber: 90,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "dots-bg bg-black py-16",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "mx-auto max-w-[960px] px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative mb-8 overflow-hidden rounded-[20px] border-2 border-dashed border-y/30 bg-[#111100] p-8 text-center sm:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-2 left-6 h-[14px] w-[14px] rounded-full border-2 border-y/20 bg-black" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-2 right-6 h-[14px] w-[14px] rounded-full border-2 border-y/20 bg-black" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 109,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-y/40 bg-y/10 shadow-[0_0_30px_rgba(232,191,20,0.2)]",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Swords, { className: "h-10 w-10 text-y animate-pulse" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 112,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "mt-6 block font-bebas text-[0.85rem] uppercase tracking-[0.25em] text-org",
								children: "// arena em construção"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 115,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "mt-2 font-bangers text-[clamp(2.4rem,6vw,3.8rem)] leading-[0.95] text-wh",
								children: ["ALGO ESTÁ SENDO ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-y",
									children: "FORJADO"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 120,
									columnNumber: 31
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-mut sm:text-[1.05rem]",
								children: "Estamos preparando a arena definitiva para quem ama animes, games, cultura pop e duelos. Teste seus conhecimentos, dispute com amigos e conquiste prêmios reais em torneios online e presenciais!"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 123,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: SOCIAL_LINKS.instagram,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "bg-gold transition-colors group-hover:bg-gold-muted inline-flex w-full items-center justify-center gap-2.5 rounded-[12px] border-2 border-blk/30 px-6 py-3.5 font-bebas text-[1rem] uppercase tracking-[0.14em] text-blk shadow-[3px_3px_0_rgba(255,140,0,0.6)] transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0_rgba(255,140,0,0.6)] sm:w-auto",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Instagram, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 136,
										columnNumber: 17
									}, this), "Quero ser avisado primeiro"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/",
									className: "inline-flex w-full items-center justify-center gap-2 rounded-[12px] border-2 border-white/20 bg-black/40 px-6 py-3.5 font-bebas text-[1rem] uppercase tracking-[0.14em] text-wh transition-all hover:border-y hover:text-y sm:w-auto",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 143,
										columnNumber: 17
									}, this), "Voltar"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 129,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mb-10 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "mb-2 block font-bebas text-[0.8rem] uppercase tracking-[0.2em] text-org",
								children: "// modalidades & formato"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "font-bangers text-[clamp(2.4rem,5vw,3.2rem)] leading-none text-wh",
								children: ["O QUE VEM ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-y",
									children: "POR AÍ"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 156,
									columnNumber: 27
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 155,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 151,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-1 gap-6 md:grid-cols-3",
							children: PREVIEW_CARDS.map((card, idx) => {
								const Icon = card.icon;
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: `relative rounded-[18px] border-2 border-dashed border-y/20 bg-[#111100] px-7 py-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-y/50 hover:shadow-[0_20px_40px_-12px_rgba(255,214,0,0.15)] ${idx % 2 === 0 ? "-rotate-1" : "rotate-1"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-2 left-[22px] h-[12px] w-[12px] rounded-full border-2 border-y/20 bg-black" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 170,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-2 right-[22px] h-[12px] w-[12px] rounded-full border-2 border-y/20 bg-black" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 171,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mb-4 flex h-12 w-12 items-center justify-center rounded-[12px] bg-gradient-to-br from-y to-org shadow-md",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-6 w-6 text-blk" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 174,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 173,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "mb-2 block font-bebas text-[0.78rem] uppercase tracking-[0.18em] text-org",
											children: card.tag
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 177,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "mb-3 font-bangers text-[1.5rem] tracking-wide text-wh",
											children: card.title
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 181,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-[0.88rem] leading-relaxed text-mut",
											children: card.desc
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 185,
											columnNumber: 21
										}, this)
									]
								}, card.title, true, {
									fileName: _jsxFileName,
									lineNumber: 164,
									columnNumber: 19
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 160,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 150,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						className: "rounded-[18px] border border-white/10 bg-black/50 p-8 text-center sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-org/20 text-org",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Zap, { className: "h-5 w-5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 195,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 194,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
								className: "font-bangers text-[1.8rem] text-wh",
								children: "Fique ligado nos Stories e no canal!"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 197,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mx-auto mt-2 max-w-lg text-[0.9rem] text-mut",
								children: [
									"As primeiras vagas para o torneio de lançamento serão abertas exclusivamente para quem acompanha o direct do ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
										className: "text-y",
										children: "@nerdemcenaoficial"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 202,
										columnNumber: 37
									}, this),
									"."
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 200,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: SOCIAL_LINKS.instagram,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 font-bebas text-[0.9rem] uppercase tracking-[0.18em] text-y hover:underline",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Crown, { className: "h-5 w-5 -mt-0.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 211,
										columnNumber: 17
									}, this), " Seguir no Instagram para não perder"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 205,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 204,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 193,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 105,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
				className: "mt-12 border-t border-y/20 bg-black/60 py-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2 font-bebas text-[0.85rem] uppercase tracking-[0.2em] text-mut transition-colors hover:text-y",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 223,
						columnNumber: 13
					}, this), " Voltar"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 219,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-4 font-nunito text-xs text-mut",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Nerd em Cena · CNPJ 60.907.624/0001-19"
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 225,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 218,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 104,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 57,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter = () => import("./ebooks.teatro-rpg-rTgkVKML.mjs");
var Route = createFileRoute("/ebooks/teatro-rpg")({
	head: () => ({
		meta: [
			{ title: "Como Ensinar Teatro com RPG — E-book | Nerd em Cena" },
			{
				name: "description",
				content: "O e-book que transforma suas aulas de teatro em aventuras de RPG: método, aventuras prontas e atividades. Leve o pacote com 4 e-books e economize."
			},
			{
				property: "og:title",
				content: "Como Ensinar Teatro com RPG — E-book | Nerd em Cena"
			},
			{
				property: "og:description",
				content: "Método, aventuras prontas e +20 atividades de Teatro-RPG. Pacote com 4 e-books com desconto."
			},
			{
				property: "og:type",
				content: "product"
			},
			{
				property: "og:url",
				content: "/ebooks/teatro-rpg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/ebooks/teatro-rpg"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Product",
				name: "Como Ensinar Teatro com RPG",
				description: "E-book com o método para unir teatro e RPG em sala de aula.",
				brand: {
					"@type": "Brand",
					name: "Nerd em Cena"
				},
				offers: {
					"@type": "Offer",
					price: "24.90",
					priceCurrency: "BRL",
					url: CHECKOUT_UNICO,
					availability: "https://schema.org/InStock"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	KitInicianteRoute: Route$3.update({
		id: "/kit-iniciante",
		path: "/kit-iniciante",
		getParentRoute: () => Route$5
	}),
	MidiakitRoute: Route$2.update({
		id: "/midiakit",
		path: "/midiakit",
		getParentRoute: () => Route$5
	}),
	TorneiosRoute: Route$1.update({
		id: "/torneios",
		path: "/torneios",
		getParentRoute: () => Route$5
	}),
	EbooksTeatroRpgRoute: Route.update({
		id: "/ebooks/teatro-rpg",
		path: "/ebooks/teatro-rpg",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
