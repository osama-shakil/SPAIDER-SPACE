import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CustomAvatar = ({name,url}) => {
  return (
    <Avatar className="border">
      <AvatarImage src={url} alt={name} />
      <AvatarFallback className="text-black">{name}</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
