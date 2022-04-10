import React from "react";

const Search = () => {
  return (
    <div className="border-[#D1D1D1] border-[1px] rounded-[12px]">
      
      <div className="px-4 py-2 flex">
        <div className="flex pr-7 border-[#D1D1D1] border-r-[1px]">
          <p className="font-bold font-poppins text-[15px]">All categories</p>
          <i className="fa-solid fa-angle-down text-[#6A983C] mt-1 pl-3 text-xs"></i>
        </div>
        <div>
        <input
          class="placeholder:text-[14px] placeholder:font-openSans placeholder:text-slate-400 block placeholder:pl-6  w-[262px] focus:outline-none  focus:ring-[#D1D1D1]-500 focus:ring-1 sm:text-sm"
          placeholder="Search Products, categories ..."
          type="text"
          name="search"
        />
        </div>
        <div>
          <i className="fa-solid fa-magnifying-glass pl-4"></i>
        </div>
      </div>
    </div>
  );
};

export default Search;
