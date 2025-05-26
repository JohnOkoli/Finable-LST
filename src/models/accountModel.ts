import mongoose, { Document, Schema } from 'mongoose';
import { IAccount } from '../types/accountType';  

const AccountSchema  = new Schema<IAccount>(
  {
    firstName: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    phoneNumber: { type: String, required: true, unique: true, trim: true },
    dateOfBirth: { type: String, required: true },
    address: { type: String, required: true },
    accountNumber: { type: String, required: true, unique: true },
    cardNumber: { type: String, required: true, unique: true },
    cvv: { type: String, required: true, unique: true },
    expiryDate: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IAccount>('Account', AccountSchema);