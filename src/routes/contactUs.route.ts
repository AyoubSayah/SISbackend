export {};
const express = require('express');
const controller = require('../controllers/comment.controller');

const router = express.Router();


router.route('/').post(controller.createComment);
router.route('/').get(controller.getCommentByPost)

module.exports = router;