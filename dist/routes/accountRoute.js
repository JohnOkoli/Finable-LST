"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountController_1 = require("../controllers/accountController");
const validateRequest_1 = require("../middlewares/validateRequest");
const accountValidator_1 = require("../validators/accountValidator");
const router = (0, express_1.Router)();
router.post("/create", (0, validateRequest_1.validateRequest)(accountValidator_1.createAccountSchema), accountController_1.createAccountHandler);
exports.default = router;
