import img from "../../assets/image/forgot.png";
import logo from "../../assets/image/react.svg";

const VerifyEmail = () => {
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
                  Verify your email ✉️
                </h1>
                <p className=" text-gray-600 mb-7">
                  Account activation link sent to your email address:
                  hello@example.com Please follow the link inside to continue.
                </p>

                <button
                  type="submit"
                  className="bg-[#655BD3] text-white hover:bg-[#5147bb] transition-all duration-200 w-full h-10 rounded-md mb-4 text-sm tracking-wider uppercase"
                >
                  Skip For Now
                </button>
              </div>

              <div className="flex items-center justify-center">
                <a href="#">
                  Didn't get the mail?{" "}
                  <span className="text-[#655BD3]">Resend</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
