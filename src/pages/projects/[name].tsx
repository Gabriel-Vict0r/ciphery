import { useRouter } from "next/router";
import React from "react";

const Member = () => {
  const { query } = useRouter();
  return <div>{query.login}</div>;
};

export default Member;
