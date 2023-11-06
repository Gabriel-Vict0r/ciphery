import { useState, createContext, useContext } from "react";

export interface Message {
  title: string;
  firstMessage: string;
  secondMessage?: string;
}
export type Filters = {
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  especialChar: boolean;
  length: number;
  pass: string;
  showPopUp: boolean;
  message: Message;
  setUpperCase: (u: boolean) => void;
  setLowercase: (l: boolean) => void;
  setNumbers: (n: boolean) => void;
  setEspecialChar: (n: boolean) => void;
  setLength: (l: number) => void;
  setPass: (p: string) => void;
  setShowPopUp: (s: boolean) => void;
  setMessage: (m: Message) => void;
};
const PassContext = createContext<Filters>({
  upperCase: false,
  lowerCase: false,
  numbers: false,
  especialChar: false,
  length: 7,
  pass: "",
  showPopUp: false,
  message: { title: "", firstMessage: "" },
  setUpperCase: () => {},
  setLowercase: () => {},
  setNumbers: () => {},
  setEspecialChar: () => {},
  setLength: () => {},
  setPass: () => {},
  setShowPopUp: () => {},
  setMessage: () => {},
});

const useFilterContext = () => useContext(PassContext);

export { PassContext, useFilterContext };
