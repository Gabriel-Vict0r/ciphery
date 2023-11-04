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
import { useFilterContext } from "@/typescript/context/PassContext";
import { copyToClipboard } from "@/typescript/utils/universalFunctions";

const Hash = () => {
  const [md5, setMd5] = useState<boolean>(false);
  const [sha1, setSha1] = useState<boolean>(false);
  const [highway, setHighway] = useState<boolean>(false);

  const { pass } = useFilterContext();

  //variável e função que irá armazenar e setar um novo valor na mesma
  const [hash, setHash] = useState<string>("");

  //constantes que armazenam a url da api
  const urlMD5 = `https://api.hashify.net/hash/md5/hex?value=${pass}`;
  const urlSHA1 = `https://api.hashify.net/hash/sha1/hex?value=${pass}`;
  const urlHighWay = `https://api.hashify.net/hash/highway128?value=${pass}&key=random`;

  //função para gerar a hash
  const generateHash = (url: string) => {
    if (hash.length > 0) {
      setHash("");
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setHash(data.Digest));
  };
  function switchHash(ref: number) {
    if (ref === 1) {
      setMd5(true);
      setSha1(false);
      setHighway(false);
      generateHash(urlMD5);
    } else if (ref === 2) {
      setMd5(false);
      setSha1(true);
      setHighway(false);
      generateHash(urlSHA1);
    } else if (ref === 3) {
      setMd5(false);
      setSha1(false);
      setHighway(true);
      generateHash(urlHighWay);
    } else {
      console.error("error to try switch options");
    }
  }
  return (
    <div>
      {" "}
      <Label htmlFor="password">Hash Gerado</Label>
      <ContainerData>
        <Input type="text" value={hash} readOnly />
        <BtnCopyHash onClick={() => copyToClipboard(hash, "hash")}>
          <AiOutlineCopy />
          Copiar
        </BtnCopyHash>
      </ContainerData>
      <ContainerHS>
        <BtnTypeHash $active={md5} onClick={() => switchHash(1)}>
          MD5
        </BtnTypeHash>
        <BtnTypeHash $active={sha1} onClick={() => switchHash(2)}>
          SHA-1
        </BtnTypeHash>
        <BtnTypeHash $active={highway} onClick={() => switchHash(3)}>
          Highway
        </BtnTypeHash>
      </ContainerHS>
    </div>
  );
};

export default Hash;
