import { Router } from "express";
import { controller } from "../controller/index.js";
const router = Router();

router.get("/information", controller);

export default router;
