import { BsGear, BsPlusLg } from "react-icons/bs";
import { HiMiniEye } from "react-icons/hi2";
import { IoMdArrowDropright } from "react-icons/io";
import { Type, Category } from "@/pages/utils/typeCateData";
import CateModal from "./CateModal";
import Modal from "./Modal";
import { RangeSlider } from "./Slider";
import React, { useState } from "react";

//
import { Input } from "./Input";
import { Option, Option4 } from "./Option";

import { Daypicker, Timepicker } from "./Daypicker";

export default function Record() {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("blue");

  const handleClose = () => {
    setVisible(false);
  };

  const handleOpen = () => {
    setVisible(true);
  };
  return (
    <>
      <div className=" w-[282px]  bg-[#FFFFFF] px-2 py-6 flex flex-col gap-8 items-start  rounded-xl relative">
        <div>
          <div className="w-[250px] h-[88px] flex flex-col gap-6">
            <h1 className=" text-[#000000] text-2xl font-semibold not-italic">
              Records
            </h1>

            <button
              className="btn  h-8 bg-[#0166FF] rounded-3xl text-[#FFFFFF] "
              onClick={() => {
                handleOpen();
              }}
            >
              <BsPlusLg /> Add
            </button>
          </div>
        </div>
        <div className="bg-gray-100 w-[250px] h-8  rounded-lg border border-gray-300 justify-start items-center inline-flex">
          <input
            type="search"
            placeholder="Search"
            className="bg-gray-100 w-[254px] h-8 border rounded-lg p-1 text-neutral-700 text-base font-normal "
          />
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="text-[#1F2937] text-base not-italic font-semibold">
            Types
          </h1>
          {Type.map((e) => (
            <div>
              <div className="text-center ">
                <label className=" cursor-pointer flex gap-2 items-center">
                  <input
                    type="radio"
                    name="theme-radios"
                    className="radio theme-controller w-4 h-4"
                    value="retro"
                  />
                  <p className="text-[#1F2937] text-base not-italic font-normal">
                    {e.typeName}
                  </p>
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-[250px] gap-1 space-y-4">
          <div className="flex justify-between">
            <h1 className="text-[#1F2937] text-base not-italic font-semibold">
              Category
            </h1>
            <button className="text-gray-200 rounded-3xl">Clear</button>
          </div>
          {Category.map((e) => {
            return (
              <div>
                <div className="flex items-center justify-between ">
                  <div className="flex text-center items-center gap-2">
                    <HiMiniEye className="text-[#94A3B8] w-5 h-5" />
                    <div className="text-[#1F2937] text-base not-italic font-normal">
                      <details className="dropdown">
                        <summary className="flex flex-col">
                          {" "}
                          {e.cateName}
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                          <li>
                            <a>Item 1</a>
                          </li>
                          <li>
                            <a>Item 2</a>
                          </li>
                        </ul>
                      </details>
                    </div>
                  </div>
                  <IoMdArrowDropright className="w-5 h-5 " />
                </div>
              </div>
            );
          })}

          <div>
            <CateModal />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1F2937] text-base not-italic font-semibold">
            Amount Range
          </h1>

          <RangeSlider />
        </div>
      </div>
      {visible && (
        <div className=" max-w-[792px] p-1 bg-[#FFFFFF] max-h-[580px] overflow-hidden absolute backdrop-blur-sm  bg-[#00000080] ">
          <div className="flex justify-between items-center">
            {" "}
            <h3 className="font-semibold not-italic text-xl p-5">Add Record</h3>
            <button
              className="btn  btn-ghost text-[#0F172A] w-6 h-6 text-center"
              onClick={() => handleClose()}
            >
              ✕
            </button>
          </div>
          <div className="border-t border-[#E2E8F0] flex justify-center ">
            <div className="py-5 px-6 w-[396px] gap-4 flex flex-col">
              <div className="flex bg-[#F3F4F6] rounded-3xl">
                <button
                  className={` rounded-3xl  w-[172px] h-[40px] ${
                    color == "blue"
                      ? "bg-[#0166FF] text-[#F9FAFB] "
                      : "bg-[#F3F4F6]  text-[#1F2937]"
                  }`}
                  onClick={() => {
                    setColor("blue");
                  }}
                >
                  Expense
                </button>
                <button
                  className={` rounded-3xl w-[172px] h-[40px] ${
                    color == "green"
                      ? "bg-[#16A34A] text-[#F9FAFB]"
                      : "bg-[#F3F4F6] text-[#1F2937]"
                  }`}
                  onClick={() => {
                    setColor("green");
                  }}
                >
                  Income
                </button>
              </div>
              <div className="flex flex-col gap-5 ">
                <div className="bg-[#F3F4F6] rounded-2xl w-full px-2 flex flex-col justify-center h-[76px]">
                  <p className="text-base font-normal not-italic px-6 ">
                    Amount
                  </p>
                  <Input />
                </div>

                <div className="">
                  <p className="text-base not-italic font-normal p-1 ">
                    Category
                  </p>
                  <div className=" ">
                    {" "}
                    <Option />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[168px]">
                    <p className="text-base not-italic font-normal p-1">Date</p>
                    <Daypicker />
                  </div>
                  <div className="w-[168px]">
                    <p className="text-base not-italic font-normal p-1">Time</p>
                    <Timepicker />
                  </div>
                </div>
                <button
                  onClick={() => {
                    setColor("blue");
                  }}
                  className={`btn h-8  rounded-3xl ${
                    color == "blue"
                      ? "bg-[#0166FF] text-[#FFFFFF] "
                      : "bg-[#16A34A] text-[#F9FAFB]"
                  }`}
                >
                  Add Record
                </button>
              </div>
            </div>
            <div className="pt- pb-6 px-6 w-[396px] flex flex-col gap-8">
              <div>
                <p className="text-base not-italic font-normal p-1">Payee</p>
                <Option4 />
              </div>
              <div>
                <p>Note</p>
                <textarea
                  placeholder="Write here"
                  className="textarea textarea-bordered border-none textarea-lg w-full min-h-[280px] max-w-xs"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
