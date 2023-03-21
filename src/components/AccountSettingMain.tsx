import profile from "../assets/image/profile.jpg";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { SiAltiumdesigner } from "react-icons/si";

const AccountSettingMain = () => {
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
        <div className="pt-10 pb-6 mx-5">
          <div className="flex flex-wrap gap-3 mb-5">
            <button className="uppercase bg-blue-600 px-5 py-2">Account</button>
            <button className="uppercase bg-blue-600 px-5 py-2">
              Security
            </button>
            <button className="uppercase bg-blue-600 px-5 py-2">
              Billing & Plans
            </button>
            <button className="uppercase bg-blue-600 px-5 py-2">
              Notification
            </button>
            <button className="uppercase bg-blue-600 px-5 py-2">
              Connection
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <div
              className={`rounded-xl px-5 py-4 ${
                mode ? "bg-slate-800" : "bg-slate-200"
              }`}
            >
              <div className="flex flex-col gap-3 border-b pb-5">
                <h2 className="text-2xl">Profile Details</h2>
                <div className="flex items-center gap-5">
                  <img
                    src={profile}
                    alt=""
                    className="w-32 h-32 border-4 border-slate-800"
                  />
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <button className="uppercase bg-blue-600 px-5 py-2">
                        Upload New Photo
                      </button>
                      <button className="uppercase border border-blue-600 px-5 py-2">
                        Reset
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <p>Allowed JPG, GIF or PNG. Max size of 800K</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 py-5">
                <div className="flex flex-col gap-3 w-1/2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-transparent border border-blue-600 outline-none h-10 rounded pl-3"
                  />
                  <input
                    type="text"
                    className="bg-transparent border border-blue-600 outline-none h-10 rounded pl-3"
                  />
                  <input
                    type="text"
                    className="bg-transparent border border-blue-600 outline-none h-10 rounded pl-3"
                  />
                  <input
                    type="text"
                    className="bg-transparent border border-blue-600 outline-none h-10 rounded pl-3"
                  />
                  <input
                    type="text"
                    className="bg-transparent border border-blue-600 outline-none h-10 rounded pl-3"
                  />
                  <input
                    type="text"
                    className="bg-transparent border border-blue-600 outline-none h-10 rounded pl-3"
                  />
                </div>
                <div className="flex flex-col gap-3 w-1/2">
                  <input
                    type="text"
                    className="bg-transparent border border-blue-600 outline-none h-10 rounded pl-3"
                  />
                  <input
                    type="text"
                    className="bg-transparent border border-blue-600 outline-none h-10 rounded pl-3"
                  />
                  <input
                    type="text"
                    className="bg-transparent border border-blue-600 outline-none h-10 rounded pl-3"
                  />
                  <input
                    type="text"
                    className="bg-transparent border border-blue-600 outline-none h-10 rounded pl-3"
                  />
                  <input
                    type="text"
                    className="bg-transparent border border-blue-600 outline-none h-10 rounded pl-3"
                  />
                  <input
                    type="text"
                    className="bg-transparent border border-blue-600 outline-none h-10 rounded pl-3"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button className="uppercase bg-blue-600 px-5 py-2">
                  Save Changes
                </button>
                <button className="uppercase border border-blue-600 px-5 py-2">
                  Reset
                </button>
              </div>
            </div>
            <div
              className={`rounded-xl px-5 py-4 ${
                mode ? "bg-slate-800" : "bg-slate-200"
              }`}
            >
              <div className="flex flex-col gap-3 pb-5">
                <h2 className="text-2xl">Delete Account</h2>
                <div className="flex flex-col bg-red-900 opacity-80 text-red-400 px-3 py-2 rounded">
                  <p>Are you sure you want to delete your account?</p>
                  <p>
                    Once you delete your account, there is no going back. Please
                    be certain.
                  </p>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" name="" id="" />
                  <p>I confirm my account deactivition</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="uppercase bg-blue-600 px-5 py-2">
                  Deactivited account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettingMain;
