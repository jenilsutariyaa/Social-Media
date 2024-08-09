import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
  deleteUser,
  getUsers
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/",  getUsers);

//not on post man
router.get("/:id",  getUser);
// router.get("/:id", verifyToken, getUser);
// router.get("/:id", getUser);
// router.get("/:id/friends", verifyToken, getUserFriends);
router.get("/:id/friends",  getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", addRemoveFriend);
// router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

//delete
router.delete("/:id", deleteUser);
// router.delete("/:id", verifyToken, deleteUser);

export default router;