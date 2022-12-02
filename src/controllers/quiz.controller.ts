export {}
import { NextFunction, Response, Router, Request } from 'express';
const quiz =require("../models/quiz")
const catchAsync = require('../utils/catchAsync');

exports.createQuiz = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
    const {title,image}=req.body
    const newquiz=await new quiz({
        title:title,
        image:image
    })
   await newquiz.save()
res.json(newquiz)
  });