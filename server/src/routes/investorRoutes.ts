import express from "express";
import { getInvestor, createInvestor,updateInvestor, getCurrentResidences, addFavoriteProperty, removeFavoriteProperty } from "../controllers/investorController";

const router = express.Router();

router.get("/:cognitoId", getInvestor);
router.post("/", createInvestor);
router.put("/:cognitoId", updateInvestor);
router.get("/:cognitoId/current-residences", getCurrentResidences);
router.post("/:cognitoId/favorites/:propertyId", addFavoriteProperty);
router.delete("/:cognitoId/favorites/:propertyId", removeFavoriteProperty);

export default router;