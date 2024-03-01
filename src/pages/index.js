import LogIn from "@/components/LogIn";

import { useState } from "react";

export default function Page() {
  const [logIn, setLogIn] = useState("login");
  return (
    <div>
      <div className={`${logIn == "login" ? "block" : "hidden"}`}>
        <LogIn logIn={logIn} setLogIn={setLogIn} />
      </div>
    </div>
  );
}
