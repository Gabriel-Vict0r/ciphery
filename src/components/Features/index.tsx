import React, { useContext, useState } from "react";
import { BtnLength, WrapperFeat, WrapperFilters } from "./style";
import { Label } from "../Form/style";
import { BtnTypeHash } from "../HashGenerated/style";
import { useFilterContext } from "@/typescript/context/PassContext";

const Features = () => {
  //destrutura as constantes do context
  const {
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
  } = useFilterContext();

  //função para verificar o estado do botão e setar o mesmo
  function checkState(state: boolean, name: string) {
    if (state) {
      switch (name) {
        case "upper":
          setUpperCase(false);
          break;
        case "lower":
          setLowercase(false);
          break;
        case "numbers":
          setNumbers(false);
          break;
        case "especial":
          setEspecialChar(false);
          break;
        default:
          window.alert("error");
          break;
      }
    } else {
      switch (name) {
        case "upper":
          setUpperCase(true);
          break;
        case "lower":
          setLowercase(true);
          break;
        case "numbers":
          setNumbers(true);
          break;
        case "especial":
          setEspecialChar(true);
          break;
        default:
          window.alert("error");
          break;
      }
    }
  }
  //função que seta os valores dos filtros
  function setFilter(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    let name = e.currentTarget.name;
    console.log(typeof name);
    if (name === "upper") {
      checkState(upperCase, name);
    } else if (name === "lower") {
      checkState(lowerCase, name);
    } else if (name === "numbers") {
      checkState(numbers, name);
    } else if (name === "especial") {
      checkState(especialChar, name);
    } else {
      window.alert("error ao enviar o filtro");
      console.error("error ao enviar o filtro");
    }
    name = "";
  }
  function aproveLenght(e: React.FormEvent<HTMLInputElement>) {
    if (parseInt(e.currentTarget.value) > 70) {
      setLength(70);
      return false;
    }
  }
  console.log(length);

  //largura do botão
  const widthBtn = 20;
  return (
    <WrapperFeat>
      <div>
        <Label>Características</Label>
        <WrapperFilters>
          <BtnTypeHash
            $width={widthBtn}
            onClick={(e) => setFilter(e)}
            name="upper"
            $active={upperCase}
          >
            ABC
          </BtnTypeHash>
          <BtnTypeHash
            $width={widthBtn}
            onClick={(e) => setFilter(e)}
            name="lower"
            $active={lowerCase}
          >
            abc
          </BtnTypeHash>
          <BtnTypeHash
            $width={widthBtn}
            onClick={(e) => setFilter(e)}
            name="numbers"
            $active={numbers}
          >
            123
          </BtnTypeHash>
          <BtnTypeHash
            $width={widthBtn}
            onClick={(e) => setFilter(e)}
            name="especial"
            $active={especialChar}
          >
            !#@
          </BtnTypeHash>
        </WrapperFilters>
      </div>
      <div>
        <Label>Tamanho</Label>
        <BtnLength
          type="number"
          max={70}
          onInput={(e) => aproveLenght(e)}
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
      </div>
    </WrapperFeat>
  );
};

export default Features;
