import Link from "next/link";

export default function StepThree({ setShowLoad }) {
  return (
    <div>
      <div className="flex flex-col gap-36 w-screen h-screen">
        <div className="flex  flex-col pt-10 gap-12  items-center">
          <div className="flex gap-2 justify-center items-center ">
            <img src="/logo.svg" alt="" className="w-5 h-5 " />
            <img src="/Geld.svg" alt="" className="w-12 h-4" />
          </div>
          <ul className="steps w-[270px]">
            <li className="step step-accent">Currency</li>
            <li className="step step-accent">Balance</li>
            <li className="step step-accent">Finish</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col justify-center text-center items-center gap-6 ">
            <div className="flex flex-col  space-y-4 items-center w-[384px]">
              <img src="/done.svg" alt="" className="w-12 h-12" />
              <h1 className="text-2xl text-[#0F172A] font-semibold not-italic">
                Good Job!
              </h1>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <p className="w-[384px] flex text-start text-xs not-italic font-normal text-[#475569] ">
              Your very first account has been created. Now continue to
              dashboard and start tracking
            </p>
            <Link href={"/dashboard"}>
              <button className="btn rounded-3xl w-[384px] bg-[#0166FF] text-[#FFFFFF] text-sm not-italic font-normal">
                Go to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
