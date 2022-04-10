import React from "react";
import BorderRight from "../atoms/BorderRight";

const RoutesName = () => {
  return (
    <div className="flex px-11 py-4">
      <p className="text-[#A9A9A9] text-[12px]  font-openSans">Homepage</p>
        <BorderRight />
  
      <p className="text-[#A9A9A9] text-[12px]  font-openSans">
        Fruit and vegetables
      </p>
      <BorderRight />
      <p className="text-[#151515] text-[12px]  font-openSans">
        Carrots from Tomissy Farm
      </p>
    </div>
  );
};

export default RoutesName;
