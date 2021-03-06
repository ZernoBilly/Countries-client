import React from "react";

import Countries from "../components/Countries/Countries";
import TopBar from "../components/TopBar/TopBar";

const Home = () => {
  return (
    <>
      <TopBar title={"Countries"} link={"/topten"} />
      <Countries />
    </>
  );
};

export default Home;
