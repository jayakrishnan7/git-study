import express from "express";
import { homeRoute } from "../controllers";

const router = express.Router();

router.get('/', homeRoute)

export { router };
newBranch branch is this