export {}
import { NextFunction, Response, Router, Request } from 'express';
const question =require("../models/question")
const catchAsync = require('../utils/catchAsync');
const mongoose = require('mongoose');

exports.createQuestion = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
    const {content,order,quizId}=req.body
    console.log("req.body")
    const newQuestion=await new question({
        content:content,
        order:order,
        quizId:quizId
    })
   await newQuestion.save()
res.json(newQuestion)
  });

  exports.getQuestionByQuiz = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
    console.log("req.body")
    const listequestionByQuiz=await question.find({quizId:mongoose.Types.ObjectId(req.params?.id)})
res.json(listequestionByQuiz)
  });