import { BsPlusLg } from "react-icons/bs";
import { HiMiniEye } from "react-icons/hi2";
import { IoMdArrowDropright } from "react-icons/io";
import { Type, Category } from "@/pages/utils/typeCateData";
import CateModal from "./CateModal";
import Modal from "./Modal";
import { RangeSlider } from "./Slider";
import React, { useState } from "react";
import { Input } from "./Input";
import { Option, Option4 } from "./Option";
import { Daypicker, Timepicker } from "./Daypicker";

export default function Record() {
  const [visible, setVisible] = useState(false);
  const [cateVisible, setCateVisible] = useState(false);
  const [color, setColor] = useState("blue");

  const handleClose = () => {
    setVisible(false);
  };

  const handleOpen = () => {
    setVisible(true);
  };
  const cateOpen = () => {
    setCateVisible(true);
  };
  const cateClose = () => {
    setCateVisible(false);
  };
  return (
    <>
      <div
        className={` w-[282px]  bg-[#FFFFFF] px-2 py-6 flex flex-col gap-8 items-start  rounded-xl relative `}
      >
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

          <div className="">
            <button
              className="flex items-center gap-2 text-[#1F2937] text-base not-italic font-normal "
              onClick={() => {
                cateOpen();
              }}
            >
              <BsPlusLg className="text-[#0166FF] w-5 h-5 " /> Add Category
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1F2937] text-base not-italic font-semibold">
            Amount Range
          </h1>

          <RangeSlider />
        </div>
      </div>

      <div>
        {/* small modal */}
        {/* drill method */}
        {cateVisible && (
          <div>
            <CateModal cateClose={cateClose} />
          </div>
        )}
      </div>

      {/* tom modal */}
      {visible && <Modal handleClose={handleClose} />}
    </>
  );
}
