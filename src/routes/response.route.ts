export {};
const express = require('express');
import { OK } from 'http-status';
import { Request, Response, NextFunction } from 'express';
const response=require("../controllers/response.controller")
const router = express.Router();
const midleware=require("../midleware/midleware")
router.post('/addResponse',response.createResponse)
router.get('/response/question/:id',midleware.auth,response.getResponseByQuestion)
module.exports = router;