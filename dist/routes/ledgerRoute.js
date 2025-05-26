"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ledgerController_1 = require("../controllers/ledgerController");
const router = express_1.default.Router();
router.get('/accounts', ledgerController_1.listAccountsHandler);
router.post('/decrypt', ledgerController_1.decryptDataHandler);
exports.default = router;
