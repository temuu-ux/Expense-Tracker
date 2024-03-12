import Link from "next/link";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField } from "@mui/material";
import Router from "next/router";

export default function SignUp({ setShowLoad }) {
  const BE_URL = "http://localhost:4000/add";
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [name, errorName] = useState(false);
  const [email, errorEmail] = useState(false);
  const [password, errorPassword] = useState(false);
  const [rePassword, errorrePassword] = useState(false);

  async function errorHandler() {
    //
    // if (
    //   name == userName &&
    //   email == userEmail &&
    //   password == userPassword &&
    //   rePassword == userPassword
    // ) {
    //   SubmitHandler();
    // }
    if (name == "" || email == "" || password != rePassword) {
      return (
        errorName(true),
        errorEmail(true),
        errorPassword(true),
        errorrePassword(true)
      );
    }
  }

  async function SubmitHandler() {
    // e.preventDefault(); preventDefault from toi hereglen
    const data = {
      name: userName,
      email: userEmail,
      password: userPassword,
      id: uuidv4(),
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setShowLoad("loading");
    console.log(data);
  }

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
              <TextField
                type="name"
                placeholder="Name"
                name="name"
                id="name"
                error={name}
                required
                className="input input-bordered w-full max-w-xs  text-black border-[#D1D5DB]"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <TextField
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                // variant="outlined"
                required
                error={email}
                className="input input-bordered w-full max-w-xs h-12 text-black border-[#D1D5DB]"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
              <TextField
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                variant="outlined"
                error={password}
                required
                className="input input-bordered w-full max-w-xs  text-black border-[#D1D5DB]"
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
              />
              <TextField
                type="password"
                placeholder="Re-Password"
                error={rePassword}
                required
                className="input input-bordered w-full max-w-xs  text-black border-[#D1D5DB] "
              />
            </div>

            <button
              className="btn bg-[#0166FF] w-[325px] text-[#FFFFFF] rounded-3xl"
              onClick={errorHandler}
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
