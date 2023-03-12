import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";
import Sidebar from "../layout/Sidebar";
import TopBar from "../layout/TopBar";

const Email = () => {
  const mode = useSelector(toggleDarkMode);

  return (
    <>
      <div className="">
        <div className="flex overflow-x-hidden">
          <div
            className={`fixed  w-60 lg:block hidden transition-all duration-300 h-screen border-r border-gray-400 ${
              mode ? "bg-black text-slate-300" : "bg-white text-slate-800"
            }`}
          >
            <Sidebar />
          </div>
          <div className="lg:ml-60 ml-0  w-[85.7vw]">
            <TopBar />
            <div
              className={`mt-14 ${
                mode ? "bg-black text-slate-300" : "bg-white text-slate-800"
              }`}
            >
              <div className="">
                <div className="pt-10 pb-6">
                  <div className="flex border rounded-md mx-5">
                    <div className="w-56 border-r">
                      <Button>Calender</Button>
                    </div>
                    <div className="w-full">
                      <div className="flex items-center border-b py-3 pl-5 w-full gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>

                        <input
                          type="text"
                          placeholder="Search email"
                          className="  outline-none bg-transparent"
                        />
                      </div>
                      <div className="overflow-y-scroll h-[85vh] scroll-style">
                      <ul className="">
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        <li className="border-b py-3 px-5">44</li>
                        
                        
                      </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
