import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";
import cors from "cors";

const router = express.Router();

router.get("/:id", cors({ origin: "https://socialify-orpin.vercel.app" }), verifyToken, getUser);
router.get("/:id/friends", cors({ origin: "https://socialify-orpin.vercel.app" }), verifyToken, getUserFriends);
router.patch("/:id/:friendId", cors({ origin: "https://socialify-orpin.vercel.app" }), verifyToken, addRemoveFriend);


export default router;
