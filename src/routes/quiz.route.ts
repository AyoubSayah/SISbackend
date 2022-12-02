export {};
const express = require('express');
import { OK } from 'http-status';
import { Request, Response, NextFunction } from 'express';
const quiz=require("../controllers/quiz.controller")
const router = express.Router();

router.post('/addQuiz',quiz.createQuiz)
module.exports = router;