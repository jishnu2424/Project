const Chat = require('../Model/chats');
const Message = require('../Model/messages'); 
const addMessage = async (req, res) => {
  const tokenUserId = req.userId;
  const chatId = req.params.chatId;
  const text = req.body.text;

  try {
    
    const chat = await Chat.findOne({
      _id: chatId,
      userIDs: { $in: [tokenUserId] },
    });

    if (!chat) {
      return res.status(404).json({ message: "Chat not found!" });
    }

   
    const newMessage = new Message({
      text,
      userId: tokenUserId,
      chatId,
    });

    
    const message = await newMessage.save();

    
    chat.messages.push(message); 
    chat.lastMessage = text;
    chat.seenBy = [tokenUserId]; 

    await chat.save(); 

    res.status(200).json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add message!" });
  }
};

module.exports = { addMessage };
