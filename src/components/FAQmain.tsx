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
                    <img src={register} alt="" />
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
                <h6 className="text-2xl">Still need help?</h6>

                <p>
                  Our specialists are always happy to help. Contact us during
                  standard business hours or email us
                </p>
                <p>24/7 and we'll get back to you.</p>

                <div className="flex items-center gap-5">
                  <button className="uppercase bg-blue-600 px-5 py-2">
                    visit our community
                  </button>
                  <button className="uppercase bg-blue-600 px-5 py-2">
                    Contact Us
                  </button>
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
