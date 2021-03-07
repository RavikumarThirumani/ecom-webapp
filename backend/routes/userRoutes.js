import express from "express";
const router = express.Router();
import {
  authUser,
  regiaterUser,
  getUsers,
  deleteUser,
  getUserById,
  getUserProfile,
} from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/").post(regiaterUser).get(protect, admin, getUsers);
// to delete user
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById);
// protect, admin, v.get(getUsers);
router.post("/login", authUser);

// router.route('/profile').get(getUserProfile)

export default router;
