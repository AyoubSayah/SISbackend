export {}
import { NextFunction, Response, Router, Request } from 'express';
import { CREATED, OK } from 'http-status';
const catchAsync = require('../utils/catchAsync');
const { pick, omit } = require('lodash');
const ContactUs = require('../models/contactUs.model')


exports.createComment = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
    const AceeptedFields = pick(req.body, ['firstName','lastName','message','']);
    const contactUs = new ContactUs(AceeptedFields);
    const result = await contactUs.save();
    res.status(CREATED).json({status :"contact us  Sent", result})
  });
