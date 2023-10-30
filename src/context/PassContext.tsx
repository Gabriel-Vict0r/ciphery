import { useState, createContext, useContext } from "react";

export type Filters = {
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  especialChar: boolean;
  length: number;
  setUpperCase: (u: boolean) => void;
  setLowercase: (l: boolean) => void;
  setNumbers: (n: boolean) => void;
  setEspecialChar: (n: boolean) => void;
  setLength: (l: number) => void;
};
const PassContext = createContext<Filters>({
  upperCase: false,
  lowerCase: false,
  numbers: false,
  especialChar: false,
  length: 1,
  setUpperCase: () => {},
  setLowercase: () => {},
  setNumbers: () => {},
  setEspecialChar: () => {},
  setLength: () => {},
});

const useFilterContext = () => useContext(PassContext);

export { PassContext, useFilterContext };
