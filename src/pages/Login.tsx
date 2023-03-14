import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";
import img from "../assets/image/login.png";
import logo from "../assets/image/react.svg";

// flex items-center justify-center h-screen w-screen  bg-[#f8f7fa]

const LoginForm = () => {
  return (
    <>
      <div className="flex items-center justify-between h-screen w-screen bg-white">
        <div className="flex items-center justify-center bg-[#F8F7FA] ml-8 h-[92vh] w-[65vw] rounded-2xl">
          <img
            src={img}
            alt="img/loginAvatar"
            className="w-[32rem] h-[38rem]"
          />
        </div>
        <div className="flex items-center justify-start w-[30vw]">
          <div className="bg-white rounded p-5 ">
            <form action="">
              <div className="">
                <img
                  src={logo}
                  alt="logo/img"
                  className="mb-5 text-[#655BD3]"
                />
                <h1 className=" text-3xl text-slate-600 mb-2">
                  Welcome to Vuexy! 👋🏻
                </h1>
                <p className=" text-slate-500 mb-7">
                  Please sign-in to your account and start the adventure.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      required
                      className="border border-gray-400 outline-[#655BD3] w-full h-10 pl-3 rounded-md"
                    />
                    <label className="absolute transition-all duration-300 top-[50%] translate-y-[-60%] text-gray-500 left-[15px]">
                      Enter Email
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="password"
                      name="psw"
                      id="psw"
                      required
                      className="border border-gray-400 outline-[#655BD3] w-full h-10 pl-3 rounded-md"
                    />
                    <label className="absolute top-[50%] transition-all duration-300 translate-y-[-60%] text-gray-500 left-[15px]">
                      Enter Password
                    </label>
                  </div>
                </div>

                <p className="my-8 text-gray-500">
                  By creating an account you agree to our{" "}
                  <a href="#" className="text-[#655BD3]">
                    Terms & Privacy
                  </a>
                  .
                </p>
                <button
                  type="submit"
                  className="flex items-center justify-center bg-[#655BD3] text-white hover:bg-[#5147bb] transition-all duration-200 w-full h-10 rounded-md mb-8 text-sm uppercase tracking-wider"
                >
                  Login
                </button>
              </div>

              <div className="text-center mb-6">
                <p className="text-gray-500">
                  New on our platform?
                  <a href="#" className="text-[#655BD3]">
                    Create an account
                  </a>
                  .
                </p>
              </div>
            </form>
            <div className="flex items-center justify-between">
              <div className="h-[1px] w-[90%] bg-slate-300"></div>
              <div className="w-[20%] text-center">or</div>
              <div className="h-[1px] w-[90%] bg-slate-300"></div>
            </div>
            <div className="flex items-center justify-center gap-3 my-7">
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#E3E8F3] text-[#4267B2] ">
                <FaFacebookF className="text-xl" />
              </div>
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#FAE4E1] text-[#DD4B39]">
                <AiOutlineGoogle className="" />
              </div>
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#DCF0FC] text-[#1DA1F2]">
                <AiOutlineTwitter className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
