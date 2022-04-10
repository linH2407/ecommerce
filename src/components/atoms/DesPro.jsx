import React, { useState } from "react";
import BorderRight from "./BorderRight";
import IconStar from "./IconStar";
import NameDes from "./NameDes";
import NamePro from "./NamePro";

const DesPro = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [toggle, setToggle] = useState(1);
  const handleToggle = (index) => {
    setToggle(index);
  };

  return (
    <div>
      <NamePro name="Carrots from Tomissy Farm" />
      <div className="flex">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                className="hidden"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <IconStar
                color={ratingValue <= (hover || rating) ? "#FDBC15" : "#d1d1d1"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <div className="pr-11">
        <p className="text-[17px] font-openSans py-10 ">
          Carrots from Tomissy Farm are one of the best on the market. Tomisso
          and his family are giving a full love to his Bio products. Tomisso’s
          carrots are growing on the fields naturally.
        </p>
      </div>

      <div className="flex justify-between pr-20">
        <div className="flex gap-10">
          <div>
            <NameDes name="SKU" />
            <NameDes name="Category" />
            <NameDes name="Stock" />
            <NameDes name="Farm" />
          </div>
          <div>
            <p className="pb-3 text-[14px] font-openSans">76645</p>
            <p className="pb-3 text-[14px] font-openSans underline underline-offset-1">
              Vegetables
            </p>
            <p className="pb-3 text-[14px] font-openSans underline underline-offset-1 text-[#6A983C]">
              In Stock
            </p>
            <p className="pb-3 text-[14px] font-openSans">
              Grocery Tarm Fields
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <div>
            <NameDes name="Freshness" />
            <NameDes name="Buy by" />
            <NameDes name="Delivery" />
            <NameDes name="Delivery area" />
          </div>
          <div>
            <p className="pb-3 text-[14px] font-openSans">1 days old</p>
            <p className="pb-3 text-[14px] font-openSans">
              pcs, kgs, box, pack
            </p>
            <p className="pb-3 text-[14px] font-openSans">in 2 days</p>
            <p className="pb-3 text-[14px] font-openSans">Czech republic</p>
          </div>
        </div>
      </div>
      <div className=" flex gap-[100px] border border-[#f5f5f5] rounded-[12px] mt-9 mr-20">
        <div className="py-4 pl-7">
          <p className="text-[#6A983C] text-[26px] font-poppins font-semibold">
            36.23 USD
          </p>

          <p className="text-[#a9a9a9] text-[12px] font-poppins font-semibold line-through">
            48.56 USD
          </p>
        </div>
        <div className="flex gap-7">
          <div className="py-5">
            <div className="border border-[#d1d1d1] rounded-[12px] bg-[#f9f9f9] ">
              <div className="py-3 flex">
                <div className="border-r  ">
                  <p className="px-4 text-[14px] font-openSans text-[#d1d1d1]">
                    1
                  </p>
                </div>
                <div className="flex gap-[6px] px-4">
                  <p className="text-[12px] font-semibold font-poppins">Pcs</p>
                  <i className="fa-solid fa-angle-down text-[10px] pt-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="border-[2px] border-[#46760a] rounded-[12px] bg-[#6a983c]">
              <button
                type="button"
                className="text-white font-poppins text-[14px] font-bold py-[11px] px-4 "
              >
                <i class="fa-solid fa-plus"></i> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7 flex gap-[7px]">
        <i className="fa-regular fa-heart text-[#e6704b] text-[13px] pt-[5px]"></i>
        <p className="text-15px font-poppins font-bold">Add to my wish list</p>
      </div>
      <div>
        <div>
          <div className="flex justify-between mr-20 pb-2 pt-8">
            <button
              className={toggle === 1 ? "border-b border-[#6A983C] " : ""}
              onClick={() => handleToggle(1)}
            >
              <span className="text-[18px] font-poppins font-semibold ">
                Description
              </span>
            </button>
            <button
              className={toggle === 2 ? "border-b border-[#6A983C]" : ""}
              onClick={() => handleToggle(2)}
            >
              <div className="flex">
                <span className="text-[18px] font-poppins font-semibold pr-2">
                  Reviews
                </span>
                <div>
                  <span className="text-[12px] text-[#6A983C] font-poppins font-semibold px-2 bg-[#F4F8EC] rounded-[12px]">
                    18
                  </span>
                </div>
              </div>
            </button>
            <button
              className={toggle === 3 ? "border-b border-[#6A983C]" : ""}
              onClick={() => handleToggle(3)}
            >
              <div className="flex">
                <span className="text-[18px] font-poppins font-semibold pr-2">
                  Questions
                </span>
                <div>
                  <span className="text-[12px] text-[#6A983C] font-poppins font-semibold px-2 bg-[#F4F8EC] rounded-[12px]">
                    4
                  </span>
                </div>
              </div>
            </button>
          </div>
          <div className="">
            <div className="pt-8">
              <div className={toggle === 1 ? "block" : "hidden"}>
                <div>
                  <p className="font-poppins text-[15px] font-medium">
                    Origins
                  </p>
                  <p className="text-[14px] font-openSans pt-2 pb-8">
                    We work hard to ensure that the fruit and vegetables we sell
                    are fresh and high in quality. If we don’t grow them
                    ourselves, we source them from carefully chosen suppliers,
                    preferring to buy locally whenever possible.
                  </p>
                </div>
                <div>
                  <p className="font-poppins text-[15px] font-medium">
                    How to cook
                  </p>
                  <p className="text-[14px] font-openSans pt-2 pb-8">
                    From roasts, salads and soups to casseroles and cakes,
                    Carrots will lend sweetness, texture and colour to an
                    enormous number of recipes.
                  </p>
                </div>
                <div className="">
                  <p className="font-poppins text-[15px] font-medium">
                    Full of Vitamins!
                  </p>

                  <div className="pt-5">
                    <table className="table-auto w-full">
                      <thead>
                        <tr className="text-[12px] font-poppins font-semibold text-left border-b">
                          <th>Vitamins</th>
                          <th>Quantity</th>
                          <th>% DV</th>
                        </tr>
                      </thead>
                      <tbody className="text-[14px] font-openSans text-[#575757] leading-10">
                        <tr>
                          <td>Vitamin A equiv.</td>
                          <td>735 μg</td>
                          <td>104 %</td>
                        </tr>
                        <tr>
                          <td>Thiamine (B1)</td>
                          <td>0.066 mg</td>
                          <td>6 %</td>
                        </tr>
                        <tr>
                          <td>Niacin (B3)</td>
                          <td>0.983 mg</td>
                          <td>7 %</td>
                        </tr>
                        <tr>
                          <td>Folate (Bg)</td>
                          <td>19 μg</td>
                          <td>5 %</td>
                        </tr>
                        <tr>
                          <td>Vitamin C</td>
                          <td>5.9 mg</td>
                          <td>7 %</td>
                        </tr>
                        <tr>
                          <td>Vitamin E</td>
                          <td>0.66 mg</td>
                          <td>4 %</td>
                        </tr>
                        <tr>
                          <td>Vitamin K</td>
                          <td>13.2</td>
                          <td>13 %</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className={toggle === 2 ? "block" : "hidden"}>
                <p className="font-poppins text-[15px] font-medium">hi</p>
              </div>

              <div className={toggle === 3 ? "block" : "hidden"}>
                <p className="font-poppins text-[15px] font-medium">he</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesPro;
