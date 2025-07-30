import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { getLeasePayments, getLeases } from "../controllers/leaseController";

const router = express.Router();

router.get("/", authMiddleware(["owner", "investor"]), getLeases);
router.get(
  "/:id/payments",
  authMiddleware(["owner", "investor"]),
  getLeasePayments
);

export default router;