"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(config_1.default.MONGODB_URI);
        console.log('MongoDB of the Last code bender connected successfully');
    }
    catch (error) {
        console.error(' MongoDB connection failed:', error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
