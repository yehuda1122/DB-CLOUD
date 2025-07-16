import express from "express";
import {checkUser} from "./dataDAL.js"

export const rout = express.Router();

rout.post("/",checkUser)