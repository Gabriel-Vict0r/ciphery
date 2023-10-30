import React, { ChangeEvent, FormEvent, useState } from "react";
import { BtnCopy, BtnGenerate, ContainerData, Input, Label } from "./style";
import { AiOutlineCopy } from "react-icons/ai";
import { useFilterContext } from "@/typescript/context/PassContext";
type Props = {};

const Form = () => {
  const [pass, setPass] = useState<string>();
  function getPass(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setPass(e.target.value);
  }
  // const { upperCase} = useFilterContext();
  // console.log(upperCase);
  
    return (
      <>
        <form>
          <Label htmlFor="password">Senha padrão</Label>
          <ContainerData>
            <Input type="text" onChange={getPass} />
            <BtnCopy>
              {" "}
              <AiOutlineCopy />{" "}
            </BtnCopy>
            <BtnGenerate type="submit" value="Gerar" />
          </ContainerData>
            </form>
      </>
    );
};

export default Form;
