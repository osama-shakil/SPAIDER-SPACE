"use client";
import { response } from "@/assets/Data";
import { refreshChat, sendPromt } from "@/store/chat/chatSlice";
import {
  getPromptDetailedResponse,
  getPromptResponse,
} from "@/store/chat/chatThunk";
import { useEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { TbLoaderQuarter } from "react-icons/tb";
import { MdOutlineRefresh } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";

const ChatBot = () => {
  const dispatch = useDispatch();
  const { chatData, loader } = useSelector((state) => state.chats);

  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const handleSend = (event) => {
    event.preventDefault();
    if (input.trim()) {
      const prompt = input;
      dispatch(sendPromt({ input: input, ai: "" }));
      dispatch(
        getPromptResponse({
          payload: { input: input, ai: "" },
          onSuccess: () => {
            dispatch(
              getPromptDetailedResponse({
                payload: { input: prompt, ai: "" },
                onSuccess: () => {},
              })
            );
          },
        })
      );

      setInput("");
    }
  };

  const handleRefresh = () => {
    dispatch(refreshChat());
  };
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatData]);
  return (
    <div className="flex flex-col gap-2">
      <div className=" flex flex-col  h-[80vh] overflow-y-scroll p-4 bg-github-secondary rounded shadow-md">
        <div className="flex justify-end">
          <MdOutlineRefresh
            className="text-gray-400 cursor-pointer text-4xl rounded-full  hover:bg-github-primary p-2"
            onClick={handleRefresh}
          />
        </div>
        {chatData
          ?.filter((msg) => Object.keys(msg).length > 0 || !msg.text)
          ?.map((msg, index) => (
            <>
              {
                <div
                  key={index}
                  className={`my-2 py-2 px-4 text-wrap self-end max-w-[90%]  bg-github-primary shadow rounded `}
                >
                  {msg.input}
                </div>
              }

              {msg?.ai && (
                <div
                  key={index}
                  className={`my-2 py-2 px-4 text-wrap self-start  max-w-[90%] bg-github-primary shadow rounded `}
                >
                  {msg?.ai?.length > 100
                    ? msg?.ai?.slice(0, 100) + "..."
                    : msg.ai}
                </div>
              )}
            </>
          ))}
        <div ref={chatEndRef} />
      </div>
      <form className=" h-[20%]" onSubmit={handleSend}>
        {" "}
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            value={input}
            disabled={loader}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border  bg-github-secondary rounded shadow-md  focus:outline-none"
            placeholder="Type your message..."
          />
          <Button
            disabled={loader}
            onClick={handleSend}
            className="p-3   bg-github-linkcolor hover:bg-github-linkcolor text-white rounded-full shadow-md"
          >
            {loader ? (
              <TbLoaderQuarter className="text-white text-lg animate-spin" />
            ) : (
              <IoIosSend className="text-white text-lg" />
            )}{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
