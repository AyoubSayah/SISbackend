export {}
import { NextFunction, Response, Router, Request } from 'express';
const response =require("../models/reponse")
const question =require("../models/question")
const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken')

const catchAsync = require('../utils/catchAsync');

exports.createResponse = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
 
    const {questionId,content,isCorrect}=req.body
    const responseQuestion=await new response({
        questionId:questionId,
        content:content,
        isCorrect:isCorrect
    })
   await responseQuestion.save()
res.json(responseQuestion)
  });
  exports.getResponseByQuestion = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
    const token =""
    // console.log("res.header", req.headers.authorization?.split(' ')[1])
     // const decoded = jwt.verify("", 'Mz00RP2Ym01p9PsHbH5nAivOJGAxePA')
//    const base64String = token.split(".")[1];
//     const decodedValue = JSON.parse(Buffer.from(base64String,    
//                          "base64").toString("ascii"));
//     console.log(token.split("."));
   console.log("  res.locals",res.locals)
    const responsesQuestion=await response.find({questionId:mongoose.Types.ObjectId(req.params?.id)})
res.json(responsesQuestion)
  }); 