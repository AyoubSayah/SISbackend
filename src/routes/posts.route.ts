export {};
const express = require('express');
const controller = require('../controllers/post.controller');

const router = express.Router();


router.route('/').post(controller.createPost);
router.route('/').get(controller.getposts)
router.route('/admin').get(controller.getpostsAdmin)


module.exports = router;