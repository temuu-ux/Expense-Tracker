export default function Step({ setShowLoad }) {
  return (
    <div>
      <div className="flex flex-col gap-36 w-screen h-screen">
        <div className="flex  flex-col pt-10 gap-12  items-center">
          <div className="flex gap-2 justify-center items-center ">
            <img src="/logo.svg" alt="" className="w-5 h-5 " />
            <img src="/Geld.svg" alt="" className="w-12 h-4" />
          </div>
          <ul className="steps w-[270px]">
            <li className="step step-accent ">Currency</li>
            <li className="step ">Balance</li>
            <li className="step">Finish</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col justify-center text-center items-center gap-6 ">
            <div className="flex flex-col  space-y-4 items-center w-[384px]">
              <img src="/frame.svg" alt="" className="w-12 h-12" />
              <h1 className="text-2xl text-[#0F172A] font-semibold not-italic">
                Select base currency
              </h1>
            </div>
            <select className="select select-bordered  max-w-xs bg-[#F3F4F6] text-[#1F2937] text-base not-italic font-semibold w-[384px]">
              <option disabled selected>
                Choose value
              </option>
              <option>MNT - Mongolian Tugrik</option>
              <option>GBP - British Pound Sterling</option>

              <option>USD - United States Dollar</option>
              <option>EUR - Eurozone countries</option>
            </select>
            <p className="w-[384px] flex text-start text-xs not-italic font-normal text-[#475569] ">
              Your base currency should be the one you use most often. All
              transaction in other currencies will be calculated based on this
              one
            </p>
            <button
              className="btn rounded-3xl w-[384px] bg-[#0166FF] text-[#FFFFFF] text-sm not-italic font-normal"
              onClick={() => {
                setShowLoad("stepTwo");
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
