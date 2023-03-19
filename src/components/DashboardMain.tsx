import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";

const DashboardMain = () => {
  const mode = useSelector(toggleDarkMode);

  return (
    <>
      <div
        className={`mt-14 ${
          mode ? "bg-[#141B2D] text-slate-300" : "bg-[#F8F7FA] text-slate-800"
        }`}
      >
        <div className={` pt-10 pb-6`}>
          <div className={`flex flex-col  gap-5 mx-5`}>
            <div className="w-full">
              <div className="lg:flex lg:flex-row flex flex-col gap-5">
                <div className="lg:w-[30%] w-full flex flex-col gap-5">
                  <div
                    className={`rounded-lg ${
                      mode
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    <div
                      className={`flex flex-col items-center justify-center gap-4 px-5 py-5
                      `}
                    >
                      <h1 className=" text-5xl">Dashboard</h1>
                      <h1 className=" text-3xl">Chart Here</h1>
                    </div>
                  </div>
                  <div
                    className={`rounded-lg ${
                      mode
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    <div
                      className={`flex flex-col items-center justify-center gap-4 px-5 py-5
                      `}
                    >
                      <h1 className=" text-5xl">Dashboard</h1>
                      <h1 className=" text-3xl">Chart Here</h1>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div
                    className={`py-5 rounded-lg ${
                      mode
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    <div className="flex items-center justify-between px-5 pb-5">
                      <div className=" max-w-md">
                        <h1 className=" text-5xl">Dashboard</h1>
                        <h1 className=" text-3xl">Chart Here</h1>
                      </div>
                      <div>
                        <h1 className=" text-5xl">Dashboard</h1>
                        <h1 className=" text-3xl">Chart Here</h1>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-5 py-5">
                      <div className=" max-w-md">
                        <h1 className=" text-5xl">Dashboard</h1>
                        <h1 className=" text-3xl">Chart Here</h1>
                      </div>
                      <div>
                        <h1 className=" text-5xl">Dashboard</h1>
                        <h1 className=" text-3xl">Chart Here</h1>
                      </div>
                    </div>
                    <div className="px-5 py-10">
                      <h1 className=" text-5xl">Dashboard</h1>
                      <h1 className=" text-3xl">Chart Here</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div
                className={`py-5 rounded-lg ${
                  mode
                    ? "bg-slate-800 text-slate-300"
                    : "bg-slate-200 text-slate-800"
                }`}
              >
                <div className="flex items-center justify-between px-5 pb-5">
                  <div className=" max-w-md">
                    <h1 className=" text-5xl">Dashboard</h1>
                    <h1 className=" text-3xl">Chart Here</h1>
                  </div>
                  <div>
                    <h1 className=" text-5xl">Dashboard</h1>
                    <h1 className=" text-3xl">Chart Here</h1>
                  </div>
                </div>
                <div className="flex items-center justify-between px-5 py-5">
                  <div className=" max-w-md">
                    <h1 className=" text-5xl">Dashboard</h1>
                    <h1 className=" text-3xl">Chart Here</h1>
                  </div>
                  <div>
                    <h1 className=" text-5xl">Dashboard</h1>
                    <h1 className=" text-3xl">Chart Here</h1>
                  </div>
                </div>
                <div className="px-5 py-10">
                  <h1 className=" text-5xl">Dashboard</h1>
                  <h1 className=" text-3xl">Chart Here</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
