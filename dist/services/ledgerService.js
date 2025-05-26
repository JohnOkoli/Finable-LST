"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptInputData = exports.listAccounts = void 0;
const accountModel_1 = __importDefault(require("../models/accountModel"));
const encryptionService_1 = require("./encryptionService");
const listAccounts = async () => {
    const accounts = await accountModel_1.default.find();
    return accounts.map((account) => {
        const decrypted = (0, encryptionService_1.decryptSensitiveData)({
            cardNumber: account.cardNumber,
            cvv: account.cvv,
            expiryDate: account.expiryDate,
            phoneNumber: account.phoneNumber,
            dateOfBirth: account.dateOfBirth,
        });
        return {
            fullName: `${account.firstName} ${account.surname}`,
            accountNumber: account.accountNumber,
            encrypted: {
                cardNumber: account.cardNumber,
                cvv: account.cvv,
                expiryDate: account.expiryDate,
                phoneNumber: account.phoneNumber,
                dateOfBirth: account.dateOfBirth,
            },
            decrypted,
        };
    });
};
exports.listAccounts = listAccounts;
const decryptInputData = (data) => {
    return (0, encryptionService_1.decryptSensitiveData)(data);
};
exports.decryptInputData = decryptInputData;
