import React, { useContext, useState } from "react";
import { Wrapper } from "./style";
import Generator from "../PassGenerator";
import Hash from "../HashGenerated";
import Features from "../Features";
import { PassContext } from "@/typescript/context/PassContext";
import { Message } from "@/typescript/context/PassContext";
import Popup from "../popup";
const Content = () => {
  const [upperCase, setUpperCase] = useState<boolean>(false);
  const [lowerCase, setLowercase] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(false);
  const [especialChar, setEspecialChar] = useState<boolean>(false);
  const [length, setLength] = useState<number>(7);
  const [pass, setPass] = useState<string>("");
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [message, setMessage] = useState<Message>({
    title: "",
    firstMessage: "",
  });
  return (
    <Wrapper>
      <PassContext.Provider
        value={{
          upperCase,
          lowerCase,
          numbers,
          especialChar,
          pass,
          showPopUp,
          message,
          setUpperCase,
          setLowercase,
          setNumbers,
          setEspecialChar,
          length,
          setLength,
          setPass,
          setShowPopUp,
          setMessage,
        }}
      >
        <Generator />
        <Features />
        <Popup />
      </PassContext.Provider>
    </Wrapper>
  );
};

export default Content;
