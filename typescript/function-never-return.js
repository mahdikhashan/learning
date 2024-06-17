function fail(message) {
    throw new Error("Invariant failure: ".concat(message));
}
function workWithUnsafeParam(param) {
    if (typeof param !== "string") {
        fail("param should be a string, not ".concat(typeof param));
    }
    param.toUpperCase();
}
