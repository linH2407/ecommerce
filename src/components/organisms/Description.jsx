import React from "react";
import DetailPro from "../molecules/DetailPro";
import Header from "../molecules/Header";
import Menu from "../molecules/Menu";
import RoutesName from "../molecules/RoutesName";

const Description = () => {
  return (
    <div>
      <div className="px-11">
        <Header />
      </div>
      <Menu />
      <RoutesName />
      <DetailPro />
    
    </div>
  );
};

export default Description;
