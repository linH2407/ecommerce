import React from "react";

const Product = ({ src, title, des, price, cost, sale }) => {
  return (
    <div className="border border-[#d1d1d1]  rounded-[12px]">
      <div className="p-4">
        <div className="relative">
          <img src={src} alt={src} className="w-full" />
          <div>
            <span className="absolute top-3 left-3 text-[12px] text-[#6A983C] font-poppins font-semibold px-[10px] bg-[#F4F8EC] rounded-[12px]">
              {sale}
            </span>
          </div>
        </div>
        <p className="text-[15px] font-poppins font-medium pt-4 pb-1">
          {title}
        </p>
        <p className="text-[12px] font-openSans text-[#575757]">{des}</p>
        <div className="pt-5 flex justify-between">
          <div>
            <p className="text-[18px] font-poppins font-semibold">{price}</p>
          </div>
          <div className="border-[2px] border-[#46760a] rounded-[12px] bg-[#6a983c]">
            <button
              type="button"
              className="text-white font-poppins text-[15px] font-bold py-[6px] px-3 "
            >
              Buy now
            </button>
          </div>
        </div>
        <p className="text-[12px] font-poppins font-semibold text-[#a9a9a9] line-through">
          {cost}
        </p>
      </div>
    </div>
  );
};

export default Product;
