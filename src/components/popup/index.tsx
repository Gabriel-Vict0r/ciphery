"use front";
import React, { useState, useEffect } from "react";
import {
  ContainerPop,
  FirstMessage,
  HeaderPop,
  SecondMessage,
  TitlePop,
  BgModal,
  WrapperAll,
} from "./style";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useFilterContext } from "@/typescript/context/PassContext";

// const props = reference.clientHeight;
const Popup = () => {
  const { showPopUp, setShowPopUp, message, setMessage } = useFilterContext();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(document.getElementsByTagName("main")[0].clientHeight);
  }, []);
  const formatedHeight: string = `${height}px`;
  return (
    showPopUp && (
      <WrapperAll $height={formatedHeight}>
        <BgModal onClick={() => setShowPopUp(false)} />
        <ContainerPop>
          <HeaderPop>
            <TitlePop>{message.title}</TitlePop>
            <IoIosCloseCircleOutline onClick={() => setShowPopUp(false)} />
          </HeaderPop>
          <FirstMessage>{message.firstMessage}</FirstMessage>
          <SecondMessage>{message.secondMessage}</SecondMessage>
        </ContainerPop>
      </WrapperAll>
    )
  );
};

export default Popup;
