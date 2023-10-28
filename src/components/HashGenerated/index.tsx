import React from "react";
import {
  BtnCopy,
  BtnGenerate,
  ContainerData,
  Input,
  Label,
} from "../Form/style";
import { AiOutlineCopy } from "react-icons/ai";
import { BtnCopyHash } from "./style";
type Props = {};

const Hash = (props: Props) => {
  return (
    <div>
      {" "}
      <Label htmlFor="password">Hash Gerado</Label>
      <ContainerData>
        <Input type="text" onChange={() => {}} />
        <BtnCopyHash>
          <AiOutlineCopy />
          Copiar
        </BtnCopyHash>
      </ContainerData>
    </div>
  );
};

export default Hash;
