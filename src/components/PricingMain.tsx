import basic from "../assets/image/basic.png";
import standard from "../assets/image/standerd.png";
import enterprise from "../assets/image/enterprise.png";
import laptopGirl from "../assets/image/laptop-girl.png";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { SiAltiumdesigner } from "react-icons/si";

const PricingMain = () => {
  const mode = useSelector(toggleDarkMode);
  const [pop, setPop] = useState(false);
  const [user, setUser] = useState(false);

  const popup = () => {
    setPop(!pop);
  };
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
        <div className="pt-10 pb-6 mx-5">
          <div className="flex flex-col gap-5">
            <div
              className={`rounded-xl py-4 ${
                mode ? "bg-slate-800" : "bg-slate-200"
              }`}
            >
              <div className="flex flex-col gap-3 pb-5">
                <div className="flex flex-col items-center justify-center my-5">
                  <h2 className="text-4xl my-5">Pricing Plans</h2>
                  <p>
                    All plans include 40+ advanced tools and features to boost
                    your product.
                  </p>
                  <p>Choose the best plan to fit your needs.</p>
                </div>
                <div className="flex items-center justify-center flex-wrap gap-5">
                  <div className="flex flex-col border border-slate-600 rounded-md px-3 py-2 w-3/12">
                    <div className="flex flex-col items-center justify-center gap-3 mt-5">
                      <img src={basic} alt="" className=" w-36 h-36" />
                      <h6 className=" text-3xl font-bold">Basic</h6>
                      <p>A simple start for everyone</p>
                      <p>
                        $<span className=" text-6xl text-blue-600">0</span>{" "}
                        /month
                        <br />
                        free
                      </p>
                    </div>
                    <ul className="flex flex-col gap-2 py-5">
                      <li>100 responses a month</li>
                      <li>Unlimited forms and surveys</li>
                      <li>Unlimited fields</li>
                      <li>Basic form creation tools</li>
                      <li>Up to 2 subdomains</li>
                    </ul>
                    <button className="uppercase w-full bg-blue-600 px-5 py-2">
                      Upgrade
                    </button>
                  </div>
                  <div className="flex flex-col border border-slate-600 rounded-md px-3 py-2 w-3/12">
                    <div className="flex flex-col items-center justify-center gap-3 mt-5">
                      <img src={standard} alt="" className=" w-36 h-36" />
                      <h6 className=" text-3xl font-bold">Standard</h6>
                      <p>A simple start for everyone</p>
                      <p>
                        $<span className=" text-6xl text-blue-600">38</span>{" "}
                        /month
                        <br />
                        free
                      </p>
                    </div>
                    <ul className="flex flex-col gap-2 py-5">
                      <li>100 responses a month</li>
                      <li>Unlimited forms and surveys</li>
                      <li>Unlimited fields</li>
                      <li>Basic form creation tools</li>
                      <li>Up to 2 subdomains</li>
                    </ul>
                    <button className="uppercase w-full bg-blue-600 px-5 py-2">
                      Upgrade
                    </button>
                  </div>
                  <div className="flex flex-col border border-slate-600 rounded-md px-3 py-2 w-3/12">
                    <div className="flex flex-col items-center justify-center gap-3 mt-5">
                      <img src={enterprise} alt="" className=" w-36 h-36" />
                      <h6 className=" text-3xl font-bold">Enterprise</h6>
                      <p>A simple start for everyone</p>
                      <p>
                        $<span className=" text-6xl text-blue-600">57</span>{" "}
                        /month
                        <br />
                        free
                      </p>
                    </div>
                    <ul className="flex flex-col gap-2 py-5">
                      <li>100 responses a month</li>
                      <li>Unlimited forms and surveys</li>
                      <li>Unlimited fields</li>
                      <li>Basic form creation tools</li>
                      <li>Up to 2 subdomains</li>
                    </ul>
                    <button className="uppercase w-full bg-blue-600 px-5 py-2">
                      Upgrade
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex bg-indigo-900">
                <div className="flex items-center justify-between mx-24 w-full">
                  <div className="my-12">
                    <p className="text-2xl font-semibold">
                      Still not convinced? Start with a 14-day FREE trial!
                    </p>
                    <p>
                      You will get full access to all the features for 14 days.
                    </p>
                    <div className="mt-8">
                      <button className="uppercase bg-blue-600 px-5 py-2">
                        Startr-15-Day free Trial
                      </button>
                    </div>
                  </div>
                  <div>
                    <img src={laptopGirl} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex pb-20">
                <div className="mx-24 w-full">
                  <div className="flex flex-col items-center justify-center gap-3 my-12">
                    <h4 className="text-4xl font-semibold">
                      Pick a plan that works best for you
                    </h4>
                    <p>Stay cool, we have a 48-hour money back guarantee!</p>
                  </div>
                  <div>
                    <table className="border border-slate-600">
                      <tr>
                        <th>
                          FEATURES
                          <br />
                          Native Front Features
                        </th>
                        <th>
                          BASIC
                          <br /> FREE
                        </th>
                        <th>STANDAED</th>
                        <th>ENTERPRISE</th>
                      </tr>
                      <tr>
                        <td>14-days free trial</td>
                        <td>-</td>
                        <td>15</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>14-days free trial</td>
                        <td>-</td>
                        <td>15</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>Product Support</td>
                        <td>-</td>
                        <td>15</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>Email Support</td>
                        <td>-</td>
                        <td>15</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>Integrations</td>
                        <td>-</td>
                        <td>15</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>Removal of Front branding</td>
                        <td>-</td>
                        <td>15</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>Active maintenance & support</td>
                        <td>-</td>
                        <td>15</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>Data storage for 365 days</td>
                        <td>-</td>
                        <td>15</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>Data storage for 365 days</td>
                        <td>-</td>
                        <td>15</td>
                        <td>01</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className={`flex bg-slate-900`}>
                <div className="mx-24 w-full my-12">
                  <div className="flex flex-col items-center justify-center gap-3 my-12">
                    <h4 className="text-4xl font-semibold">FAQ's</h4>
                    <p>Let us help answer the most common questions.</p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingMain;
