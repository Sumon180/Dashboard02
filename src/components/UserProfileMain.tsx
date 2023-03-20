import profile from "../assets/image/profile.jpg";
import { SiAltiumdesigner } from "react-icons/si";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";
import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const UserProfileMain = () => {
  const mode = useSelector(toggleDarkMode);
  const [pop, setPop] = useState(false);

  const popup = () => {
    setPop(!pop);
  };

  return (
    <>
      <div
        className={`mt-14 ${
          mode ? "bg-[#141B2D] text-slate-300" : "bg-[#F8F7FA] text-slate-800"
        }`}
      >
        <div className="pt-10 pb-6 ">
          <div
            className={`flex rounded-xl mx-5 ${
              mode ? "bg-slate-800" : "bg-slate-200"
            }`}
          >
            <div className="w-full rounded-xl overflow-hidden drop-shadow-xl">
              <div className="flex items-center flex-col justify-center gap-3 bg-gradient-to-br bg-lime-300 from-green-500 h-80"></div>
              <div className="flex items-end justify-between mx-10 pb-8">
                <div className="flex items-end gap-5">
                  <img
                    src={profile}
                    alt=""
                    className="w-32 h-32 -mt-10 border-4 border-slate-800"
                  />
                  <div>
                    <h4 className="text-3xl">Belle Ferguson</h4>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <SiAltiumdesigner className="w-6 h-6" />
                        <span>UX Designer</span>
                      </div>
                      <div className="flex items-center gap-1">
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
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>

                        <span>Vatican City</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <AiOutlineCalendar className="w-6 h-6" />
                        <span>April 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="uppercase bg-blue-600 px-5 py-2">
                    Connected
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center mx-5 gap-2 my-5">
            <button className="uppercase bg-blue-600 px-5 py-2 font-bold">
              Profile
            </button>
            <button className="uppercase border border-blue-600 px-5 py-2">
              Team
            </button>
            <button className="uppercase border border-blue-600 px-5 py-2">
              Projects
            </button>
            <button className="uppercase border border-blue-600 px-5 py-2">
              Connected
            </button>
          </div>
          <div className="flex justify-between mx-5 gap-5 my-5">
            <div className="flex items-center flex-col w-4/12 gap-5">
              <div
                className={`flex rounded-xl w-full ${
                  mode ? "bg-slate-800" : "bg-slate-200"
                }`}
              >
                <div className="p-5">
                  <ul className="flex flex-col gap-3">
                    <li>
                      <span className="font-bold">Full Name:</span> Belle
                      Ferguson
                    </li>
                    <li>
                      <span className="font-bold">Status:</span> active
                    </li>
                    <li>
                      <span className="font-bold">Role:</span> Developer
                    </li>
                    <li>
                      <span className="font-bold">Country:</span> USA
                    </li>
                    <li>
                      <span className="font-bold">Language:</span> English
                    </li>
                    <li>CONTACTS</li>
                    <li>
                      <span className="font-bold">Contact:</span> (123) 456-7890
                    </li>
                    <li>
                      <span className="font-bold">Skype:</span> john.doe
                    </li>
                    <li>
                      <span className="font-bold">Email:</span>
                      john.doe@example.com
                    </li>
                    <li>TEAMS</li>
                    <li>
                      <span className="font-bold">Backend Developer:</span> (126
                      Members)
                    </li>
                    <li>
                      <span className="font-bold">VueJS Developer:</span> (98
                      Members)
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`flex rounded-xl w-full ${
                  mode ? "bg-slate-800" : "bg-slate-200"
                }`}
              >
                <div className="p-5">
                  <ul className="flex flex-col gap-3">
                    <li>
                      <span className="font-bold">Task Compiled:</span> 13.5k
                    </li>
                    <li>
                      <span className="font-bold">Connections:</span> 897
                    </li>
                    <li>
                      <span className="font-bold">Projects Compiled:</span> 146
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-8/12 flex flex-col gap-5">
              <div
                className={`flex rounded-xl ${
                  mode ? "bg-slate-800" : "bg-slate-200"
                }`}
              >
                <div className="p-5">
                  <h5 className="text-xl pb-5">Activity Timeline</h5>
                  <ul>
                    <li className="relative flex gap-6 pb-5 items-baseline">
                      <div className=" before:absolute before:top-5 before:left-[10px] before:h-full before:w-[1px] before:bg-gray-400">
                        <div className="flex items-center justify-center w-5 h-5 bg-slate-500 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm">
                        <p>27.08.2023</p>
                        <p className="text-lg mt-2">
                          12 Invoices have been paid
                        </p>
                        <p>Invoices have been paid to the company</p>
                        <p className="mt-2">Invoices.pdf</p>
                      </div>
                    </li>
                    <li className="relative flex gap-6 pb-5 items-baseline">
                      <div className=" before:absolute before:top-5 before:left-[10px] before:h-full before:w-[1px] before:bg-gray-400">
                        <div className="flex items-center justify-center w-5 h-5 bg-slate-500 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm">
                        <p>27.08.2023</p>
                        <p className="text-lg mt-2">Meeting with john</p>
                        <p>React Project meeting with john @10:15am</p>
                        <div className="mt-2">
                          <p>John Doe (Client)</p>
                          <p>CEO of Kelly Group</p>
                        </div>
                      </div>
                    </li>
                    <li className="relative flex gap-6 pb-5 items-baseline">
                      <div className=" before:absolute before:top-5 before:left-[10px] before:h-full before:w-[1px] before:bg-gray-400">
                        <div className="flex items-center justify-center w-5 h-5 bg-slate-500 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm">
                        <p>27.08.2023</p>
                        <p className="text-lg mt-2">
                          Create a new react project for client
                        </p>
                        <p>Add files to new design folder</p>
                      </div>
                    </li>
                    <li className="relative flex gap-6 pb-5 items-baseline">
                      <div>
                        <div className="flex items-center justify-center w-5 h-5 bg-slate-500 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm">
                        <p>27.08.2023</p>
                        <p className="text-lg mt-2">
                          12 Create invoices for client
                        </p>
                        <p>
                          Weekly review of freshly prepared design for our new
                          app.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div
                  className={`flex rounded-xl w-1/2 ${
                    mode ? "bg-slate-800" : "bg-slate-200"
                  }`}
                >
                  <div className="p-5 w-full">
                    <div className="flex items-center justify-between">
                      <h5 className="text-2xl mb-5">Connection</h5>
                      ...
                    </div>
                    <ul className="flex flex-col gap-3 w-full">
                      <li className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <h5>Cecilia Payne</h5>
                            <span>45 Connections</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center bg-slate-600 w-8 h-8 rounded">
                          +
                        </div>
                      </li>
                      <li className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <h5>Cecilia Payne</h5>
                            <span>45 Connections</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center bg-slate-600 w-8 h-8 rounded">
                          +
                        </div>
                      </li>
                      <li className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <h5>Cecilia Payne</h5>
                            <span>45 Connections</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center bg-slate-600 w-8 h-8 rounded">
                          +
                        </div>
                      </li>
                      <li className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <h5>Cecilia Payne</h5>
                            <span>45 Connections</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center bg-slate-600 w-8 h-8 rounded">
                          +
                        </div>
                      </li>
                      <li className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <h5>Cecilia Payne</h5>
                            <span>45 Connections</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center bg-slate-600 w-8 h-8 rounded">
                          +
                        </div>
                      </li>
                    </ul>
                    <div className="mt-10">
                      <button className=" w-full h-10 bg-green-900">
                        View All Connectons
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex rounded-xl w-1/2 ${
                    mode ? "bg-slate-800" : "bg-slate-200"
                  }`}
                >
                  <div className="p-5 w-full">
                    <div className="flex items-center justify-between">
                      <h5 className="text-2xl mb-5">Teams</h5>
                      ...
                    </div>
                    <ul className="flex flex-col gap-3 w-full">
                      <li className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <h5>React Developers</h5>
                            <span>72 Members</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center bg-slate-600 py-1 px-3 rounded">
                          <button>Developer</button>
                        </div>
                      </li>
                      <li className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <h5>Support Team</h5>
                            <span>122 Members</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center bg-slate-600 py-1 px-3 rounded">
                          <button>Designer</button>
                        </div>
                      </li>
                      <li className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <h5>UI Designer</h5>
                            <span>7 Members</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center bg-slate-600 py-1 px-3 rounded">
                          <button>Support</button>
                        </div>
                      </li>
                      <li className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <h5>Vue.js Developers</h5>
                            <span>289 Members</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center bg-slate-600 py-1 px-3 rounded">
                          <button>Developer</button>
                        </div>
                      </li>
                      <li className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <h5>Digital Marketing</h5>
                            <span>24 Members</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center bg-slate-600 py-1 px-3 rounded">
                          <button>Marketing</button>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-10">
                      <button className=" w-full h-10 bg-green-900">
                        View All Teams
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`flex rounded-xl ${
                  mode ? "bg-slate-800" : "bg-slate-200"
                }`}
              >
                <div className="p-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit dignissimos voluptas explicabo fugit quia ad maxime
                  <ul>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                  </ul>
                  odio quaerat. Velit modi nostrum laborum, ullam neque vitae
                  saepe sed. Distinctio dolore molestiae eveniet delectus a
                  ipsam nobis laborum hic, magni numquam accusamus, quia
                  tempora, autem aperiam! Accusamus accusantium placeat
                  perferendis aut debitis!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileMain;
