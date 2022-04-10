import React from "react";
import DesPro from "../atoms/DesPro";
import Footer from "../atoms/Footer";
import Image from "../atoms/Image";
import img1 from "../atoms/images/img1.png";
import img2 from "../atoms/images/img2.png";
import MorePro from "../atoms/MorePro";

const DetailPro = () => {
  return (
    <div>
      <div className="flex grid grid-cols-12">
        <div className="px-8 col-span-6">
          {/* <img src={img1} alt="img1" /> */}
          <div className="relative">
            <Image src={img1} alt={img1} />
            <div>
              <span className="absolute top-4 left-4 text-[12px] text-[#6A983C] font-poppins font-semibold px-[10px] py-1 bg-[#F4F8EC] rounded-[12px]">- 36%</span>
              <span className="absolute top-4 left-16 ml-4 text-[12px] text-[#6A983C] font-poppins font-semibold px-[10px] py-1 bg-[#F4F8EC] rounded-[12px]">Free shipping</span>

            </div>
          </div>

          <p className="font-openSans text-[12px] font-bold pt-8 pb-10">
            Carrots from Tomissy Farm
          </p>
          <div className="flex justify-between pl-1">
            <Image src={img2} alt={img2} />
            <Image src={img2} alt={img2} />
            <Image src={img2} alt={img2} />
            <Image src={img2} alt={img2} />
          </div>
        </div>
        <div className="col-span-6">
          <DesPro />
        </div>
      </div>

      <MorePro />
      <Footer/>
    </div>
  );
};

export default DetailPro;
