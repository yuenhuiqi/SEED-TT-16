import { Router } from "express"
import * as userController from "../controllers/user_controller.js"

const router = Router();

router.put('/updateUser', userController.updateUser);

export default router