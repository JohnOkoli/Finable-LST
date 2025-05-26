"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptDataHandler = exports.listAccountsHandler = void 0;
const ledgerService_1 = require("../services/ledgerService");
const listAccountsHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accounts = yield (0, ledgerService_1.listAccounts)();
        res.status(200).json({ accounts });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to list accounts', error });
    }
});
exports.listAccountsHandler = listAccountsHandler;
const decryptDataHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decrypted = (0, ledgerService_1.decryptInputData)(req.body);
        res.status(200).json({ decrypted });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to decrypt data', error });
    }
});
exports.decryptDataHandler = decryptDataHandler;
