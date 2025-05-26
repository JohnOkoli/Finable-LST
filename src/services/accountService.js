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
exports.getAllAccounts = exports.createAccount = void 0;
const accountModel_1 = __importDefault(require("../models/accountModel"));
const crypto_1 = require("../Utils/crypto");
const generator_1 = require("../Utils/generator");
const cardService_1 = require("./cardService");
const createAccount = (input) => __awaiter(void 0, void 0, void 0, function* () {
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
    yield account.save();
    return account;
});
exports.createAccount = createAccount;
const getAllAccounts = () => __awaiter(void 0, void 0, void 0, function* () {
    return accountModel_1.default.find();
});
exports.getAllAccounts = getAllAccounts;
