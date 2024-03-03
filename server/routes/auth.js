import express from "express";
import { login } from "../controllers/auth.js";
import cors from "cors";

const router = express.Router();

router.post("/login", cors({ origin: "https://socialify-orpin.vercel.app" }), login);

export default router;
