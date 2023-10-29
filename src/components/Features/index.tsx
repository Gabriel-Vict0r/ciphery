import React from "react";
import { BtnLength, WrapperFeat, WrapperFilters } from "./style";
import { Label } from "../Form/style";
import { BtnTypeHash } from "../HashGenerated/style";

type Props = {};

const Features = (props: Props) => {
  const widthBtn = 20;
  return (
    <WrapperFeat>
      <div>
        <Label>Características</Label>
        <WrapperFilters>
          <BtnTypeHash $width={widthBtn}>ABC</BtnTypeHash>
          <BtnTypeHash $width={widthBtn}>abc</BtnTypeHash>
          <BtnTypeHash $width={widthBtn}>123</BtnTypeHash>
          <BtnTypeHash $width={widthBtn}>!#@</BtnTypeHash>
        </WrapperFilters>
      </div>
      <div>
        <Label>Tamanho</Label>
        <BtnLength type="text" maxLength={3} />
      </div>
    </WrapperFeat>
  );
};

export default Features;
