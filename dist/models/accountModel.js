"use strict";
// import mongoose, { Document, Schema } from 'mongoose';
// import { IAccount } from '../types/accountType';  
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModel = void 0;
// const AccountSchema  = new Schema<IAccount>(
//   {
//     firstName: { type: String, required: true, trim: true },
//     surname: { type: String, required: true, trim: true },
//     email: { type: String, required: true, unique: true, trim: true },
//     phoneNumber: { type: String, required: true, unique: true, trim: true },
//     dateOfBirth: { type: String, required: true },
//     address: { type: String, required: true },
//     accountNumber: { type: String, required: true, unique: true },
//     cardNumber: { type: String, required: true, unique: true },
//     cvv: { type: String, required: true, unique: true },
//     expiryDate: { type: String, required: true },
//   },
//   { timestamps: true }
// );
// export default mongoose.model<IAccount>('Account', AccountSchema);
const mongoose_1 = __importStar(require("mongoose"));
const CardSchema = new mongoose_1.Schema({
    cardNumber: { type: String, required: true },
    cvv: { type: String, required: true },
    expiryDate: { type: String, required: true },
});
const AccountSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    dateOfBirth: { type: String, required: true },
    accountNumber: { type: String, required: true, unique: true },
    card: {
        type: CardSchema,
        required: false,
        default: null
    },
}, { timestamps: true });
exports.AccountModel = mongoose_1.default.model('Account', AccountSchema);
