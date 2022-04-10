import React from "react";

import Freshnesecom from "../atoms/images/Freshnesecom.svg";

import HeaderName from "../atoms/HeaderName";
import IconBasket from "../atoms/IconBasket";
import Search from "../atoms/Search";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between py-4 border-b-[1px]">
        <div className="flex ">
          <HeaderName name="Chat with us" />
          <div className="px-8">
            <HeaderName name="+420 336 775 664" />
          </div>

          <HeaderName name="info@freshsecom.com" />
        </div>
        <div className="flex">
          <HeaderName name="Blog" />
          <div className="px-8">
            <HeaderName name="About us" />
          </div>
          <HeaderName name="Careers" />
        </div>
      </div>

      <div className="py-10 flex justify-between">
        <div className="mt-3">
          <img src={Freshnesecom} alt="Freshnesecom" />
        </div>
        <div>
            <Search/>
        </div>
        <div className="flex">
          <i className="fa-solid fa-user text-2xl pr-10"></i>
          <div>
            <IconBasket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
