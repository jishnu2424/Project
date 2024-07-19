import { useContext, useEffect, useRef, useState } from "react";
import "./chat.css";
import { format } from 'timeago.js';
import { SocketContext } from "../../Context/SocketContext";
import ApiRequest from '../../Lib/ApiRequest'
import { IoSend, IoCloseCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

function Chat() {
  const [chat, setChat] = useState(null);
  const [chats, setChats] = useState([]);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { socket } = useContext(SocketContext);
  const messageEndRef = useRef();

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const getChats = async () => {
    try {
      const response = await ApiRequest.get('/chat/');
      console.log(response.data);
      setChats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await ApiRequest.get(`/chat/${id}`);
      setChat({ ...res.data, receiver });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");

    if (!text) {
      return;
    }

    try {
      const res = await ApiRequest.post(`/message/${chat._id}`, { text });
      setChat(prev => ({
        ...prev,
        messages: [...prev.messages, res.data]
      }));
      console.log(res);
      e.target.reset();

      if (chat.receiver?._id) {
        console.log(`Sending message to receiver: ${chat.receiver._id}`);
        socket.emit("sendMessage", {
          receiverId: chat.receiver._id,
          data: res.data,
        });
      } else {
        console.log("Receiver ID is not defined");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const read = async () => {
      try {
        await ApiRequest.put(`/chat/read/${chat._id}`);
      } catch (err) {
        console.log(err);
      }
    };

    if (chat && socket) {
      const messageHandler = (data) => {
        if (chat._id === data.chatId) {
          setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
          read();
        }
      };

      socket.on("getMessage", messageHandler);

      return () => {
        socket.off("getMessage", messageHandler);
      };
    }
  }, [chat, socket, setChat]);

  useEffect(() => {
    getChats();
  }, []);

  return (
    <div className="chat">
      <h1>Messages</h1>
      {chats.map((items) => (
        <div className="messages" key={items._id}>
          <div className="message" onClick={() => handleOpenChat(items._id, items.receiver)}>
            <img
              src={items.receiver?.photo || "https://i.pinimg.com/564x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg"}
              alt={items.receiver?.photo || "Default Avatar"}
            />
            <span>{items.receiver?.username || "Unknown User"}</span>
            <p>{items.lastMessage || "No messages yet"}</p>
          </div>
        </div>
      ))}
      <div ref={messageEndRef}></div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src={chat.receiver?.photo || "https://i.pinimg.com/564x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg"}
                alt={chat.receiver?.username || "Default Avatar"}
              />
              {chat.receiver?.username || "Unknown User"}
            </div>
            <span className="close" onClick={() => setChat(null)}><IoCloseCircleOutline style={{ width: "50px", height: "50px" }} />
            </span>
          </div>
          <div className="center">
            {chat.messages.map((item) => (
              <div className="chatMessage" style={{
                alignSelf: item.userId === currentUser._id ? "flex-end" : "flex-start",
                textAlign: item.userId === currentUser._id ? "right" : "left",
              }} key={item._id}>
                <p className="chattext">{item.text}</p>
                <span style={{ color: 'white' }}>{format(item.createdAt)}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="bottom">
            <input type="text" name="text" className="chatarea" placeholder="Type Message" />
            <button type="submit" className="chatbtn"><IoSend style={{ height: "40px", width: "40px", marginLeft: "9px", color: "white" }} /></button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;
