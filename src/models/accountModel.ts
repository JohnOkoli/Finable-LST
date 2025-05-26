// import mongoose, { Document, Schema } from 'mongoose';
// import { IAccount } from '../types/accountType';  

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

import mongoose, { Schema, Document } from 'mongoose';
import { IAccount, ICard } from '../types/accountType';


export interface IAccountModel extends IAccount, Document {}

const CardSchema: Schema<ICard> = new Schema<ICard>({
  cardNumber: { type: String, required: true },
  cvv: { type: String, required: true },
  expiryDate: { type: String, required: true },
});

const AccountSchema: Schema = new Schema<IAccountModel>(
  {
    firstName: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    dateOfBirth: { type: String, required: true },
    accountNumber: { type: String, required: true, unique: true },
    card:{ 
      type: CardSchema, 
      required: false,
      default: null
    },
  },
  { timestamps: true }
);

export const AccountModel = mongoose.model<IAccountModel>('Account', AccountSchema);