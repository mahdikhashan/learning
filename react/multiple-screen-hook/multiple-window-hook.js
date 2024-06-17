"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnsupportedBrowserError extends Error {
}
function MultipleWindowHook() {
    async function checkBrowserSupport() {
        if ("getScreenDetails" in window) {
            return await window.getScreenDetails();
        }
        return new UnsupportedBrowserError("api not supported by your browser.");
    }
    checkBrowserSupport()
        .then(screenDetails => console.log(screenDetails), onerror => console.log(onerror));
}
exports.default = MultipleWindowHook;
//# sourceMappingURL=multiple-window-hook.js.map