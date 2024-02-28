import { useState } from "react";
import Wait from "@/components/Wait";
import SignUp from "@/components/SignUp";
import Step from "@/components/Step1";
import StepTwo from "@/components/Step2";
import StepThree from "@/components/Step3";

export default function Page() {
  const [showLoad, setShowLoad] = useState("signup");

  return (
    <div>
      <div className={`${showLoad == "signup" ? "block" : "hidden"}`}>
        <SignUp showLoad={showLoad} setShowLoad={setShowLoad} />
      </div>
      <div className={`${showLoad == "loading" ? "block" : "hidden"}`}>
        <Wait showLoad={showLoad} setShowLoad={setShowLoad} />
      </div>
      <div className={`${showLoad == "stepOne" ? "block" : "hidden"}`}>
        <Step showLoad={showLoad} setShowLoad={setShowLoad} />
      </div>
      <div className={`${showLoad == "stepTwo" ? "block" : "hidden"}`}>
        <StepTwo showLoad={showLoad} setShowLoad={setShowLoad} />
      </div>
      <div className={`${showLoad == "stepThree" ? "block" : "hidden"}`}>
        <StepThree />
      </div>
    </div>
  );
}
