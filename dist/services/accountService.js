"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAccounts = exports.createAccount = void 0;
const accountModel_1 = __importDefault(require("../models/accountModel"));
const crypto_1 = require("../Utils/crypto");
const generator_1 = require("../Utils/generator");
const cardService_1 = require("./cardService");
const createAccount = async (input) => {
    const accountNumber = (0, generator_1.generateAccountNumber)();
    const card = (0, cardService_1.generateCard)();
    const encryptedPhone = (0, crypto_1.encrypt)(input.phoneNumber);
    const encryptedDOB = (0, crypto_1.encrypt)(input.dateOfBirth);
    const encryptedCardNumber = (0, crypto_1.encrypt)(card.cardNumber);
    const encryptedCVV = (0, crypto_1.encrypt)(card.cvv);
    const encryptedExpiryDate = (0, crypto_1.encrypt)(card.expiryDate);
    const account = new accountModel_1.default({
        firstName: input.firstName,
        surname: input.surname,
        email: input.email,
        phoneNumber: encryptedPhone,
        dateOfBirth: encryptedDOB,
        address: input.address,
        accountNumber,
        cardNumber: encryptedCardNumber,
        cvv: encryptedCVV,
        expiryDate: encryptedExpiryDate,
    });
    await account.save();
    return account;
};
exports.createAccount = createAccount;
const getAllAccounts = async () => {
    return accountModel_1.default.find();
};
exports.getAllAccounts = getAllAccounts;
