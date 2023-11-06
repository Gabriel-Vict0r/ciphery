import React from "react";
import { WrapperPass } from "./style";
import Form from "../Form";
import Hash from "../HashGenerated";

type Props = {};

const Generator = (props: Props) => {
  return (
    <WrapperPass>
      <Form />
      <Hash />
    </WrapperPass>
  );
};

export default Generator;