import { i as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as ArrowRight, E as CircleCheckBig, S as Download, b as Gamepad2, f as Phone, g as Mail, h as Map, i as User, j as ArrowLeft, l as Shield, p as MessageSquare, u as Scroll, v as LoaderCircle, x as FileText } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kit-iniciante-Czc7XgyT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var kit_iniciante_pdf_asset_default = {
	version: 1,
	asset_id: "a297955e-22d0-4539-956e-915b8480255d",
	project_id: "14dd786f-ae3b-441a-ab20-7bfe5c8bb194",
	url: "/__l5e/assets-v1/a297955e-22d0-4539-956e-915b8480255d/kit-iniciante.pdf",
	r2_key: "a/v1/14dd786f-ae3b-441a-ab20-7bfe5c8bb194/a297955e-22d0-4539-956e-915b8480255d/kit-iniciante.pdf",
	original_filename: "kit-iniciante.pdf",
	size: 3805033,
	content_type: "application/pdf",
	created_at: "2026-08-23T02:10:02Z"
};
var livro_teatro_rpg_capa_png_asset_default = {
	version: 1,
	asset_id: "bbba2dd4-f44c-4940-b1a3-5f087acb6815",
	project_id: "14dd786f-ae3b-441a-ab20-7bfe5c8bb194",
	url: "/__l5e/assets-v1/bbba2dd4-f44c-4940-b1a3-5f087acb6815/livro-teatro-rpg-capa.png",
	r2_key: "a/v1/14dd786f-ae3b-441a-ab20-7bfe5c8bb194/bbba2dd4-f44c-4940-b1a3-5f087acb6815/livro-teatro-rpg-capa.png",
	original_filename: "livro-teatro-rpg-capa.png",
	size: 2830385,
	content_type: "image/png",
	created_at: "2026-08-23T02:10:05Z"
};
var _jsxFileName = "/app/applet/src/routes/kit-iniciante.tsx?tsr-split=component";
var EMAILJS_SERVICE_ID = "service_rh1ougl";
var EMAILJS_TEMPLATE_ID = "template_2165vw5";
var EMAILJS_PUBLIC_KEY = "LAwMgLmFx_CiZBsFB";
var SHEET_DB_URL = "https://api.sheetmonkey.io/form/b9t6pnuKaJSRRR3X2FbcB1";
function D20Icon({ size = 60, stroke = "#D64585", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 100 100",
		fill: "none",
		stroke,
		strokeWidth: "6",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M50 5 L50 50" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M90 25 L50 50" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M90 75 L50 50" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M50 95 L50 50" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M10 75 L50 50" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M10 25 L50 50" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				d: "M10 25 L90 25 L50 95 Z",
				opacity: "0.5"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 10
	}, this);
}
function KitIniciantePage() {
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: ""
	});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [isSending, setIsSending] = (0, import_react.useState)(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSending(true);
		try {
			const emailPromise = (await import("../_libs/emailjs__browser.mjs").then((n) => n.t)).send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
				to_name: formData.name,
				to_email: formData.email,
				email: formData.email,
				phone: formData.phone,
				reply_to: formData.email
			}, EMAILJS_PUBLIC_KEY);
			let sheetPromise = Promise.resolve();
			if (SHEET_DB_URL.startsWith("http")) sheetPromise = fetch(SHEET_DB_URL, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					...formData,
					created_at: (/* @__PURE__ */ new Date()).toLocaleString("pt-BR")
				})
			});
			await Promise.all([emailPromise, sheetPromise]);
			console.log("Form Submitted Successfully:", formData);
			setSubmitted(true);
		} catch (error) {
			console.error("Failed to send data:", error);
			alert("Houve um pequeno problema ao convocar os corvos. Verifique sua conexão e tente novamente.");
		} finally {
			setIsSending(false);
		}
	};
	const handleReset = () => {
		setSubmitted(false);
		setFormData({
			name: "",
			email: "",
			phone: ""
		});
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "font-body-kit min-h-screen bg-[#FB8CBF] bg-grid-pattern relative overflow-hidden flex items-center justify-center p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "sr-only",
				children: "Kit Iniciante de Teatro-RPG — Download gratuito"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 105,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute top-10 left-10 opacity-30 animate-float pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(D20Icon, {
					size: 80,
					stroke: "#9D174D"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 109,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute top-20 right-20 opacity-30 animate-float-delayed pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Shield, {
					size: 70,
					color: "#9D174D",
					strokeWidth: 1.5
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 113,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute bottom-20 left-20 opacity-30 animate-float-delayed pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scroll, {
					size: 60,
					color: "#9D174D",
					strokeWidth: 1.5
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 117,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 116,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute bottom-10 right-10 opacity-30 animate-float pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(D20Icon, {
					size: 100,
					stroke: "#9D174D",
					className: "rotate-12"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 121,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "bg-[#FFFAF0] w-full max-w-2xl border-[4px] border-[#2D1B2E] shadow-[8px_8px_0px_0px_rgba(45,27,46,1)] p-6 sm:p-8 relative z-10 my-4 rounded-sm transition-all duration-500",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-2 left-2 w-2 h-2 rounded-full bg-[#2D1B2E] opacity-50" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-2 right-2 w-2 h-2 rounded-full bg-[#2D1B2E] opacity-50" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#2D1B2E] opacity-50" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 129,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#2D1B2E] opacity-50" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 130,
						columnNumber: 9
					}, this),
					!submitted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col items-center mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col items-center text-center w-full mb-6 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-2xl md:text-3xl font-rpg text-[#2D1B2E] tracking-tight whitespace-normal sm:whitespace-nowrap drop-shadow-sm font-bold leading-tight",
									children: "Pronto para começar sua aventura?"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 136,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xl md:text-2xl font-rpg text-[#D64585] whitespace-normal sm:whitespace-nowrap font-bold leading-tight",
									children: "Baixe o Kit Iniciante de Teatro-RPG"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "w-full bg-[#FDF2D0] border-[3px] border-[#2D1B2E] p-5 shadow-[4px_4px_0px_0px_rgba(45,27,46,0.3)] transform rotate-1 hover:rotate-0 transition-transform duration-300 mt-2 relative",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2D1B2E] text-[#FDF2D0] px-4 py-1 text-xs font-bold uppercase tracking-widest font-rpg rounded-sm",
									children: "Inventário do Kit"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 146,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
									className: "space-y-4 mt-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "bg-[#FF9DE2] border-2 border-[#2D1B2E] p-1 shadow-[2px_2px_0px_0px_rgba(45,27,46,1)] shrink-0 mt-1",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, {
													size: 18,
													className: "text-[#2D1B2E]"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 153,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 152,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-sm leading-snug text-[#2D1B2E]",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-bold block text-base mb-0.5 font-rpg",
													children: "Ficha de Personagem Exclusiva:"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 156,
													columnNumber: 23
												}, this), "Um modelo simples para organizar ideias, habilidades e até os medos dos personagens."]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 155,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 151,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "bg-[#6BC5FF] border-2 border-[#2D1B2E] p-1 shadow-[2px_2px_0px_0px_rgba(45,27,46,1)] shrink-0 mt-1",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Gamepad2, {
													size: 18,
													className: "text-[#2D1B2E]"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 165,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 164,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-sm leading-snug text-[#2D1B2E]",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-bold block text-base mb-0.5 font-rpg",
													children: "Guia de 2 Jogos Práticos:"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 168,
													columnNumber: 23
												}, this), "Instruções para as dinâmicas que treinam foco, prontidão e aquecem para o jogo."]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 167,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 163,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "bg-[#FFB86B] border-2 border-[#2D1B2E] p-1 shadow-[2px_2px_0px_0px_rgba(45,27,46,1)] shrink-0 mt-1",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Map, {
													size: 18,
													className: "text-[#2D1B2E]"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 177,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 176,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-sm leading-snug text-[#2D1B2E]",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-bold block text-base mb-0.5 font-rpg",
													children: "Uma Aventura Base:"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 180,
													columnNumber: 23
												}, this), "Um pequeno mundo para criar sua aventura a partir dele."]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 179,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 175,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 150,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 145,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "border-t-2 border-[#2D1B2E] mb-8 border-dashed opacity-50" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 190,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
							onSubmit: handleSubmit,
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									htmlFor: "name",
									className: "block text-[#2D1B2E] font-bold mb-1 ml-1 text-sm uppercase tracking-wider font-rpg",
									children: ["Nome do Jogador ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[#D64585]",
										children: "*"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 196,
										columnNumber: 35
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 195,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "text",
										id: "name",
										name: "name",
										required: true,
										value: formData.name,
										onChange: handleChange,
										disabled: isSending,
										className: "w-full bg-white border-[2px] border-[#2D1B2E] p-3 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(214,69,133,1)] transition-all placeholder:text-gray-400 font-medium disabled:opacity-70 disabled:cursor-not-allowed",
										placeholder: "Seu nome completo"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 199,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, {
										className: "absolute right-3 top-3.5 text-gray-400 pointer-events-none",
										size: 20
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 200,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 198,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 194,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									htmlFor: "email",
									className: "block text-[#2D1B2E] font-bold mb-1 ml-1 text-sm uppercase tracking-wider font-rpg",
									children: ["Pergaminho de Contato (E-mail) ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[#D64585]",
										children: "*"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 206,
										columnNumber: 50
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 205,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "email",
										id: "email",
										name: "email",
										required: true,
										value: formData.email,
										onChange: handleChange,
										disabled: isSending,
										className: "w-full bg-white border-[2px] border-[#2D1B2E] p-3 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(214,69,133,1)] transition-all placeholder:text-gray-400 font-medium disabled:opacity-70 disabled:cursor-not-allowed",
										placeholder: "exemplo@email.com"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 209,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, {
										className: "absolute right-3 top-3.5 text-gray-400 pointer-events-none",
										size: 20
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 210,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 208,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 204,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									htmlFor: "phone",
									className: "block text-[#2D1B2E] font-bold mb-1 ml-1 text-sm uppercase tracking-wider font-rpg",
									children: "Telefone (Opcional)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 215,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "tel",
										id: "phone",
										name: "phone",
										value: formData.phone,
										onChange: handleChange,
										disabled: isSending,
										className: "w-full bg-white border-[2px] border-[#2D1B2E] p-3 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(214,69,133,1)] transition-all placeholder:text-gray-400 font-medium disabled:opacity-70 disabled:cursor-not-allowed",
										placeholder: "(00) 00000-0000"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 219,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, {
										className: "absolute right-3 top-3.5 text-gray-400 pointer-events-none",
										size: 20
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 220,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 218,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 214,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "submit",
									disabled: isSending,
									className: `w-full bg-[#2D1B2E] text-white font-black text-xl py-5 border-[2px] border-[#2D1B2E] shadow-[6px_6px_0px_0px_#FF9DE2] hover:shadow-[3px_3px_0px_0px_#FF9DE2] hover:translate-y-1 hover:translate-x-1 transition-all flex items-center justify-center gap-2 font-rpg tracking-widest uppercase disabled:opacity-80 disabled:cursor-wait ${isSending ? "translate-y-1 translate-x-1 shadow-none" : ""}`,
									children: isSending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "hidden sm:inline",
											children: "Enviando Corvos..."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 226,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "sm:hidden",
											children: "Enviando..."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 227,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "animate-spin sm:size-6 size-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 228,
											columnNumber: 21
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 225,
										columnNumber: 30
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "hidden sm:inline",
											children: "Iniciar Aventura (Baixar)"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 230,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "sm:hidden",
											children: "Baixar Kit"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 231,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, {
											className: "sm:size-6 size-4",
											strokeWidth: 3
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 232,
											columnNumber: 21
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 229,
										columnNumber: 25
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 224,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 193,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 pt-6 border-t-2 border-[#2D1B2E] border-dashed opacity-50 flex flex-col gap-2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "https://ig.me/m/nerdemcenaoficial",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex-1 bg-transparent border border-[#2D1B2E] py-2 px-1 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm font-rpg text-[#2D1B2E] no-underline opacity-60 hover:opacity-100 hover:bg-[#2D1B2E] hover:text-white transition-all rounded-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Direct (Instagram)" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 241,
											columnNumber: 19
										}, this),
										" ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageSquare, { size: 16 }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 241,
											columnNumber: 51
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 240,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "mailto:contato.nerdemcena@gmail.com",
									className: "flex-1 bg-transparent border border-[#2D1B2E] py-2 px-1 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm font-rpg text-[#2D1B2E] no-underline opacity-60 hover:opacity-100 hover:bg-[#2D1B2E] hover:text-white transition-all rounded-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "E-mail" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 244,
											columnNumber: 19
										}, this),
										" ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { size: 16 }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 244,
											columnNumber: 39
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 243,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 239,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 238,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 23
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col items-center text-center animate-pulse-slow py-8 px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mb-6 relative",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 blur-xl opacity-50 rounded-full bg-green-200" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 251,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheckBig, {
									size: 80,
									className: "text-green-600 relative z-10",
									strokeWidth: 1.5
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 252,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 250,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-3xl md:text-4xl font-rpg text-[#2D1B2E] font-bold mb-8 leading-tight",
								children: "Sua aventura já vai começar!"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 255,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "bg-[#FDF2D0] border-2 border-[#2D1B2E] p-6 mb-8 shadow-[4px_4px_0px_0px_rgba(45,27,46,0.2)] w-full relative",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2D1B2E] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest font-rpg rounded-sm",
									children: "Missão Aceita"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 260,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[#2D1B2E] text-lg leading-relaxed",
									children: [
										"Seu",
										" ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-bold font-rpg text-[#D64585]",
											children: "Kit do Aventureiro Iniciante"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 265,
											columnNumber: 17
										}, this),
										" ",
										"já está a caminho do seu e-mail.",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 269,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 270,
											columnNumber: 17
										}, this),
										"Em alguns minutos você receberá o material com a ficha, os jogos e a aventura base para começar.",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 273,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-sm text-gray-600 mt-2 block font-bold",
											children: "(Confere o Spam também! 😉)"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 274,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 263,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 259,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "bg-white border-[3px] border-[#D64585] p-6 mb-8 shadow-[6px_6px_0px_0px_#D64585] relative w-full transform hover:scale-[1.02] transition-transform duration-300 mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D64585] text-white px-4 py-1 text-sm font-bold uppercase tracking-widest font-rpg rounded-sm whitespace-nowrap shadow-sm",
									children: "Oferta Especial"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 281,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex flex-col md:flex-row items-center gap-6 mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/ebooks/teatro-rpg",
										className: "shrink-0 group cursor-pointer",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "w-32 h-44 bg-[#2D1B2E] flex flex-col items-center justify-center text-[#FDF2D0] shadow-md border-2 border-[#2D1B2E] relative overflow-hidden rounded-sm",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
												src: livro_teatro_rpg_capa_png_asset_default.url,
												alt: "Capa do Livro Como Ensinar Teatro com RPG",
												className: "w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 289,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 288,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 287,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "text-left flex-1 flex flex-col items-center md:items-start",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
												className: "text-xl font-bold text-[#2D1B2E] font-rpg mb-2 leading-tight text-center md:text-left",
												children: "Quer ir além do Kit Iniciante?"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 294,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[#2D1B2E] text-sm mb-5 leading-relaxed text-center md:text-left",
												children: [
													"Descubra o método completo no livro",
													" ",
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "font-bold text-[#D64585]",
														children: "\"Como Ensinar Teatro com RPG\""
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 299,
														columnNumber: 21
													}, this),
													" ",
													"e transforme o ensino em aventuras inesquecíveis."
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 297,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
												to: "/ebooks/teatro-rpg",
												className: "inline-flex items-center justify-center gap-2 bg-[#D64585] text-white font-bold py-3 px-6 border-[2px] border-[#2D1B2E] shadow-[4px_4px_0px_0px_#2D1B2E] hover:shadow-[2px_2px_0px_0px_#2D1B2E] hover:translate-y-1 hover:translate-x-1 transition-all font-rpg tracking-wider text-sm uppercase w-full md:w-auto text-center no-underline rounded-sm group",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Ver o Livro Completo" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 304,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {
													size: 18,
													className: "group-hover:translate-x-1 transition-transform"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 305,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 303,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 293,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 285,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 280,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: kit_iniciante_pdf_asset_default.url,
								download: "KitIniciante.pdf",
								className: "bg-[#D64585] text-white font-bold py-3 px-12 border-[2px] border-[#2D1B2E] shadow-[4px_4px_0px_0px_#2D1B2E] hover:shadow-[2px_2px_0px_0px_#2D1B2E] hover:translate-y-1 hover:translate-x-1 transition-all flex items-center justify-center gap-2 font-rpg tracking-wider text-sm uppercase mb-6 no-underline rounded-sm group w-full md:w-auto",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "hidden sm:inline",
										children: "BAIXAR KIT INICIANTE (PDF)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 312,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "sm:hidden",
										children: "BAIXAR KIT (PDF)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 313,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, {
										className: "sm:size-6 size-4",
										strokeWidth: 3
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 314,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 311,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: handleReset,
								className: "bg-[#2D1B2E] text-white font-bold py-3 px-6 border-[2px] border-[#2D1B2E] shadow-[4px_4px_0px_0px_#FF9DE2] hover:shadow-[2px_2px_0px_0px_#FF9DE2] hover:translate-y-1 hover:translate-x-1 transition-all flex items-center justify-center gap-2 font-rpg tracking-wider mx-auto text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { size: 18 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 318,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "hidden sm:inline",
										children: "Voltar (Nova Aventura)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 319,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "sm:hidden",
										children: "Voltar"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 320,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 317,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 249,
						columnNumber: 7
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 125,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 104,
		columnNumber: 10
	}, this);
}
//#endregion
export { KitIniciantePage as component };
