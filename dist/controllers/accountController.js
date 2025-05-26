"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccountHandler = void 0;
const accountService_1 = require("../services/accountService");
const createAccountHandler = async (req, res) => {
    try {
        const account = await (0, accountService_1.createAccount)(req.body);
        res.status(201).json({ message: 'Account created successfully', account });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create account', error });
    }
};
exports.createAccountHandler = createAccountHandler;
