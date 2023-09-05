// import { Router } from "express";
import Controller from "@controllers/index.controller";
import { Router } from "express";

const router = Router();

router.get("/", Controller.root);

export default router;
