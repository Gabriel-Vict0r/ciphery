import React, { useContext, useState } from "react";
import { Wrapper } from "./style";
import Generator from "../PassGenerator";
import Hash from "../HashGenerated";
import Features from "../Features";
import { PassContext } from "@/typescript/context/PassContext";


const Content = () => {
  const [upperCase, setUpperCase] = useState<boolean>(false);
  const [lowerCase, setLowercase] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(false);
  const [especialChar, setEspecialChar] = useState<boolean>(false);
  const [length, setLength] = useState<number>(7);
  return (
    <Wrapper>
      <PassContext.Provider
        value={{
          upperCase,
          lowerCase,
          numbers,
          especialChar,
          setUpperCase,
          setLowercase,
          setNumbers,
          setEspecialChar,
          length,
          setLength,
        }}
      >
        <Generator />
        <Features />
      </PassContext.Provider>
    </Wrapper>
  );
};

export default Content;
