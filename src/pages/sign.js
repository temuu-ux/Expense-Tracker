import { useState } from "react";
import Wait from "@/components/Wait";
import SignUp from "@/components/SignUp";

export default function Page() {
  const [showLoad, setShowLoad] = useState("signup");
  return (
    <div>
      <div className={`${showLoad == "signup" ? "block" : "hidden"}`}>
        <SignUp showLoad={showLoad} setShowLoad={setShowLoad} />
      </div>
      <div className={`${showLoad == "loading" ? "block" : "hidden"}`}>
        <Wait />
      </div>
    </div>
  );
}
