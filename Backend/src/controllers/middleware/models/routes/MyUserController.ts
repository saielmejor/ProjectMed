import { Request, Response } from "express";
import User from "../../../../models/user";

const createCurrentUser=async( req:Request,res:Response)=>{ 
    try{ 
        const { auth0Id } = req.body;
        const existingUser = await User.findOne({ auth0Id });
        console.log(existingUser)
        if (existingUser) {
          
          return res.status(200).send();
        }
        const newUser=new User(req.body); 

        await newUser.save()
        return res.status(201).json(newUser.toObject());
    }
    catch (error) { 
        console.log(error) ; 
        res.status(500).json({message:"Error creating user "}) 
        

    }
} 

const getCurrentUser=async(req:Request, res:Response)=>{ 
    try{ 
        const currentUser=await User.findOne({_id:req.userId}); 
        if(!currentUser){ 
            return res.status(404).json({message:"User not found "})
        }
        res.json(currentUser)

    }catch(error){ 
        console.log(error) 
        return res.status(500).json({message: "Something went wrong"})
    }
}

export default { 
    createCurrentUser,
    getCurrentUser
}