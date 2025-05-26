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
exports.createAccountHandler = void 0;
const accountService_1 = require("../services/accountService");
const createAccountHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const account = yield (0, accountService_1.createAccount)(req.body);
        res.status(201).json({ message: 'Account created successfully', account });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create account', error });
    }
});
exports.createAccountHandler = createAccountHandler;
