import React from "react";

import TopBar from "../components/TopBar/TopBar";
import Statistics from "../components/Statistics/Statistics";

const TopTen = () => {
  return (
    <>
      <TopBar title={"TopTen"} link={"/"} />
      <Statistics />
    </>
  );
};

export default TopTen;
