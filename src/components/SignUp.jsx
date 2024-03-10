import Link from "next/link";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function SignUp({ setShowLoad }) {
  // const BE_URL
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const SubmitHandler = async () => {
    e.preventHandler();

    const data = {
      name: userName,
      email: userEmail,
      password: userPassword,
      id: uuidv4(),
    };

    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    body: JSON.stringify(data);
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 bg-[#FFFFFF] flex justify-center items-center  pl-[422px] pr-[126px]">
        <div className="flex flex-col gap-10 w-[384px] ">
          <div className="flex gap-2 justify-center items-center">
            <img src="/logo.svg" alt="" className="w-5 h-5 " />
            <img src="/Geld.svg" alt="" className="w-12 h-4" />
          </div>
          <div className="text-center flex flex-col gap-2  ">
            <h1 className="font-semibold text-2xl not-italic text-[#0F172A]">
              Create Geld account
            </h1>
            <p className="text-[#334155] text-base font-normal not-italic">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 items-center">
            <div className="flex flex-col justify-center gap-4 items-center w-[354px] [&_input]:bg-[#F3F4F6]">
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                className="input input-bordered w-full max-w-xs  text-black border-[#D1D5DB]"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                required
                className="input input-bordered w-full max-w-xs text-black border-[#D1D5DB]"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                required
                className="input input-bordered w-full max-w-xs  text-black border-[#D1D5DB]"
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Re-Password"
                required
                className="input input-bordered w-full max-w-xs  text-black border-[#D1D5DB] "
              />
            </div>

            <button
              className="btn bg-[#0166FF] w-[325px] text-[#FFFFFF] rounded-3xl"
              onClick={() => {
                setShowLoad("loading");
              }}
            >
              Sign up
            </button>
          </div>
          <div className="flex justify-center  text-center items-center">
            <p className="text-[#0F172A] text-base not-italic font-normal">
              Already have account?
            </p>
            <Link href={"/"}>
              <p className="px-2 text-[#0166FF] text-base not-italic font-normal">
                Log in
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-[#0166FF] "></div>
    </div>
  );
}
