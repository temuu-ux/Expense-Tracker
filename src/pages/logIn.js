import LogIn from "@/components/LogIn";
import Wait from "@/components/Wait";
import Step from "@/components/Step1";
import StepTwo from "@/components/Step2";
import StepThree from "@/components/Step3";
import { useState } from "react";

export default function Page() {
  const [logIn, setLogIn] = useState("login");
  return (
    <div>
      <div className={`${logIn == "login" ? "block" : "hidden"}`}>
        <LogIn logIn={logIn} setLogIn={setLogIn} />
      </div>
      {/* <div className={`${logIn == "loading" ? "block" : "hidden"}`}>
        <Wait logIn={logIn} setLogIn={setLogIn} />
      </div>
      <div className={`${logIn == "stepOne" ? "block" : "hidden"}`}>
        <Step logIn={logIn} setLogIn={setLogIn} />
      </div>
      <div className={`${logIn == "stepTwo" ? "block" : "hidden"}`}>
        <StepTwo logIn={logIn} setLogIn={setLogIn} />
      </div>
      <div className={`${logIn == "stepThree" ? "block" : "hidden"}`}>
        <StepThree />
      </div> */}
    </div>
  );
}
