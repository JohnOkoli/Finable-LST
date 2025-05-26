"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const accountRoute_1 = __importDefault(require("./routes/accountRoute"));
const ledgerRoute_1 = __importDefault(require("./routes/ledgerRoute"));
const cardRoute_1 = __importDefault(require("./routes/cardRoute"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/api/accounts', accountRoute_1.default);
app.use('/api/ledger', ledgerRoute_1.default);
app.use('/api/card', cardRoute_1.default);
app.use(errorHandler_1.errorHandler);
// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
exports.default = app;
