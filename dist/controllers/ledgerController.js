"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptDataHandler = exports.listAccountsHandler = void 0;
const ledgerService_1 = require("../services/ledgerService");
const listAccountsHandler = async (_req, res) => {
    try {
        const accounts = await (0, ledgerService_1.listAccounts)();
        res.status(200).json({ accounts });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to list accounts', error });
    }
};
exports.listAccountsHandler = listAccountsHandler;
const decryptDataHandler = async (req, res) => {
    try {
        const decrypted = (0, ledgerService_1.decryptInputData)(req.body);
        res.status(200).json({ decrypted });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to decrypt data', error });
    }
};
exports.decryptDataHandler = decryptDataHandler;
