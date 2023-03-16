import profile from "../assets/image/profile.jpg";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

const UserListMain = () => {
  const mode = useSelector(toggleDarkMode);
  const [pop, setPop] = useState(false);

  const popup = () => {
    setPop(!pop);
  };

  return (
    <>
      <div
        className={`mt-14 ${
          mode ? "bg-[#141B2D] text-slate-300" : "bg-white text-slate-800"
        }`}
      >
        <div className="pt-10 pb-6">
          <div className="flex flex-wrap justify-between">
            <div
              className={`${
                mode
                  ? "bg-slate-800 text-slate-300"
                  : "bg-slate-200 text-slate-800"
              } mx-5 mb-7 rounded-lg w-[20%] min-w-[15rem] h-36 `}
            >
              <div className="flex justify-between p-5">
                <div>
                  <p>Session</p>
                  <p className="text-2xl">
                    21,459 <span className="text-lg text-green-400">(29%)</span>
                  </p>
                  <p>Total Users</p>
                </div>
                <div>
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
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${
                mode
                  ? "bg-slate-800 text-slate-300"
                  : "bg-slate-200 text-slate-800"
              } mx-5 mb-5 w-[20%] min-w-[15rem] h-36 rounded-lg`}
            >
              <div className="flex justify-between p-5">
                <div>
                  <p>Paid Users</p>
                  <p className="text-2xl">
                    21,459 <span className="text-lg text-green-400">(29%)</span>
                  </p>
                  <p>Last week analytics</p>
                </div>
                <div>
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
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${
                mode
                  ? "bg-slate-800 text-slate-300"
                  : "bg-slate-200 text-slate-800"
              } mx-5 mb-5 w-[20%] min-w-[15rem] h-36 rounded-lg`}
            >
              <div className="flex justify-between p-5">
                <div>
                  <p>Active Users</p>
                  <p className="text-2xl">
                    21,459 <span className="text-lg text-green-400">(29%)</span>
                  </p>
                  <p>Last week analytics</p>
                </div>
                <div>
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
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${
                mode
                  ? "bg-slate-800 text-slate-300"
                  : "bg-slate-200 text-slate-800"
              } mx-5 mb-5 w-[20%] min-w-[15rem] h-36 rounded-lg`}
            >
              <div className="flex justify-between p-5">
                <div>
                  <p>Pending Users</p>
                  <p className="text-2xl">
                    459 <span className="text-lg text-green-400">(29%)</span>
                  </p>
                  <p>Last week analytics</p>
                </div>
                <div>
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
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border rounded-md mx-5">
            <div className="">
              <h2 className="mx-5 text-2xl pt-4">Search Filter</h2>
              <div className="flex items-center justify-between border-b px-5 py-4">
                <input
                  type="text"
                  placeholder="Search Invoice"
                  className="outline-none bg-transparent border h-10 pl-3 rounded-md w-96"
                />
                <input
                  type="text"
                  placeholder="Search Invoice"
                  className="outline-none bg-transparent border h-10 pl-3 rounded-md w-96"
                />
                <input
                  type="text"
                  placeholder="Search Invoice"
                  className="outline-none bg-transparent border h-10 pl-3 rounded-md w-96"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between border-b py-3 px-5 w-full gap-3">
                <div className="flex items-center">
                  <button
                    className={`flex items-center justify-center gap-4 bg-blue-500 w-44 h-9 cursor-pointer  rounded hover:bg-blue-gray-100`}
                  >
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
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    ADD NEW USER
                  </button>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    type="text"
                    placeholder="Search Invoice"
                    className="outline-none bg-transparent border h-10 pl-3 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Select Status"
                    className="outline-none bg-transparent border h-10 pl-3 rounded-md"
                  />
                </div>
              </div>
              <div className="overflow-y-scroll h-[85vh] scroll-style">
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
                          <div
                            onClick={popup}
                            className="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full hover:bg-slate-500"
                          >
                            <BsThreeDotsVertical />
                          </div>
                          <div
                            className={`${
                              pop ? "block" : "hidden"
                            } absolute top-10 -left-10 w-[9rem] h-[8rem] bg-slate-500`}
                          >
                            <p>Download</p>
                            <p>Edit</p>
                            <p>Duplicate</p>
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
    </>
  );
};

export default UserListMain;
