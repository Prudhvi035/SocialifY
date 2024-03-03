import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
import cors from "cors";

const router = express.Router();


router.get("/", cors({ origin: "https://socialify-orpin.vercel.app" }), verifyToken, getFeedPosts);
router.get("/:userId/posts", cors({ origin: "https://socialify-orpin.vercel.app" }), verifyToken, getUserPosts);
router.patch("/:id/like", cors({ origin: "https://socialify-orpin.vercel.app" }), verifyToken, likePost);


export default router;
