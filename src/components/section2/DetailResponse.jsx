"use client";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import DisplayCode from "../common/DisplayCode";

const DetailResponse = () => {
  const { chatData } = useSelector((state) => state.chats);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatData]);

  return (
    <div className=" flex flex-col  h-[83vh] overflow-y-scroll p-4 bg-github-secondary rounded shadow-md">
      {chatData
        ?.filter((msg) => msg.sender === "ai")
        .map((msg, index) => {
          const responseWithCode = msg.text.includes("'''")
            ? msg.text.split("'''")
            : null;
          console.log("responseWithCode: ", responseWithCode);
          return (
            <>
              {responseWithCode ? (
                <div
                  key={index}
                  className={`my-2 py-2 px-4 text-wrap  max-w-[100%] border rounded ${
                    msg.sender === "user" ? " self-end" : "self-start"
                  }`}
                >
                  {responseWithCode[0]}
                  <br></br>
                  <br></br>

                  <DisplayCode code={responseWithCode[1]} />
                  <br></br>

                  {responseWithCode[2]}
                </div>
              ) : (
                <div
                  key={index}
                  className={`my-2 py-2 px-4 text-wrap  max-w-[90%] border rounded ${
                    msg.sender === "user" ? " self-end" : "self-start"
                  }`}
                >
                  {msg.text}
                </div>
              )}
            </>
          );
        })}
      <div ref={chatEndRef} />
    </div>
  );
};

export default DetailResponse;
