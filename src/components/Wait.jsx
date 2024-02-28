export default function Wait({ setShowLoad }) {
  return (
    <div className="w-screen h-screen bg-[#FFFFFF]">
      <div className="flex flex-col justify-center items-center gap-12 py-96">
        <div className="flex gap-1 justify-center  text-center  items-center">
          <img src="/logo.svg" alt="" className="w-10 h-10" />
          <img src="/Geld.svg" alt="" className="w-20 h-7" />
        </div>
        <div className="gap-1 flex flex-col  justify-center items-center">
          <span className="loading text-[#0166FF] loading-spinner loading-md"></span>
          <p className="text-[#0F172A] text-base not-italic font-semibold ">
            Түр хүлээнэ үү...
          </p>
        </div>
        <button onClick={() => setShowLoad("stepOne")}>gg</button>
      </div>
    </div>
  );
}
