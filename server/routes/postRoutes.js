import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as Cloudinary} from 'cloudinary';
import Post from '../mongodb/models/post.js';
// import {postController} from '../controllers/postController.js'
dotenv.config();
const router  = express.Router();

// router.route("/").get(postController.get);
router.route("/").get();
export default router;