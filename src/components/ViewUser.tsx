import profile from "../assets/image/profile.jpg";
import react from "../assets/image/react.png";
import vieu from "../assets/image/view.png";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";
import { BsThreeDotsVertical } from "react-icons/bs";

const ViewUser = () => {
  const mode = useSelector(toggleDarkMode);

  return (
    <>
      <div
        className={`mt-14 ${
          mode ? "bg-[#141B2D] text-slate-300" : "bg-white text-slate-800"
        }`}
      >
        <div className={` pt-10 pb-6`}>
          <div className={`flex flex-col mx-5`}>
            <div className="w-full">
              <div className="flex gap-5">
                <div className="w-[50%]">
                  <div
                    className={`rounded-lg ${
                      mode
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    <div
                      className={`flex flex-col items-center justify-center gap-4 pt-10 border-b
                      `}
                    >
                      <img
                        src={profile}
                        alt="profile/img"
                        className="w-24 h-24 rounded-md "
                      />
                      <h2 className=" text-2xl">Selina Kyle</h2>
                      <span>Admin</span>
                      <div className="flex items-center gap-5 mb-10">
                        <div className="flex items-center gap-5">
                          <div className="flex items-center justify-center w-10 h-10 bg-green-200 opacity-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 text-green-600"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </div>
                          <div>
                            <span className=" font-bold">1,568</span>
                            <p>Task Done</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-5">
                          <div className="flex items-center justify-center w-10 h-10 bg-orange-200 opacity-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 text-orange-600"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </div>
                          <div>
                            <span className=" font-bold">568</span>
                            <p>Project Done</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 mx-10 my-5">
                      <span className="text-xl">Details</span>
                      <div>
                        <h6 className="font-bold">
                          Billing Email:{" "}
                          <span className=" font-normal">
                            irena.dubrovna@wayne.com
                          </span>
                        </h6>
                      </div>
                      <div>
                        <h6 className="font-bold">
                          Status: <span className=" font-normal">Active</span>
                        </h6>
                      </div>
                      <div>
                        <h6 className="font-bold">
                          Role: <span className=" font-normal">Admin</span>
                        </h6>
                      </div>
                      <div>
                        <h6 className="font-bold">
                          Tex ID: <span className=" font-normal">Tax-8889</span>
                        </h6>
                      </div>
                      <div>
                        <h6 className="font-bold">
                          Contact:{" "}
                          <span className=" font-normal"> (829) 537-0057</span>
                        </h6>
                      </div>
                      <div>
                        <h6 className="font-bold">
                          Language:{" "}
                          <span className=" font-normal">English</span>
                        </h6>
                      </div>
                      <div>
                        <h6 className="font-bold">
                          Country: <span className=" font-normal">USA</span>
                        </h6>
                      </div>
                      <div className="flex items-center justify-center gap-3 mb-5">
                        <button className="bg-indigo-500 px-5 py-1 rounded-md">
                          Edit
                        </button>
                        <button className="border border-indigo-500 px-5 py-1 rounded-md">
                          Suspend
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`py-5 rounded-lg px-5 ${
                      mode
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <button
                        className="bg-indigo-900 px-5 py-1 rounded-md"
                        disabled
                      >
                        Standard
                      </button>
                      <p>
                        $ <span className=" text-5xl text-indigo-500">99</span>{" "}
                        / month
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 my-10 ">
                      <div>10 Users</div>
                      <div>Up to 10GB storage</div>
                      <div>Basic Support</div>
                    </div>
                    <div className="my-5">
                      <div className="flex items-center justify-between">
                        <div>Days</div>
                        <div>26 of 30 Days</div>
                      </div>
                      <div className="w-full h-2 bg-green-900 rounded-full my-2">
                        <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div>4 days remaining</div>
                    </div>
                    <button className="bg-indigo-500 w-full py-2 rounded-md">
                      UPGRADE PLANE
                    </button>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex gap-5 mb-5 ">
                    <button className="bg-blue-500 px-6 py-2 rounded">
                      OVERVIEW
                    </button>
                    <button className="border border-blue-500 hover:bg-blue-500 px-6 py-2 rounded">
                      SECURITY
                    </button>
                    <button className="border border-blue-500 hover:bg-blue-500 px-6 py-2 rounded">
                      BILLING & PLAN
                    </button>
                    <button className="border border-blue-500 hover:bg-blue-500 px-6 py-2 rounded">
                      NOTIFICATIONS
                    </button>
                    <button className="border border-blue-500 hover:bg-blue-500 px-6 py-2 rounded">
                      CONNECTIONS
                    </button>
                  </div>
                  <div
                    className={`py-5 rounded-lg ${
                      mode
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    <h3 className=" font-bold text-xl border-b px-5 pb-4">
                      User's Project List
                    </h3>
                    <div>
                      <table>
                        <tr>
                          <th>PROJECT</th>
                          <th>TOTAL TASK</th>
                          <th>PROGRESS</th>
                          <th>HOURS</th>
                        </tr>
                        <tr>
                          <td className="flex items-center gap-3">
                            <img
                              src={react}
                              alt="profile/img"
                              className="w-8 h-8 rounded-full "
                            />
                            <div>
                              <h5>BGC eCommerce App</h5>
                              <p>React Project</p>
                            </div>
                          </td>
                          <td>122/240</td>
                          <td>
                            <p>78%</p>
                            <div className="w-20 h-2 bg-green-900 rounded-full">
                              <div className="w-10 h-2 bg-green-500 rounded-full"></div>
                            </div>
                          </td>
                          <td>18:42</td>
                        </tr>
                        <tr>
                          <td className="flex items-center gap-3">
                            <img
                              src={vieu}
                              alt="profile/img"
                              className="w-8 h-8 rounded-full "
                            />
                            <div>
                              <h5>BGC eCommerce App</h5>
                              <p>React Project</p>
                            </div>
                          </td>
                          <td>122/240</td>
                          <td>
                            <p>78%</p>
                            <div className="w-20 h-2 bg-red-900 rounded-full">
                              <div className="w-5 h-2 bg-red-500 rounded-full"></div>
                            </div>
                          </td>
                          <td>18:42</td>
                        </tr>
                        <tr>
                          <td className="flex items-center gap-3">
                            <img
                              src={vieu}
                              alt="profile/img"
                              className="w-8 h-8 rounded-full "
                            />
                            <div>
                              <h5>BGC eCommerce App</h5>
                              <p>React Project</p>
                            </div>
                          </td>
                          <td>122/240</td>
                          <td>
                            <p>78%</p>
                            <div className="w-20 h-2 bg-blue-900 rounded-full">
                              <div className="w-16 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                          </td>
                          <td>18:42</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div
                    className={`py-5 my-5 px-5 rounded-lg ${
                      mode
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    <h5 className="text-xl pb-5">User Activity Timeline</h5>
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
                  <div
                    className={`py-5 my-5 px-5 rounded-lg ${
                      mode
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    <table className="w-full">
                      <thead className=" select-none">
                        <tr>
                          <th>#ID</th>
                          <th>
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
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                              />
                            </svg>
                          </th>
                          <th>
                            <span>CLIENT</span>
                          </th>
                          <th>
                            <span>Total</span>
                          </th>
                          <th>
                            <span>Issued Date</span>
                          </th>
                          <th>
                            <span>Balance</span>
                          </th>
                          <th>
                            <span>Actions</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {" "}
                            <span>#20333</span>
                          </td>
                          <td>
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
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          </td>
                          <td>
                            <div className="flex items-center gap-4">
                              <div>
                                <img
                                  src={profile}
                                  alt="profile/img"
                                  className="w-8 h-8 rounded-full"
                                />
                              </div>
                              <div>
                                <span>Charles Cooper</span>
                                <p>Fight account night short.</p>
                              </div>
                            </div>
                          </td>
                          <td> $3171</td>
                          <td> 2023-03-19</td>
                          <td> -$205</td>
                          <td>
                            {" "}
                            <div className=" relative flex items-center gap-4">
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
                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                              </svg>
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
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <div className="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full hover:bg-slate-500">
                                <BsThreeDotsVertical />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {" "}
                            <span>#20333</span>
                          </td>
                          <td>
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
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          </td>
                          <td>
                            <div className="flex items-center gap-4">
                              <div>
                                <img
                                  src={profile}
                                  alt="profile/img"
                                  className="w-8 h-8 rounded-full"
                                />
                              </div>
                              <div>
                                <span>Charles Cooper</span>
                                <p>Fight account night short.</p>
                              </div>
                            </div>
                          </td>
                          <td> $3171</td>
                          <td> 2023-03-19</td>
                          <td> -$205</td>
                          <td>
                            {" "}
                            <div className=" relative flex items-center gap-4">
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
                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                              </svg>
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
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <div className="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full hover:bg-slate-500">
                                <BsThreeDotsVertical />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {" "}
                            <span>#20333</span>
                          </td>
                          <td>
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
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          </td>
                          <td>
                            <div className="flex items-center gap-4">
                              <div>
                                <img
                                  src={profile}
                                  alt="profile/img"
                                  className="w-8 h-8 rounded-full"
                                />
                              </div>
                              <div>
                                <span>Charles Cooper</span>
                                <p>Fight account night short.</p>
                              </div>
                            </div>
                          </td>
                          <td> $3171</td>
                          <td> 2023-03-19</td>
                          <td> -$205</td>
                          <td>
                            {" "}
                            <div className=" relative flex items-center gap-4">
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
                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                              </svg>
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
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <div className="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full hover:bg-slate-500">
                                <BsThreeDotsVertical />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {" "}
                            <span>#20333</span>
                          </td>
                          <td>
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
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          </td>
                          <td>
                            <div className="flex items-center gap-4">
                              <div>
                                <img
                                  src={profile}
                                  alt="profile/img"
                                  className="w-8 h-8 rounded-full"
                                />
                              </div>
                              <div>
                                <span>Charles Cooper</span>
                                <p>Fight account night short.</p>
                              </div>
                            </div>
                          </td>
                          <td> $3171</td>
                          <td> 2023-03-19</td>
                          <td> -$205</td>
                          <td>
                            {" "}
                            <div className=" relative flex items-center gap-4">
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
                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                              </svg>
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
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <div className="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full hover:bg-slate-500">
                                <BsThreeDotsVertical />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {" "}
                            <span>#20333</span>
                          </td>
                          <td>
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
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          </td>
                          <td>
                            <div className="flex items-center gap-4">
                              <div>
                                <img
                                  src={profile}
                                  alt="profile/img"
                                  className="w-8 h-8 rounded-full"
                                />
                              </div>
                              <div>
                                <span>Charles Cooper</span>
                                <p>Fight account night short.</p>
                              </div>
                            </div>
                          </td>
                          <td> $3171</td>
                          <td> 2023-03-19</td>
                          <td> -$205</td>
                          <td>
                            {" "}
                            <div className=" relative flex items-center gap-4">
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
                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                              </svg>
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
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <div className="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full hover:bg-slate-500">
                                <BsThreeDotsVertical />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default ViewUser;
