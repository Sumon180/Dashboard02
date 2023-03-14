import { BsChevronLeft } from "react-icons/bs";
import img from "../assets/image/forgot.png";
import logo from "../assets/image/react.svg";

const ForgotPassword = () => {
  return (
    <>
      <div className="flex items-center justify-between h-screen w-screen bg-white">
        <div className="flex items-center justify-center bg-[#F8F7FA] ml-8 h-[92vh] w-[75vw] rounded-2xl">
          <img
            src={img}
            alt="img/loginAvatar"
            className="w-[25rem] h-[38rem]"
          />
        </div>
        <div className="">
          <div className="bg-white rounded mx-20">
            <form action="">
              <div className="">
                <img
                  src={logo}
                  alt="logo/img"
                  className="mb-5 text-[#655BD3]"
                />
                <h1 className=" text-3xl text-slate-600 mb-2">
                  Forgot Password? 🔒
                </h1>
                <p className=" text-gray-600 mb-7">
                  Enter your email and we′ll send you instructions to reset your
                  password
                </p>

                <div className="relative mb-5">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    className="border border-gray-400 outline-[#655BD3] w-full h-10 pl-3 rounded-md"
                  />
                  <label className="absolute top-[50%] transition-all duration-300 translate-y-[-60%] text-gray-500 left-[15px]">
                    Enter Email
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-[#655BD3] text-white hover:bg-[#5147bb] transition-all duration-200 w-full h-10 rounded-md mb-4 text-sm tracking-wider"
                >
                  SEND RESETE LINK
                </button>
              </div>

              <div className="flex items-center justify-center text-[#655BD3]">
                <BsChevronLeft />
                <a href="#">Back to login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
