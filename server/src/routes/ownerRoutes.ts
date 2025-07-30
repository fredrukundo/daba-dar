import express from "express";
import { getOwner, createOwner,updateOwner, getManagerProperties } from "../controllers/ownerController";

const router = express.Router();

router.get("/:cognitoId", getOwner);
router.put("/:cognitoId", updateOwner);
router.get("/:cognitoId/properties", getManagerProperties);
router.post("/", createOwner);

export default router;