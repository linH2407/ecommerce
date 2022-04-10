import React from "react";

const MenuName = ({ name }) => {
  return (
    <div className="flex">
      <p className="text-[15px] font-poppins font-medium">{name}</p>
      <i className="fa-solid fa-angle-down text-[#6A983C] text-[10px] pt-1 pl-[5px]"></i>
    </div>
  );
};

export default MenuName;
