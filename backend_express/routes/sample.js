import { Router } from "express"
import * as testController from "../controllers/userController.js"

const router = Router();

router.get('/test', userController.userAction);

export default router