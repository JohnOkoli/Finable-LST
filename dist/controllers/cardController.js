"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCardHandler = void 0;
const cardService_1 = require("../services/cardService");
const generateCardHandler = (_req, res) => {
    try {
        const card = (0, cardService_1.generateCard)();
        res.status(200).json({ card });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to generate card', error });
    }
};
exports.generateCardHandler = generateCardHandler;
