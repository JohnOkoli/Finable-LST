"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccountHandler = void 0;
const accountService_1 = require("../services/accountService");
const mongoose_1 = __importDefault(require("mongoose"));
const createAccountHandler = async (req, res, next) => {
    try {
        // Extra safety: Handle empty body
        if (!req.body || Object.keys(req.body).length === 0) {
            res.status(400).json({
                status: "error",
                message: "Request body cannot be empty.",
            });
            return;
        }
        const newAccount = await (0, accountService_1.createAccount)(req.body);
        res.status(201).json({
            status: "success",
            message: "Your account has been created successfully",
            data: newAccount,
        });
    }
    catch (err) {
        //Handle Mongoose validation errors
        if (err instanceof mongoose_1.default.Error.ValidationError) {
            const errors = Object.values(err.errors).map((e) => e.message);
            res.status(400).json({
                status: "error",
                message: errors,
            });
            return;
        }
        //  Handle duplicate email/phone errors from service
        if (err.message?.includes("already exists")) {
            res.status(400).json({
                status: "error",
                message: err.message,
            });
            return;
        }
        //  Fallback: Internal server error
        next(new Error("Failed to create account: " + err?.message));
    }
};
exports.createAccountHandler = createAccountHandler;
