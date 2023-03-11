import { AiOutlineMail } from "react-icons/ai";
import { TbFileInvoice, TbTypography } from "react-icons/tb";
import { MdOutlineContactPage } from "react-icons/md";
import { RxCardStackMinus, RxComponent1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="">
        <div className="">
          <h1 className="text-3xl my-3 px-3">Vuexy</h1>
          <div className="px-3 overflow-y-scroll h-[94vh] scroll-style">
            <ul className="flex flex-col gap-2 z-50">
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center justify-between w-full h-10 pl-2 bg-[#2c3951]  cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <div className="flex items-center gap-3">
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
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    <span className={`text-white`}>Dashboard</span>
                  </div>
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
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <span className={`text-slate-400`}>APPS & PAGES</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 hover:bg-[#2c3951]  cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <AiOutlineMail className="w-6 h-6" />

                  <span className={`text-white`}>Email</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
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
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>

                  <span className={`text-white`}>Chat</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>

                  <span className={`text-white`}>Calender</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center justify-between w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <div className="flex items-center gap-3">
                    <TbFileInvoice className="w-6 h-6" />

                    <span className={`text-white`}>Invoice</span>
                  </div>
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
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center justify-between w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <div className="flex items-center gap-3">
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

                    <span className={`text-white`}>User</span>
                  </div>
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
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center justify-between w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <div className="flex items-center gap-3">
                    <MdOutlineContactPage className="w-6 h-6" />

                    <span className={`text-white`}>Pages</span>
                  </div>
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
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <span className={`text-slate-400`}>UI ELEMENTS</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <TbTypography className="w-6 h-6" />

                  <span className={`text-white`}>Typography</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
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
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className={`text-white`}>Icons</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center justify-between w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <div className="flex items-center gap-3">
                    <RxCardStackMinus className="w-6 h-6" />

                    <span className={`text-white`}>Cards</span>
                  </div>
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
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center justify-between gap-3 w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <div className="flex items-center gap-3">
                    <RxComponent1 className="w-6 h-6" />

                    <span className={`text-white`}>Components</span>
                  </div>
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
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <span className={`text-slate-400`}>FORMS</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center justify-between w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <div className="flex items-center gap-3">
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
                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                      />
                    </svg>
                    <span className={`text-white`}>Form Elemens</span>
                  </div>
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
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
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
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>

                  <span className={`text-white`}>Form Layouts</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
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
                      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                    />
                  </svg>

                  <span className={`text-white`}>Form Validation</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <span className={`text-slate-400`}>CHARTS</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center justify-between w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <div className="flex items-center gap-3">
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
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                      />
                    </svg>

                    <span className={`text-white`}>Charts</span>
                  </div>
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
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <span className={`text-slate-400`}>OTHERS</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
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
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                  <span className={`text-white`}>Access Control</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center justify-between w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                >
                  <div className="flex items-center gap-3">
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
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                    <span className={`text-white`}>Nav Levels</span>
                  </div>
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
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
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
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                  <span className={`text-white`}>Disabled Menu</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
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
                      d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                    />
                  </svg>
                  <span className={`text-white`}>Raise Support</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li
                  className={`flex items-center gap-3 w-full h-10 pl-2 hover:bg-[#2c3951] cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
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
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  <span className={`text-white`}>Documentation</span>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
