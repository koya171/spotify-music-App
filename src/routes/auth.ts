import express from 'express'
import getDb from '../Db'
import { User } from '../Db/types'
import bcrypt from 'bcrypt'
import dotenv from "dotenv"
import jwt from  'jsonwebtoken';
dotenv.config();

const router = express.Router()

router.post('/register', async (req, res) => {
    const db=getDb();
    const users=db.collection<User>('User');
    const password=await bcrypt.hash(req.body.password,10)
    await users.insertOne({
        email: req.body.email,
        password,
        username: req.body.username,
    });
   res.status(200).json({ message: "Registered successfully" })
})

router.post('/login', async (req, res) => {
 const db=getDb();
 const users=db.collection<User>('User');
 let user= await users.findOne({email:req.body.email});
 if(!user?.email) {
    return res.status(404).json({ message: "Email not found" })
 }
 const password=await  bcrypt.compare( req.body.password,user?.password!)
 if(!password) {
    return  res.status(404).json({ accessToken: null,message: "Password not matched" })
 }
 const accessToken = jwt.sign({ id: user?._id },process.env.JWT_SECRET!);
 return res.status(200).json({ accessToken,message: "logged in succussesfully" });
 
})
export default router