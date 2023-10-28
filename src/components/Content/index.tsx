import React from "react";
import { Wrapper } from "./style";
import Generator from "../PassGenerator";
import Hash from "../HashGenerated";

type Props = {};

const Content = (props: Props) => {
  return (
    <Wrapper>
      <Generator />
    </Wrapper>
  );
};

export default Content;
