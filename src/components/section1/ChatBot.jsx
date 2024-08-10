"use client";
import { getPromptResponse } from "@/store/chat/chatThunk";
import { useSelect } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useDispatch } from "react-redux";

const ChatBot = () => {
  const dispatch = useDispatch();
  const {chatData} = useSelect((state) => state.chat);
  console.log('chat:****** ', chatData);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const handleSend = (event) => {
    event.preventDefault();
    if (input.trim()) {
      dispatch(
        getPromptResponse({
          payload: { text: input, sender: "user" },
          onSuccess: () => {},
        })
      );
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        dispatch(
          getPromptResponse({
            payload: { text: input, sender: "ai" },
            onSuccess: () => {},
          })
        );
      }, 1000);
    }
  };
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatData]);
  return (
    <div className="flex flex-col gap-2">
      <div className=" flex flex-col  h-[80vh] overflow-y-scroll p-4 bg-github-secondary rounded shadow-md">
        {chatData?.map((msg, index) => (
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
