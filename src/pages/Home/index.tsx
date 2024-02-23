import React from "react";
import Card from "../../components/common/Card";

type Props = {
  title: string;
};

const Home = ({ title }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Home;
