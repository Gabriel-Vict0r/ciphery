import React from "react";
import { Wrapper } from "./style";
import Generator from "../PassGenerator";
import Hash from "../HashGenerated";
import Features from "../Features";

type Props = {};

const Content = (props: Props) => {
  return (
    <Wrapper>
      <Generator />
      <Features />
    </Wrapper>
  );
};

export default Content;
