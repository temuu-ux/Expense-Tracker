import LogIn from "@/components/LogIn";
import Wait from "@/components/Wait";
import { useState } from "react";

export default function Page() {
  const [wait, setWait] = useState("login");
  return (
    <div>
      <div className={`${wait == "login" ? "block" : "hidden"}`}>
        <LogIn wait={wait} setWait={setWait} />
      </div>
      <div className={`${wait == "loading" ? "block" : "hidden"}`}>
        <Wait />
      </div>
    </div>
  );
}
