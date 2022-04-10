import React from "react";
import ProTag from "./ProTag";

const Footer = () => {
  return (
    <div className="mt-16 px-10 ">
      <div className="flex justify-between">
        <div>
          <p className="font-poppins font-semibold text-[18px] pb-1">
            Get in touch
          </p>
          <div className="text-[14px] font-openSans text-[#6A983C] leading-10">
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Blog</p>
          </div>
        </div>
        <div>
          <p className="font-poppins font-semibold text-[18px] pb-1">
          Connections
          </p>
          <div className="text-[14px] font-openSans text-[#6A983C] leading-10">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Youtube</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div>
          <p className="font-poppins font-semibold text-[18px] pb-1">
          Earnings
          </p>
          <div className="text-[14px] font-openSans text-[#6A983C] leading-10">
            <p>Become an Affiliate</p>
            <p>Advertise your product</p>
            <p>Sell on Market</p>
          </div>
        </div>
        <div>
          <p className="font-poppins font-semibold text-[18px] pb-1">
          Account
          </p>
          <div className="text-[14px] font-openSans text-[#6A983C] leading-10">
            <p>Your account</p>
            <p>Returns Centre</p>
            <p>100 % purchase protection</p>
            <p>Chat with us</p>
            <p>Help</p>
          </div>
        </div>
      </div>
      <div className="pt-12">
          <p className="text-[18px] font-semibold font-poppins">Product tags</p>
          <div className="flex flex-wrap gap-4 pt-4 ">
              <ProTag name='Beans'/>
              <ProTag name='Carrots'/>
              <ProTag name='Apples'/>
              <ProTag name='Garlic'/>
              <ProTag name='Mushrooms'/>
              <ProTag name='Tomatoes'/>
              <ProTag name='Chilli peppers'/>
              <ProTag name='Broccoli'/>
              <ProTag name='Watermelons'/>
              <ProTag name='Oranges'/>
              <ProTag name='Bananas'/>
              <ProTag name='Grapes'/>
              <ProTag name='Cherries'/>
              <ProTag name='Meat'/>
              <ProTag name='Seo tag'/>
              <ProTag name='Fish'/>
              <ProTag name='Seo tag'/>
              <ProTag name='Fresh food'/>
              <ProTag name='Lemons'/>


          </div>
      </div>
    </div>
  );
};

export default Footer;
