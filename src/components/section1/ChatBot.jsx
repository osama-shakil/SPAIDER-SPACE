"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const handleSend = (event) => {
    event.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages([
          ...messages,
          { text: input, sender: "user" },
          { text: "This is a bot response.", sender: "bot" },
        ]);
      }, 1000);
    }
  };
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="flex flex-col gap-2">
      <div className=" flex flex-col  h-[80vh] overflow-y-scroll p-4 bg-github-secondary rounded shadow-md">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 py-2 px-4 text-wrap  max-w-[90%] border rounded ${
              msg.sender === "user" ? " self-end" : "self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form className=" h-[20%]" onSubmit={handleSend}>
        {" "}
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border  bg-github-secondary rounded shadow-md  focus:outline-none"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="p-3   bg-github-linkcolor text-white rounded-full shadow-md"
          >
            <IoIosSend className="text-white text-lg" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
