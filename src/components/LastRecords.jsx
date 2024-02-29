import { GrHomeRounded } from "react-icons/gr";
import { lastDrecord } from "@/pages/utils/lastDRecord";
import React from "react";

export default function LastRecord() {
  // {lastDrecord.map((e)=>{
  //     return
  // })}
  return (
    <div className="bg-white w-[1200px] rounded-2xl ">
      <div className="h-[56px] border-b border-[#E2E8F0] flex text-center items-center justify-between px-6 pt-1 ">
        <p className="text-[#0F172A] text-base not-italic font-semibold">
          Last Records
        </p>
      </div>
      <div className="px-6 flex flex-col justify-between ">
        {lastDrecord.map((e) => (
          <div className="flex  border-b border-[#E2E8F0] justify-between py-5">
            <div className="flex  text-center items-center space-x-4">
             {e.homeLogo}

              <div className="flex flex-col text-start">
                <p className="text-[#000000] font-normal text-base not-italic">
                  {e.categories}
                </p>
                <p className="font-normal not-italic text-xs">{e.hours}</p>
              </div>
            </div>

            <div className="text-[#84CC16]">{e.money}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
