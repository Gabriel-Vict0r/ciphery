import React, { useState, useEffect } from "react";
import {
  BtnCopy,
  BtnGenerate,
  ContainerData,
  Input,
  Label,
} from "../Form/style";
import { AiOutlineCopy } from "react-icons/ai";
import { BtnCopyHash, BtnTypeHash, ContainerHS } from "./style";
import axios from "axios";

const Hash = () => {
  const [active1, setActive1] = useState<boolean>(false);
  const [active2, setActive2] = useState<boolean>(false);
  const [active3, setActive3] = useState<boolean>(false);
  //função para gerar a hash usando a API
  // const generateHash = () => {
  //   fetch("api.hashify.net/hash/md5/hex?value=helloWorld")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  useEffect(() => {
    async function getStaticProps() {
      const response = await axios.get(
        "https://api.hashify.net/hash/md5/hex?value=helloWorld"
      );
      console.log(response.data);
    }
    getStaticProps();
  }, []);

  function switchHash(ref: number) {
    if (ref === 1) {
      setActive1(true);
      setActive2(false);
      setActive3(false);
    } else if (ref === 2) {
      setActive1(false);
      setActive2(true);
      setActive3(false);
    } else if (ref === 3) {
      setActive1(false);
      setActive2(false);
      setActive3(true);
    } else {
      console.error("error to try switch options");
    }
  }
  return (
    <div>
      {" "}
      <Label htmlFor="password">Hash Gerado</Label>
      <ContainerData>
        <Input type="text" onChange={() => {}} readOnly />
        <BtnCopyHash>
          <AiOutlineCopy />
          Copiar
        </BtnCopyHash>
      </ContainerData>
      <ContainerHS>
        <BtnTypeHash $active={active1} onClick={() => switchHash(1)}>
          MD5
        </BtnTypeHash>
        <BtnTypeHash $active={active2} onClick={() => switchHash(2)}>
          SHA-1
        </BtnTypeHash>
        <BtnTypeHash $active={active3} onClick={() => switchHash(3)}>
          bybript
        </BtnTypeHash>
      </ContainerHS>
    </div>
  );
};

export default Hash;
