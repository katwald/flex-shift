import React from "react";

type Props = {
  title: string;
};

const index = ({ title }: Props) => {
  return <div>{title}</div>;
};

export default index;
