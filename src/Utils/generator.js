"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExpiryDate = exports.generateCVV = exports.generateCardNumber = exports.generateAccountNumber = void 0;
const generateAccountNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
};
exports.generateAccountNumber = generateAccountNumber;
const generateCardNumber = () => {
    let cardNumber = '';
    for (let i = 0; i < 4; i++) {
        cardNumber += Math.floor(1000 + Math.random() * 9000).toString();
    }
    return cardNumber;
};
exports.generateCardNumber = generateCardNumber;
const generateCVV = () => {
    return Math.floor(100 + Math.random() * 900).toString();
};
exports.generateCVV = generateCVV;
const generateExpiryDate = () => {
    const currentDate = new Date();
    const futureYear = currentDate.getFullYear() + 3;
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(futureYear).slice(-2);
    return `${month}/${year}`;
};
exports.generateExpiryDate = generateExpiryDate;
