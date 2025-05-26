"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { MONGODB_URI, SECRET_KEY, ENCRYPTION_IV, PORT } = process.env;
if (!MONGODB_URI || !SECRET_KEY || !ENCRYPTION_IV) {
    throw new Error('Missing required environment variables');
}
exports.default = {
    MONGODB_URI,
    SECRET_KEY,
    ENCRYPTION_IV,
    PORT: PORT || 5000,
};
