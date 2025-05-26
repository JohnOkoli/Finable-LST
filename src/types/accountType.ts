// import { Document } from 'mongoose';

// export interface IAccount extends Document {
//   firstName: string;
//   surname: string;
//   email: string;
//   phoneNumber: string;
//   dateOfBirth: string;
//   address: string;
//   accountNumber: string;
//   cardNumber: string;
//   cvv: string;
//   expiryDate: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

export interface ICard {
  cardNumber: string;
  cvv: string;
  expiryDate: string;
}

export interface IAccount {
  firstName: string;
  surname: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  accountNumber: string;
  card?: ICard;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EncryptedCard {
  cardNumber: string;
  cvv: string;
  expiryDate: string;
}

export interface EncryptedAccountData {
  phoneNumber: string;
  dateOfBirth: string;
  card: EncryptedCard;
}