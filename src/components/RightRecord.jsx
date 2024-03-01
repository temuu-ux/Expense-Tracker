import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { lastDrecord2, lastDrecord3 } from "@/pages/utils/lastDRecord";

export default function RightRecord() {
  return (
    <div className="w-[894px] flex flex-col py-4  px-6 gap-6">
      <div className="flex justify-between w-[894px] pb-1">
        <div className="flex items-center gap-3 justify-center ">
          <button className="bg-[#E5E7EB] w-6 h-6 rounded-lg p-1 hover:bg-gray-400 && duration-500 && ease-in-out">
            <MdKeyboardArrowLeft />
          </button>
          <p className="font-base not-italic font-normal"> Last 30 Days</p>
          <button className="bg-[#E5E7EB] w-6 h-6 rounded-lg p-1 hover:bg-gray-400 && duration-500 && ease-in-out">
            <MdKeyboardArrowRight />
          </button>
        </div>
        <button className="btn bg-[#F9FAFB]">Newest fisrt</button>
      </div>
      <div className="flex  justify-between bg-[#FFFFFF] rounded-xl border-solid-1 border-[#E5E7EB] px-6 py-2 items-center w-[894px]">
        <label className=" cursor-pointer items-center flex space-x-2 ">
          <input type="checkbox" defaultChecked className="checkbox" />
          <span className="label-text">Select All</span>
        </label>
        <p className="text-[#94A3B8] ">- 35,500₮</p>
      </div>
      <div>
        <h1>Today</h1>
        {lastDrecord2.map((e) => {
          return (
            <div className="py-2 w-[894px] ">
              <div className="flex bg-[#FFFFFF] rounded-xl border-b border-[#E2E8F0] justify-between px-6 py-3 ">
                <div className="flex  text-center items-center space-x-4">
                  {e.input}
                  {e.homeLogo}

                  <div className="flex flex-col text-start">
                    <p className="text-[#000000] font-normal text-base not-italic">
                      {e.categories}
                    </p>
                    <p className="font-normal not-italic text-xs">{e.hours}</p>
                  </div>
                </div>
                <div className=" text-center">{e.money}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Yesterday</h1>
        {lastDrecord3.map((e) => {
          return (
            <div className="py-2 w-[894px] ">
              <div className="flex bg-[#FFFFFF] rounded-xl border-b border-[#E2E8F0] justify-between px-6 py-3 ">
                <div className="flex  text-center items-center space-x-4">
                  {e.input}
                  {e.homeLogo}

                  <div className="flex flex-col text-start">
                    <p className="text-[#000000] font-normal text-base not-italic">
                      {e.categories}
                    </p>
                    <p className="font-normal not-italic text-xs">{e.hours}</p>
                  </div>
                </div>
                <div className=" text-center">{e.money}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
