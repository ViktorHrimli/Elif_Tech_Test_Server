"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error404 = exports.error500 = void 0;
const error500 = (err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
};
exports.error500 = error500;
const error404 = (_, res, __) => {
    return res.status(404).json({
        status: "error",
        code: 404,
        message: "Use api on routes: /api/contacts or /api/users",
        data: "Not found",
    });
};
exports.error404 = error404;
//# sourceMappingURL=apiErrors.js.map