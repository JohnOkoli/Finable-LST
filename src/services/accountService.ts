// import Account from '../models/accountModel';
// import { IAccount } from '../types/accountType';
// import { encrypt } from '../Utils/crypto';
// import { generateAccountNumber } from '../Utils/generator';
// import { generateCard } from './cardService';

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



import { AccountModel } from '../models/accountModel';
import { IAccount } from '../types/accountType';
import { generateAccountNumber } from '../Utils/generator';

type CreatedAccountResponse = {
  firstName: string;
  surname: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  accountNumber: string;
};

export const createAccount = async (
  accountData: Omit<IAccount, 'accountNumber'>
): Promise<CreatedAccountResponse> => {
  // ✅ Check if email or phone number already exists
  const existingAccount = await AccountModel.findOne({
    $or: [
      { email: accountData.email },
      { phoneNumber: accountData.phoneNumber },
    ],
  });

  if (existingAccount) {
    const reason =
      existingAccount.email === accountData.email
        ? 'Account with this Email already exists'
        : 'Account with this Phone number already exists';
    throw new Error(reason);
  }

  // ✅ Generate unique account number
  let accountNumber: string = '';
  let isUnique = false;

  while (!isUnique) {
    accountNumber = generateAccountNumber();
    const existing = await AccountModel.findOne({ accountNumber });
    if (!existing) isUnique = true;
  }

  // ✅ Create and save the new account
  const account = new AccountModel({
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