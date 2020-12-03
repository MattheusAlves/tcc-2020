const express = require("express");
const router = express.Router();

const Chat  = require("../controllers/chat");
const { userById } = require("../controllers/user");

router.get("/chat/load/messages/:userId", Chat.loadMessages);
router.get('/chat/load/last/message/:userId', Chat.loadLastMessage);

router.param("userId", userById);

module.exports = router;
