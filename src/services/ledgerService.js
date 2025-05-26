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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptInputData = exports.listAccounts = void 0;
const accountModel_1 = __importDefault(require("../models/accountModel"));
const encryptionService_1 = require("./encryptionService");
const listAccounts = () => __awaiter(void 0, void 0, void 0, function* () {
    const accounts = yield accountModel_1.default.find();
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
});
exports.listAccounts = listAccounts;
const decryptInputData = (data) => {
    return (0, encryptionService_1.decryptSensitiveData)(data);
};
exports.decryptInputData = decryptInputData;
