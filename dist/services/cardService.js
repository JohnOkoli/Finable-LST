"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCard = void 0;
const generator_1 = require("../Utils/generator");
const generateCard = () => {
    return {
        cardNumber: (0, generator_1.generateCardNumber)(),
        cvv: (0, generator_1.generateCVV)(),
        expiryDate: (0, generator_1.generateExpiryDate)(), // 3 years in the future
    };
};
exports.generateCard = generateCard;
