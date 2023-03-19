import profile from "../assets/image/profile.jpg";
import { BsSend } from "react-icons/bs";
import { RiSpam2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";

const EmailMain = () => {
  const mode = useSelector(toggleDarkMode);

  return (
    <>
      <div
        className={`mt-14 ${
          mode ? "bg-[#141B2D] text-slate-300" : "bg-[#F8F7FA] text-slate-800"
        }`}
      >
        <div className="pt-10 pb-6">
          <div
            className={`flex rounded-xl mx-5  ${
              mode ? "bg-slate-800" : "bg-slate-200"
            }`}
          >
            <div className="w-56 border-r">
              <div className="px-5 pt-5">
                <button
                  className={`bg-blue-500 w-44 h-9 cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  Compose
                </button>
                <ul className="flex flex-col gap-4 mt-8 ">
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <span>Inbox</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BsSend className="w-5 h-5" />

                    <span>Sent</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>

                    <span>Draft</span>
                  </li>
                  <li className="flex items-center gap-3">
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
                    <span>Starred</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <RiSpam2Line className="w-5 h-5" />
                    <span>Spam</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>

                    <span>Trash</span>
                  </li>
                  <li className="flex items-center gap-3 mt-8">
                    <span>LABELS</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Personal</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-700 rounded-full"></span>
                    <span>Company</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
                    <span>Important</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Private</span>
                  </li>
                </ul>
              </div>
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
                  className="outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center justify-between border-b py-3 px-5 w-full gap-3">
                <input type="checkbox" name="" id="" />

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
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>

              <div className="overflow-y-scroll h-[85vh] scroll-style">
                <ul className="">
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b py-3 px-5">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" name="" id="" />
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
                      <div className="relative">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <span>Charles Cooper</span>
                      <p>Fight account night short.</p>
                    </div>
                    <div>
                      <span>12/2023</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailMain;
