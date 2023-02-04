"use strict";
exports.id = 668;
exports.ids = [668];
exports.modules = {

/***/ 9720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Section({ title , children  }) {
    let id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        "aria-labelledby": id,
        className: "md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    id: id,
                    className: "text-sm font-semibold text-zinc-800 dark:text-zinc-100",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:col-span-3",
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 4534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ Skills)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const features = [
    {
        name: "Ruby / Sinatra",
        description: "",
        icon: "devicon-ruby-plain colored"
    },
    {
        name: "HTML",
        description: "",
        icon: "devicon-html5-plain colored"
    },
    {
        name: "Javascript",
        description: "",
        icon: "devicon-javascript-plain colored"
    },
    {
        name: "React",
        description: "",
        icon: "devicon-react-original colored"
    },
    {
        name: "Next.js",
        description: "",
        icon: "devicon-nextjs-original colored"
    },
    {
        name: "Go",
        description: "",
        icon: "devicon-go-plain colored"
    },
    {
        name: "Perl",
        description: "",
        icon: "devicon-perl-plain colored"
    },
    {
        name: "nginx",
        description: "",
        icon: "devicon-nginx-original colored"
    },
    {
        name: "Digital Ocean",
        description: "",
        icon: "devicon-digitalocean-plain colored"
    },
    {
        name: "Postgresql",
        description: "",
        icon: "devicon-postgresql-plain colored"
    },
    {
        name: "MongoDB",
        description: "",
        icon: "devicon-mongodb-plain colored"
    }
];
function Skills() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-transparent py-24 sm:py-32",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
            className: "grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3 lg:gap-y-16",
            children: features.map((feature)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative pl-16",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dt", {
                            className: "text-base font-semibold leading-7 text-gray-900 dark:text-zinc-200",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-600",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        class: feature.icon
                                    })
                                }),
                                feature.name
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                            className: "mt-2 text-base leading-7 text-gray-600",
                            children: feature.description
                        })
                    ]
                }, feature.name))
        })
    });
}


/***/ })

};
;