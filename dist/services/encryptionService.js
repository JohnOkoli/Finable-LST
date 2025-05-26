"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptSensitiveData = exports.encryptSensitiveData = void 0;
const crypto_1 = require("../Utils/crypto");
const encryptSensitiveData = (data) => {
    return {
        cardNumber: (0, crypto_1.encrypt)(data.cardNumber),
        cvv: (0, crypto_1.encrypt)(data.cvv),
        expiryDate: (0, crypto_1.encrypt)(data.expiryDate),
        phoneNumber: (0, crypto_1.encrypt)(data.phoneNumber),
        dateOfBirth: (0, crypto_1.encrypt)(data.dateOfBirth),
    };
};
exports.encryptSensitiveData = encryptSensitiveData;
const decryptSensitiveData = (data) => {
    return {
        cardNumber: (0, crypto_1.decrypt)(data.cardNumber),
        cvv: (0, crypto_1.decrypt)(data.cvv),
        expiryDate: (0, crypto_1.decrypt)(data.expiryDate),
        phoneNumber: (0, crypto_1.decrypt)(data.phoneNumber),
        dateOfBirth: (0, crypto_1.decrypt)(data.dateOfBirth),
    };
};
exports.decryptSensitiveData = decryptSensitiveData;
