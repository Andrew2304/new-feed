"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const login = (token, user)=>{
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
};
const logout = ()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    next_router__WEBPACK_IMPORTED_MODULE_0___default().push("/");
};
const getUser = ()=>{
    try {
        const value = window.localStorage.getItem("user");
        if (value) {
            return JSON.parse(value);
        } else {
            null;
        }
    } catch (err) {
        return null;
    }
};
const getToken = ()=>{
    try {
        return window.localStorage.getItem("token");
    } catch (err) {
        return null;
    }
};
const useAuth = {
    login,
    logout,
    getUser,
    getToken
};


/***/ }),

/***/ 360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(725);
// EXTERNAL MODULE: ./hooks/useAuth.ts
var useAuth = __webpack_require__(501);
;// CONCATENATED MODULE: ./helpers/constants.ts
const OtpTime = 30;
const PasswordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`!@#$%^&*()~])[A-Za-z\d`!@#$%^&*()~]{8,}$/;
const EmailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const BlockchainValidation = /^0x[a-fA-F0-9]{40}$/g;
const PrivateRouter = [
    "/nft/create",
    "/wallet",
    "/collection/create"
];
const FileType = (/* unused pure expression or super */ null && ([
    "jpg",
    "png",
    "jpeg",
    "jjpeg"
]));
const FileSize = (/* unused pure expression or super */ null && (1024 * 1024 * 100));
const GetFileType = (filename)=>{
    const type = filename.substring(filename.lastIndexOf(".") + 1, filename.length) || filename;
    return type.toLocaleLowerCase();
};
const DateFormatNft = "dd/mm/yyyy hh:MM";
const DateFormatCollection = "dd/mm/yyyy";
const DefaultPageSize = 15;
const StatusNft = {
    MintSuccess: "Mint th\xe0nh c\xf4ng",
    MintFailed: "Mint Thất bại",
    Bidding: "Đang đấu gi\xe1",
    Selling: "Đang b\xe1n",
    Sold: "Đ\xe3 b\xe1n",
    Tranfered: "Đ\xe3 chuyển",
    Cancelled: "Cancelled"
};
const StatusAccount = {
    verifed: "Đ\xe3 x\xe1c minh",
    unverified: "Chưa x\xe1c minh"
};
const FilterAmount = {
    increase: "Từ thấp đến cao",
    decrease: "Từ cao đến thấp"
};
const TstTypeOfWallet = {
    MintNft: "Mint NFT",
    BuyNft: "Mua NFT",
    SellNft: "B\xe1n NFT",
    MintCompensate: "Ho\xe0n tiền",
    Deposit: "Nạp tiền",
    Withdrawal: "R\xfat tiền",
    BidNft: "Đặt gi\xe1",
    ReleaseBid: "Ho\xe0n tiền đặt gi\xe1"
};
const ActivityTypeOfWallet = {
    Transfer: "Chuyển",
    Cancel: "R\xfat",
    Sell: "B\xe1n",
    Buy: "Mua"
};
const WalletStatus = {
    Processing: "Đang xử l\xfd",
    Success: "Th\xe0nh c\xf4ng",
    Failed: "Huỷ"
};

;// CONCATENATED MODULE: external "moment/locale/vi"
const vi_namespaceObject = require("moment/locale/vi");
;// CONCATENATED MODULE: external "antd/lib/locale/vi_VN"
const vi_VN_namespaceObject = require("antd/lib/locale/vi_VN");
var vi_VN_default = /*#__PURE__*/__webpack_require__.n(vi_VN_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx










function MyApp({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        const authCheck = ()=>{
            if (!useAuth/* useAuth.getUser */.a.getUser() && PrivateRouter.includes(router.asPath)) {
                router.push("/login");
            }
        };
        authCheck();
        const handleStart = (url)=>{
            url !== router.asPath ? setLoading(true) : setLoading(false);
        };
        const handleComplete = (url)=>setLoading(false);
        const scrollTop = ()=>{
            document.body.scrollTop = 0 // For Safari
            ;
            document.documentElement.scrollTop = 0;
        };
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
        router.events.on("routeChangeComplete", scrollTop);
        setLoading(false);
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.ConfigProvider, {
        locale: (vi_VN_default()),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            loading && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "wrap-loading",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Spin, {
                    size: "large"
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(360));
module.exports = __webpack_exports__;

})();