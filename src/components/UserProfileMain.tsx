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
                    <div className="flex items-center gap-5">
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
            <button className="uppercase px-5 py-2">Team</button>
            <button className="uppercase px-5 py-2">Projects</button>
            <button className="uppercase px-5 py-2">Connected</button>
          </div>
          <div className="flex justify-between mx-5 gap-5 my-5">
            <div className="flex items-center flex-col w-4/12 gap-5">
              <div
                className={`flex rounded-xl ${
                  mode ? "bg-slate-800" : "bg-slate-200"
                }`}
              >
                <div className="p-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit dignissimos voluptas explicabo fugit quia ad maxime
                  odio quaerat. Velit modi nostrum laborum, ullam neque vitae
                  saepe sed. Distinctio dolore molestiae eveniet delectus a
                  ipsam nobis laborum hic, magni numquam accusamus, quia
                  tempora, autem aperiam! Accusamus accusantium placeat
                  perferendis aut debitis!
                  <ul>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                  </ul>
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
                  odio quaerat. Velit modi nostrum laborum, ullam neque vitae
                  saepe sed. Distinctio dolore molestiae eveniet delectus a
                  ipsam nobis laborum hic, magni numquam accusamus, quia
                  tempora, autem aperiam! Accusamus accusantium placeat
                  perferendis aut debitis!
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
              <div className="flex items-center gap-5">
                <div
                  className={`flex rounded-xl ${
                    mode ? "bg-slate-800" : "bg-slate-200"
                  }`}
                >
                  <div className="p-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Suscipit dignissimos voluptas explicabo fugit quia ad maxime
                    odio quaerat. Velit modi nostrum laborum, ullam neque vitae
                    saepe sed. Distinctio dolore molestiae eveniet delectus a
                    ipsam nobis laborum hic, magni numquam accusamus, quia
                    tempora, autem aperiam! Accusamus accusantium placeat
                    perferendis aut debitis!
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
                    odio quaerat. Velit modi nostrum laborum, ullam neque vitae
                    saepe sed. Distinctio dolore molestiae eveniet delectus a
                    ipsam nobis laborum hic, magni numquam accusamus, quia
                    tempora, autem aperiam! Accusamus accusantium placeat
                    perferendis aut debitis!
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
