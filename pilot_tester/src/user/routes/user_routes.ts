import { Router } from "express";
import UserController from "../controller/user_controller";

const router = Router();

router.post("/signup", UserController.createUser);

export default router;
