import { Router } from "express";
import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    getPhotos,
} from "../controller/user.controller";
const router: Router = Router();

router.get("/photos/:id", getPhotos);

router.get("/", getUsers);
router.get("/:id", getUser);
//post

router.put("/update/:id", updateUser);
router.post("/create", createUser);

export default router;
