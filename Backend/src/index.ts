import express, { Request, Response } from "express";
import mongoose from "mongoose" 
import "dotenv/config"
import cors from "cors";
import myUserRoute from "./routes/MyUserRoute"

mongoose.connect(process.env.MONGODB_URI as string).then(()=>{ 
    console.log("Connected to database")
})
const app = express();
const PORT = 8000; 

app.use(cors()) 
app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
}); 
app.use("/api/my/user",myUserRoute)

app.listen(PORT, ()=>{ 
    console.log("Server started on localhost:8000 ")
    console.log('You are connected to the  world ')
})