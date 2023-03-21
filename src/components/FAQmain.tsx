import register from "../assets/image/sitting-girl.png";

import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";
import { useState } from "react";

const FAQmain = () => {
  const mode = useSelector(toggleDarkMode);
  const [user, setUser] = useState(false);

  const users = () => {
    setUser(!user);
    console.log("Hello");
  };

  return (
    <>
      <div
        className={`mt-14 ${
          mode ? "bg-[#141B2D] text-slate-300" : "bg-[#F8F7FA] text-slate-800"
        }`}
      >
        <div className="pt-10 pb-6 ">
          <div className={`flex rounded-xl mx-5`}>
            <div className="w-full overflow-hidden drop-shadow-xl">
              <div className="flex items-center flex-col justify-center gap-3 bg-cyan-900 py-24 rounded-xl">
                <h5 className="text-3xl">Hello, how can we help you?</h5>
                <input
                  type="text"
                  placeholder="Search a Question"
                  className="outline-none bg-transparent border h-10 lg:w-[40rem] w-48 pl-3 rounded-md"
                />
                <p>or select a category to quickly find the help you require</p>
              </div>
              <div className="flex gap-5 w-full my-5">
                <div className="flex flex-col gap-5  w-4/12">
                  <div className="">
                    <button className="uppercase w-full text-left bg-blue-600 px-5 py-2">
                      Payment
                    </button>
                    <button className="uppercase w-full text-left hover:bg-slate-800 px-5 py-2">
                      Delivery
                    </button>
                    <button className="uppercase w-full text-left hover:bg-slate-800 px-5 py-2">
                      Cancellation
                    </button>
                    <button className="uppercase w-full text-left hover:bg-slate-800 px-5 py-2">
                      My Orders
                    </button>
                    <button className="uppercase w-full text-left hover:bg-slate-800 px-5 py-2">
                      Service
                    </button>
                  </div>
                  <div>
                    <img src={register} alt="" className="w-96 h-96" />
                  </div>
                </div>
                <div className="w-8/12">
                  <div className="mb-5">
                    <h6 className="text-2xl">Payment</h6>
                    <p>Get help with payment</p>
                  </div>
                  <div>
                    <div
                      className={`flex flex-col gap-4 bg-slate-800 px-5 py-3 ${
                        user ? "mb-5" : "mb-0 border-b border-slate-700"
                      }`}
                    >
                      <div
                        onClick={users}
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <p>What counts towards the 100 response limit?</p>

                        <div className="">
                          {user ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className={`${user ? "block" : "hidden"}`}>
                        <p>
                          Donec placerat, lectus sed mattis semper, neque lectus
                          feugiat lectus, varius pulvinar diam eros in elit.
                          Pellentesque convallis laoreet laoreet.Donec placerat,
                          lectus sed mattis semper, neque lectus feugiat lectus,
                          varius pulvinar diam eros in elit. Pellentesque
                          convallis laoreet laoreet.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-4 bg-slate-800 px-5 py-3 ${
                        user ? "mb-5" : "mb-0 border-b border-slate-700"
                      }`}
                    >
                      <div
                        onClick={users}
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <p>What counts towards the 100 response limit?</p>

                        <div className="">
                          {user ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className={`${user ? "block" : "hidden"}`}>
                        <p>
                          Donec placerat, lectus sed mattis semper, neque lectus
                          feugiat lectus, varius pulvinar diam eros in elit.
                          Pellentesque convallis laoreet laoreet.Donec placerat,
                          lectus sed mattis semper, neque lectus feugiat lectus,
                          varius pulvinar diam eros in elit. Pellentesque
                          convallis laoreet laoreet.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-4 bg-slate-800 px-5 py-3 ${
                        user ? "mb-5" : "mb-0 border-b border-slate-700"
                      }`}
                    >
                      <div
                        onClick={users}
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <p>What counts towards the 100 response limit?</p>

                        <div className="">
                          {user ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className={`${user ? "block" : "hidden"}`}>
                        <p>
                          Donec placerat, lectus sed mattis semper, neque lectus
                          feugiat lectus, varius pulvinar diam eros in elit.
                          Pellentesque convallis laoreet laoreet.Donec placerat,
                          lectus sed mattis semper, neque lectus feugiat lectus,
                          varius pulvinar diam eros in elit. Pellentesque
                          convallis laoreet laoreet.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-4 bg-slate-800 px-5 py-3 ${
                        user ? "mb-5" : "mb-0 border-b border-slate-700"
                      }`}
                    >
                      <div
                        onClick={users}
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <p>What counts towards the 100 response limit?</p>

                        <div className="">
                          {user ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className={`${user ? "block" : "hidden"}`}>
                        <p>
                          Donec placerat, lectus sed mattis semper, neque lectus
                          feugiat lectus, varius pulvinar diam eros in elit.
                          Pellentesque convallis laoreet laoreet.Donec placerat,
                          lectus sed mattis semper, neque lectus feugiat lectus,
                          varius pulvinar diam eros in elit. Pellentesque
                          convallis laoreet laoreet.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-4 bg-slate-800 px-5 py-3 ${
                        user ? "" : "mb-0"
                      }`}
                    >
                      <div
                        onClick={users}
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <p>What counts towards the 100 response limit?</p>

                        <div className="">
                          {user ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className={`${user ? "block" : "hidden"}`}>
                        <p>
                          Donec placerat, lectus sed mattis semper, neque lectus
                          feugiat lectus, varius pulvinar diam eros in elit.
                          Pellentesque convallis laoreet laoreet.Donec placerat,
                          lectus sed mattis semper, neque lectus feugiat lectus,
                          varius pulvinar diam eros in elit. Pellentesque
                          convallis laoreet laoreet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-col justify-center gap-3 my-24">
                <span className=" bg-green-900 text-green-500 px-5 py-2">QUESTION?</span>
                <h6 className="text-2xl">Still need help?</h6>
                <p className="mb-5">
                  If you can't find question in our FAQ, you can contact us.
                  We'll answer you shortly!
                </p>
                <div className="flex items-center gap-5 w-full">
                  <div className="flex flex-col items-center justify-center gap-3 py-10 bg-slate-800 px-5 w-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>

                    <p>+ (810) 2548 2568</p>
                    <p>We are always happy to help!</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 py-10 bg-slate-800 px-5 w-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>

                    <p>hello@help.com</p>
                    <p>Best way to get answer faster!</p>
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

export default FAQmain;
