import { Request, Response, NextFunction } from "express";
import { createAccount } from "../services/accountService";
import { IAccount } from "../types/accountType";
import mongoose from "mongoose";

export const createAccountHandler = async (
  req: Request<{}, {}, Omit<IAccount, "accountNumber">>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Extra safety: Handle empty body
    if (!req.body || Object.keys(req.body).length === 0) {
      res.status(400).json({
        status: "error",
        message: "Request body cannot be empty.",
      });
      return;
    }

    const newAccount = await createAccount(req.body);

    res.status(201).json({
      status: "success",
      message: "Your account has been created successfully",
      data: newAccount,
    });
  } catch (err: any) {
    //Handle Mongoose validation errors
    if (err instanceof mongoose.Error.ValidationError) {
      const errors = Object.values(err.errors).map((e: any) => e.message);
      res.status(400).json({
        status: "error",
        message: errors,
      });
      return;
    }

    //  Handle duplicate email/phone errors from service
    if (err.message?.includes("already exists")) {
      res.status(400).json({
        status: "error",
        message: err.message,
      });
      return;
    }

    //  Fallback: Internal server error
    next(new Error("Failed to create account: " + err?.message));
  }
};