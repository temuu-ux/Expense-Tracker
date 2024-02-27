import { BsPlusLg } from "react-icons/bs";

export default function Header() {
  return (
    <div className="w-[1440px] flex justify-between  m-auto  space-y-1 py-1 px-32">
      <div className="flex gap-6  items-center ">
        <img src="/logo.svg" alt="" />
        <p className="text-slate-900 btn btn-ghost">Dashboard</p>
        <p className="text-gray-500 btn btn-ghost">Record</p>
      </div>
      <div className="flex gap-6 items-center ">
        <button className="btn flex items-center justify-center gap-1 bg-[#0166FF] text-[#FFFFFF] rounded-2xl px-3 h-6  border-none">
          <BsPlusLg className="w-4 h-4" />
          <p className="text-xs not-italic font-normal "> Record</p>
        </button>

        <img src="/Avatar.svg" alt="" />
      </div>
    </div>
  );
}
