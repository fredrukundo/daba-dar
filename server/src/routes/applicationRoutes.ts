import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  createApplication,
  listApplications,
  updateApplicationStatus,
} from "../controllers/applicationController";

const router = express.Router();

router.post("/", authMiddleware(["investor"]), createApplication);
router.put("/:id/status", authMiddleware(["owner"]), updateApplicationStatus);
router.get("/", authMiddleware(["owner", "investor"]), listApplications);

export default router;