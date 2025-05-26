"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const accountRoute_1 = __importDefault(require("./routes/accountRoute"));
const errorHandler_1 = require("./middlewares/errorHandler");
;
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use(errorHandler_1.errorHandler);
// Routes
app.use("/api/account", accountRoute_1.default);
// Base route
app.get("/", (_req, res) => {
    res.send("Finable API is running...");
});
exports.default = app;
