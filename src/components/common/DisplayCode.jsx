"use client";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const DisplayCode = ({ code }) => {
  return (
    <CopyBlock
      language="python"
      text={code}
      showLineNumbers={true}
      theme={dracula}
      wrapLines={true}
      codeBlock
    
    />
  );
};

export default DisplayCode;
