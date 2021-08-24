import express from "express";
import {getPosts, createPost} from "../controllers/postController.js";

const router = express.Router();

// localhost:
//  http://localhost:5000
router.get('/', getPosts);
router.post("/", createPost)
// module.exports = router;
export default router;