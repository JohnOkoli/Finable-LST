import { Router } from "express";
import { createAccountHandler } from "../controllers/accountController";
import { validateRequest } from "../middlewares/validateRequest";
import { createAccountSchema } from "../validators/accountValidator";

const router = Router();

router.post("/create", validateRequest(createAccountSchema), createAccountHandler);

export default router;