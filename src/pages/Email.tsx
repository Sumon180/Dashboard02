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
        <div className="flex">
          <div
            className={`fixed  w-60 lg:block hidden transition-all duration-300 h-screen border-r border-gray-400 ${
              mode ? "bg-black text-slate-300" : "bg-white text-slate-800"
            }`}
          >
            <Sidebar />
          </div>
          <div className="lg:ml-60 ml-0  h-screen">
            <TopBar />
            <div
              className={`${
                mode ? "bg-black text-slate-300" : "bg-white text-slate-800"
              }`}
            >
              <div className=" mx-5 mt-[4.65rem]">
                <div className="flex pt-5">
                  <div className="w-96 h-[89.9vh] border-r">
                    <Button>Calender</Button>
                  </div>
                  <div className="w-full">
                    <div className="border-b">
                      <input
                        type="text"
                        placeholder="Search email"
                        className="  outline-none bg-transparent"
                      />
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
