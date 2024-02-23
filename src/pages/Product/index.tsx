import React from "react";

type Props = {
  title: string;
};

const Product = ({ title }: Props) => {
  return <div>{title}</div>;
};

export default Product;
