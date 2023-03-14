import img from "../assets/image/twoSteps.png";
import logo from "../assets/image/react.svg";

const TwoSteps = () => {
  return (
    <>
      <div className="flex items-center justify-between h-screen w-screen bg-white">
        <div className="flex items-center justify-center bg-[#F8F7FA] ml-8 h-[92vh] w-[65vw] rounded-2xl">
          <img
            src={img}
            alt="img/loginAvatar"
            className="w-[25rem] h-[38rem]"
          />
        </div>
        <div className="flex items-center justify-start w-[30vw]">
          <div className="bg-white rounded mr-14">
            <form action="">
              <img src={logo} alt="logo/img" className="mb-5 text-[#655BD3]" />
              <h1 className=" text-3xl text-slate-600 mb-2">
                Two Step Verification 💬
              </h1>
              <p className=" text-slate-500 mb-7">
                We sent a verification code to your mobile. Enter the code from
                the mobile in the field below.
                <br />
                <span className="font-bold">****1234</span>
              </p>

              <div className="flex flex-col gap-4">
                <p>Type your 6 digit security code</p>
                <div className="flex items-center justify-around">
                  <input
                    type="text"
                    id="input-1"
                    size={1}
                    maxLength={1}
                    required
                    className="flex flex-wrap border border-gray-400 text-center text-lg outline-[#655BD3] w-14 h-12 rounded-md"
                  />
                  <input
                    type="text"
                    id="input-1"
                    size={1}
                    maxLength={1}
                    required
                    className="border border-gray-400 text-center text-lg outline-[#655BD3] w-14 h-12 rounded-md"
                  />
                  <input
                    type="text"
                    id="input-1"
                    size={1}
                    maxLength={1}
                    required
                    className="border border-gray-400 text-center text-lg outline-[#655BD3] w-14 h-12 rounded-md"
                  />
                  <input
                    type="text"
                    id="input-1"
                    size={1}
                    maxLength={1}
                    required
                    className="border border-gray-400 text-center text-lg outline-[#655BD3] w-14 h-12 rounded-md"
                  />
                  <input
                    type="text"
                    id="input-1"
                    size={1}
                    maxLength={1}
                    required
                    className="border border-gray-400 text-center text-lg outline-[#655BD3] w-14 h-12 rounded-md"
                  />
                  <input
                    type="text"
                    id="input-1"
                    size={1}
                    maxLength={1}
                    required
                    className="border border-gray-400 text-center text-lg outline-[#655BD3] w-14 h-12 rounded-md"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center bg-[#655BD3] text-white hover:bg-[#5147bb] transition-all duration-200 w-full h-10 rounded-md mb-8 text-sm uppercase tracking-wider"
                >
                  verify my account
                </button>
              </div>
              <div className="text-center mb-6">
                <p className="text-gray-500">
                  Didn't get the code?
                  <a href="#" className="text-[#655BD3]">
                    Resend
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoSteps;
