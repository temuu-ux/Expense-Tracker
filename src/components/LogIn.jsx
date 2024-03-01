import Layout from "@/components/layout";
import Link from "next/link";
import Router from "next/router";
export default function LogIn({ setLogIn }) {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 bg-[#FFFFFF] flex justify-center items-center  pl-[422px] pr-[126px]">
        <div className="flex flex-col gap-10 w-[384px]">
          <div className="flex gap-1 justify-center items-center">
            <img src="/logo.svg" alt="" className="w-5 h-5 " />
            <img src="/Geld.svg" alt="" className="w-12 h-4" />
          </div>
          <div className="text-center flex flex-col gap-2  ">
            <h1 className="font-semibold text-2xl not-italic text-[#0F172A]">
              Welcome Back
            </h1>
            <p className="text-[#334155] text-base font-normal not-italic">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs text-black border-[#D1D5DB] bg-[#F3F4F6]"
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs  text-black border-[#D1D5DB] bg-[#F3F4F6]"
            />

            <button
              // onClick={() => {
              //   setLogIn("loading");
              // }}
              onClick={() => {
                Router.push("/dashboard");
              }}
              className="btn bg-[#0166FF] w-[325px] text-[#FFFFFF] rounded-3xl"
            >
              Log in
            </button>
          </div>
          <div className="flex justify-center  text-center items-center">
            <p className="text-[#0F172A] text-base not-italic font-normal">
              Don’t have account?
            </p>
            <Link href={"/sign"}>
              <p className="px-2 text-[#0166FF] text-base not-italic font-normal">
                Sign up
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-[#0166FF] "></div>
    </div>
  );
}
// Page.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       <Page>{page}</Page>
//     </Layout>
//   );
// };
