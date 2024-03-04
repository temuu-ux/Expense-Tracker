import { BsPlusLg } from "react-icons/bs";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "./Modal";
export default function Header() {
  const [dash, setDash] = useState("Dashboard");
  return (
    <div className="w-[1440px] flex justify-between  m-auto  space-y-1 py-1  px-32">
      <div className="flex gap-6  items-center ">
        <img src="/logo.svg" alt="" />
        <Link href={"/dashboard"}>
          <button
            className={` btn bg-[white] shadow-none border-0 ${
              dash == "Dashboard" ? "text-slate-900" : "text-gray-500"
            }`}
            onClick={() => {
              setDash("Dashboard");
            }}
          >
            Dashboard
          </button>
        </Link>
        <Link href={"/record"}>
          <button
            className={`btn bg-[white] shadow-none border-0 ${
              dash == "Record" ? "text-slate-900" : "text-gray-500"
            }`}
            onClick={() => {
              setDash("Record");
            }}
          >
            Record
          </button>
        </Link>
      </div>
      <div className="flex gap-6 items-center ">
        <button
          className="bt h-7  flex items-center justify-center gap-1 hover:bg-blue-900 ease-in-out duration-500 hover:scale-105 bg-[#0166FF] shadow-xl hover:shadow-2xl text-[#FFFFFF] rounded-3xl px-3 border-none"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <p className="text-sm not-italic font-normal flex text-center items-center gap-1">
            <BsPlusLg className="w-4 h-4" /> Record
          </p>
        </button>
        <Modal />
        <img
          src="/Avatar.svg"
          alt=""
          className="hover:scale-110 duration-500 ease-in-out"
        />
      </div>
    </div>
  );
}
