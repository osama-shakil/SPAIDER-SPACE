"use client";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import DisplayCode from "../common/DisplayCode";

const DetailResponse = () => {
  const { detailResponse } = useSelector((state) => state.chats);
  console.log('detailResponse: ', detailResponse);
  const [response, setResponse] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (detailResponse) {
      const responseWithCode = detailResponse.includes("'''")
        ? detailResponse.split("'''")
        : null;
      setResponse(responseWithCode);
    }
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [detailResponse]);
  return (
    <div className=" flex flex-col  h-[83vh] overflow-y-scroll p-4 bg-github-secondary rounded shadow-md">
      <>
        {response ? (
          <div className={`my-2 py-2 px-4 text-wrap  max-w-[100%]  rounded `}>
            {response[0]}
            <br></br>
            <br></br>

            <DisplayCode code={response[1]} />
            <br></br>

            {response[2]}
          </div>
        ) : (
          <div
            className={`my-2 py-2 px-4 text-wrap  max-w-[90%]`}
          >
            <pre >{detailResponse}</pre>
          </div>
        )}
      </>

      {/* <div ref={chatEndRef} /> */}
    </div>
  );
};

export default DetailResponse;
