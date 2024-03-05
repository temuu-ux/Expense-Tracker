import { category } from "@/pages/utils/lastDRecord";
import Modal from "./Modal";
import React, { useState } from "react";

export function Option() {
  const [color, setColor] = useState("blue");
  const [valueD, setValueD] = useState("Home");
  const handleGetValueD = (valueD) => {
    setValueD(valueD);
    console.log(valueD);
  };
  return (
    // <select className="select select-bordered w-full  text-[#94A3B8] text-base font-normal not-italic bg-[#F9FAFB]">
    //   <option disabled selected className="">
    //     Choose
    //   </option>
    //   {category.map((e) => {
    //     return <option>{e.cateName}</option>;
    //   })}
    // </select>
    <div className="dropdown select  w-full   text-[#94A3B8] text-base font-normal not-italic bg-[#F9FAFB] ">
      <div
        tabIndex={0}
        role="button"
        className="btn selected max-w-full w-full bg-[#F9FAFB] border-none text-center flex justify-start text-[#94A3B8] "
      >
        Choose
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1]  menu p-2 rounded-box bg-[#FFFFFF] max-w-full w-full shadow   overflow-scroll "
        style={{ maxHeight: "200px" }}
      >
        <li className="overflow-auto ">
          {category.map((e) => {
            return (
              <a
                className="flex flex-col justify-center items-start "
                onClick={() => {
                  handleGetValueD(`${e.cateName}`);
                }}
              >
                <div className="flex text-center gap-2 py-2 px-2 ">
                  <p>{e.logo}</p>
                  <p className="text-[#000000] py-0.5 text-base not-italic font-normal">
                    {e.cateName}
                  </p>
                </div>
              </a>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export function Option2() {
  return (
    <select className="select select-bordered  max-w-xs w-[168px] text-[#0F172A] text-base font-normal not-italic bg-[#F9FAFB]">
      <option disabled selected>
        Oct 30, 2023
      </option>
      <option>Oct 29, 2023</option>
      <option>Oct 28, 2023</option>
    </select>
  );
}
export function Option3() {
  return (
    <select className="select select-bordered max-w-xs w-[168px] text-[#0F172A]] text-base font-normal not-italic bg-[#F9FAFB]">
      <option disabled selected>
        4:15 PM
      </option>
      <option>3:32 PM</option>
      <option>9:23 AM</option>
    </select>
  );
}

export function Option4() {
  return (
    <select className="select select-bordered max-w-xs w-full text-[#94A3B8] text-base font-normal not-italic bg-[#F9FAFB]">
      <option disabled selected>
        Write here
      </option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
  );
}
