import dotenv from "dotenv"
dotenv.config();
import express ,{NextFunction, Request, Response} from "express";
import {connectToServer } from "./Db";
import router from '../src/routes/auth'
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res, next) => {
    res.send('Hello World!');
})

app.use('/api/auth',router)

app.use((err:Error,req:Request,res:Response,next: NextFunction)=>{
   // console.log(err);
   res.status(500).json({msg:err.message});
})

connectToServer().then(async()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})