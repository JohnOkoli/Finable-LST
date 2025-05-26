"use strict";
// import Account from '../models/accountModel';
// import { IAccount } from '../types/accountType';
// import { encrypt } from '../Utils/crypto';
// import { generateAccountNumber } from '../Utils/generator';
// import { generateCard } from './cardService';
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = void 0;
// interface CreateAccountInput {
//   firstName: string;
//   surname: string;
//   email: string;
//   phoneNumber: string;
//   dateOfBirth: string;
//   address: string;
// }
// export const createAccount = async (input: CreateAccountInput): Promise<IAccount> => {
//   const accountNumber = generateAccountNumber();
//   const card = generateCard();
//   const encryptedPhone = encrypt(input.phoneNumber);
//   const encryptedDOB = encrypt(input.dateOfBirth);
//   const encryptedCardNumber = encrypt(card.cardNumber);
//   const encryptedCVV = encrypt(card.cvv);
//   const encryptedExpiryDate = encrypt(card.expiryDate);
//   const account = new Account({
//     firstName: input.firstName,
//     surname: input.surname,
//     email: input.email,
//     phoneNumber: encryptedPhone,
//     dateOfBirth: encryptedDOB,
//     address: input.address,
//     accountNumber,
//     cardNumber: encryptedCardNumber,
//     cvv: encryptedCVV,
//     expiryDate: encryptedExpiryDate,
//   });
//   await account.save();
//   return account;
// };
// export const getAllAccounts = async (): Promise<IAccount[]> => {
//   return await Account.find();
// };
const accountModel_1 = require("../models/accountModel");
const generator_1 = require("../Utils/generator");
const createAccount = async (accountData) => {
    // ✅ Check if email or phone number already exists
    const existingAccount = await accountModel_1.AccountModel.findOne({
        $or: [
            { email: accountData.email },
            { phoneNumber: accountData.phoneNumber },
        ],
    });
    if (existingAccount) {
        const reason = existingAccount.email === accountData.email
            ? 'Account with this Email already exists'
            : 'Account with this Phone number already exists';
        throw new Error(reason);
    }
    // ✅ Generate unique account number
    let accountNumber = '';
    let isUnique = false;
    while (!isUnique) {
        accountNumber = (0, generator_1.generateAccountNumber)();
        const existing = await accountModel_1.AccountModel.findOne({ accountNumber });
        if (!existing)
            isUnique = true;
    }
    // ✅ Create and save the new account
    const account = new accountModel_1.AccountModel({
        ...accountData,
        accountNumber,
    });
    const savedAccount = await account.save();
    return {
        firstName: savedAccount.firstName,
        surname: savedAccount.surname,
        email: savedAccount.email,
        phoneNumber: savedAccount.phoneNumber,
        dateOfBirth: savedAccount.dateOfBirth,
        accountNumber: savedAccount.accountNumber,
    };
};
exports.createAccount = createAccount;
