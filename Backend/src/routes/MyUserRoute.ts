
import express from "express" 
import { jwtCheck, jwtParse } from "../middleware/auth"  
import MyUserController from "../controllers/middleware/models/routes/MyUserController";


const router=express.Router() 

router.post("/",jwtCheck,MyUserController.createCurrentUser); 
router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);

export default router