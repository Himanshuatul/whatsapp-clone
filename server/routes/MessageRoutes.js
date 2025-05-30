import { Router } from "express";
import { addImageMessage, addMessage,addAudioMessage, getMessages, getInitialContactswithMessages } from "../controllers/MessageController.js";
import multer from "multer";

const router = Router();
const uploadImage = multer({
    dest:"uploads/images"
})
const upload=multer({
    dest:"uploads/recordings"
})
router.post("/add-message", addMessage); 
router.get("/get-messages/:from/:to",getMessages)
router.post("/add-image-message",uploadImage.single("image"),addImageMessage)
router.post("/add-audio-message",uploadImage.single("audio"),addAudioMessage)
router.get("/get-initial-contacts/:from",getInitialContactswithMessages)

export default router;
