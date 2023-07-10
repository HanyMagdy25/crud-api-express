import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);

export default router;
