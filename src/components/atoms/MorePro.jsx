import React from "react";
import Product from "./Product";

import img3 from "../atoms/images/img3.png";
import img4 from "../atoms/images/img4.png";
import img5 from "../atoms/images/img5.png";


const MorePro = () => {
  return (
    <div className="px-8">
      <div className="text-[18px] font-semibold font-poppins flex justify-between pt-16 pb-8">
        <p>Related products</p>
        <div className="flex gap-[6px]">
          <p>More products</p>
          <i className="fa-solid fa-angle-right text-[#6A983C] text-[14px] pt-2"></i>
        </div>
      </div>
      <div className="flex justify-between">
          <Product src={img5} title='Product Title' des='Space for a small product description ' price='3.26 USD'/>
          <Product src={img5} title='Product Title' des='Space for a small product description ' price='1.48 USD'/>
          <Product src={img3} title='Product Title' des='Space for a small product description ' price='0.28 USD' cost='48.46' sale='- 36%'/>
          <Product src={img4} title='Product Title' des='Space for a small product description ' price='1.12 USD'/>

      </div>
    </div>
  );
};

export default MorePro;
