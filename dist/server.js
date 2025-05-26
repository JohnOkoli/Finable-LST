"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./configs/db");
const config_1 = __importDefault(require("./configs/config"));
const app_1 = __importDefault(require("./app"));
const startServer = async () => {
    await (0, db_1.connectDB)();
    app_1.default.listen(config_1.default.PORT, () => {
        console.log(`Server running on port ${config_1.default.PORT}`);
    });
};
startServer();
