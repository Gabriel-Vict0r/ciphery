import React, { ChangeEvent, FormEvent, useState } from "react";
import { BtnCopy, BtnGenerate, ContainerData, Input, Label } from "./style";
import { AiOutlineCopy } from "react-icons/ai";
import { useFilterContext } from "@/typescript/context/PassContext";

const Form = () => {
  const [pass, setPass] = useState<string>();
  function getPass(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setPass(e.target.value);
  }
  const { upperCase, lowerCase, numbers, especialChar, length } =
    useFilterContext();
  interface Params {
    upperCase: boolean;
    lowerCase: boolean;
    numbers: boolean;
    especialChar: boolean;
    length: number;
  }
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
    console.log(
      `String gerada: ${strPass} \n tamanho da string ${strPass.length}`
    );

    for (let i = 0; i < length; i++) {
      var randomNumber = Math.floor(Math.random() * strPass.length);
      console.log(`Número aleatório: ${randomNumber}`);
      password += strPass.substring(randomNumber, randomNumber + 1);
    }
    setPass(password);
  }
  return (
    <>
      <div>
        <Label htmlFor="password">Senha padrão</Label>
        <ContainerData>
          <Input type="text" onChange={getPass} value={pass} />
          <BtnCopy>
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
