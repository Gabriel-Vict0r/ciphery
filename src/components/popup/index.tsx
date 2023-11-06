import React, { useState, useEffect } from "react";
import {
  ContainerPop,
  FirstMessage,
  HeaderPop,
  SecondMessage,
  TitlePop,
  BgModal,
} from "./style";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useFilterContext } from "@/typescript/context/PassContext";

const Popup = () => {
  const { showPopUp, setShowPopUp, message, setMessage } = useFilterContext();
  // const heigth = window.innerHeight;
  return (
    showPopUp && (
      <div>
        <BgModal onClick={() => setShowPopUp(false)} />
        <ContainerPop>
          <HeaderPop>
            <TitlePop>{message.title}</TitlePop>
            <IoIosCloseCircleOutline onClick={() => setShowPopUp(false)} />
          </HeaderPop>
          <FirstMessage>{message.firstMessage}</FirstMessage>
          <SecondMessage>{message.secondMessage}</SecondMessage>
        </ContainerPop>
      </div>
    )
  );
};

export default Popup;
