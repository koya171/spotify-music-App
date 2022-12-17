import { User } from "../Db/types";
import { expressjwt } from "express-jwt";
import {NextFunction,Response} from 'express'
import getDb from '../Db';
// import { Request } from "../types";

// import { ObjectID } from "mongodb";

// const injectUser=async (req: Request, res: Response,next: NextFunction) => {

// const db = getDb();
// const users= db.collection<User>("User");
// if(req.auth.id === undefined){
//     req.auth.id=new ObjectID(req.auth.id);
//     req.user=await users.findOne({
//         _id:req.auth.id,
//     })
//     console.log("req.user: " + req.user,req.auth.id);
// }
// next();
// }
// export default () => [
//     expressjwt({ secret : process.env.JWT_SECRET, algorithms: ["HS256"] }),
//     injectUser,
// ];