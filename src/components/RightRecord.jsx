import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function RightRecord() {
  return (
    <div className="w-[894px] ">
      <div>
        <div className="flex">
          <button>
            <MdKeyboardArrowLeft />
          </button>
          <p> Last 30 Days</p>
          <button>
            <MdKeyboardArrowRight />
          </button>
        </div>
        <div>
          <button className="btn">Newest fisrt</button>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
