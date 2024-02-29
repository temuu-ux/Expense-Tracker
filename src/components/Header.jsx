import { BsPlusLg } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-[1440px] flex justify-between  m-auto  space-y-1 py-1  px-32">
      <div className="flex gap-6  items-center ">
        <img src="/logo.svg" alt="" />
        <Link href={"/"}>
          <p className="text-gray-500 btn btn-ghost hover:text-slate-900">
            Dashboard
          </p>
        </Link>
        <Link href={"/record"}>
          <p className="text-gray-500 btn btn-ghost">Record</p>
        </Link>
      </div>
      <div className="flex gap-6 items-center ">
        <button className="bt h-7  flex items-center justify-center gap-1 hover:bg-blue-900 ease-in-out duration-500 hover:scale-105 bg-[#0166FF] shadow-xl hover:shadow-2xl text-[#FFFFFF] rounded-3xl px-3 border-none">
          <BsPlusLg className="w-4 h-4" />
          <p className="text-sm not-italic font-normal "> Record</p>
        </button>

        <img
          src="/Avatar.svg"
          alt=""
          className="hover:scale-110 duration-500 ease-in-out"
        />
      </div>
    </div>
  );
}
