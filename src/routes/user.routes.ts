import { Router } from "express";
import { getUsers, getUser, createUser, updateUser } from "../controller/user.controller";
const router: Router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);

router.put("/update/:id", updateUser);
router.post("/create", createUser);
export default router;
