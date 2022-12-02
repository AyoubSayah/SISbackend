export {};
const express = require('express');
import { OK } from 'http-status';
import { Request, Response, NextFunction } from 'express';
const question=require("../controllers/question.controller")
const router = express.Router();

router.post('/addQuestion',question.createQuestion)
router.get('/getQuestion/:id',question.getQuestionByQuiz)
module.exports = router;