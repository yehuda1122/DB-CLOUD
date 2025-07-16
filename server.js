import express, { json, Router } from "express";
import {rout} from "./router.js";


export const app = express()
app.use(express.json())
app.use("/user",rout)
const PORT = process.env.PORT || 3013

app.listen(PORT,()=>{
    console.log('the server run in port: ' + PORT); 
} )     