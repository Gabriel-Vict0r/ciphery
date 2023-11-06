import React, { ChangeEvent, FormEvent, useState } from "react";
import { BtnCopy, BtnGenerate, ContainerData, Input, Label } from "./style";
import { AiOutlineCopy } from "react-icons/ai";
import { useFilterContext } from "@/typescript/context/PassContext";
import copy from "copy-to-clipboard";
import { copyedPass, voidValue } from "@/typescript/utils/messages";
const Form = () => {
  //hook que armazena a senha e a função para setar o que for gerado na mesma

  //função para capturar os caracteres digitados no input
  function getPass(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setPass(e.target.value);
  }

  //desestruturação dos estados presentes no contexto de senha
  const {
    upperCase,
    lowerCase,
    numbers,
    especialChar,
    length,
    pass,
    setPass,
    setShowPopUp,
    showPopUp,
    message,
    setMessage,
  } = useFilterContext();

  //função que irá gerar a senha
  function generatePassword() {
    if (!upperCase && !lowerCase && !numbers && !especialChar && !length) {
      alert("Precisa ser informado ao menos um filtro!");
    }
    const filter1: string = "ABCDEFGHIJKLMNOKPRSTUXYZ";
    const filter2: string = filter1.toLowerCase();
    const filter3: string = "1234567890";
    const filter4: string = "!@#$%^&*()";
    let strPass: string = "";
    let password = "";
    if (upperCase) {
      strPass += filter1;
    }
    if (lowerCase) {
      strPass += filter2;
    }
    if (numbers) {
      strPass += filter3;
    }
    if (especialChar) {
      strPass += filter4;
    }
    for (let i = 0; i < length; i++) {
      var randomNumber = Math.floor(Math.random() * strPass.length);
      password += strPass.substring(randomNumber, randomNumber + 1);
    }
    setPass(password);
  }
  function showMessage() {
    setShowPopUp(true);
    if (pass === "" || pass === null) {
      setMessage(voidValue);
    } else {
      copy(pass);
      setMessage(copyedPass);
    }
  }
  return (
    <>
      <div>
        <Label htmlFor="password">Senha padrão</Label>
        <ContainerData>
          <Input type="text" onChange={getPass} value={pass} />
          <BtnCopy onClick={showMessage}>
            {" "}
            <AiOutlineCopy />{" "}
          </BtnCopy>
          <BtnGenerate onClick={generatePassword}>Gerar</BtnGenerate>
        </ContainerData>
      </div>
    </>
  );
};

export default Form;
