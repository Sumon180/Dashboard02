import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";
import profile from "../assets/image/profile.jpg";

const Chatmain = () => {
  const mode = useSelector(toggleDarkMode);

  return (
    <>
      <div
        className={`mt-14 ${
          mode ? "bg-[#141B2D] text-slate-300" : "bg-white text-slate-800"
        }`}
      >
        <div className="pt-10 pb-10">
          <div className="flex border rounded-md mx-5">
            <div className="w-[30rem] border-r">
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-3 border-b w-full px-5 py-5">
                  <div className="relative">
                    <img
                      src={profile}
                      alt="profile/img"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className=" absolute w-2 h-2 bg-green-600 rounded-full right-0 bottom-1"></span>
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent h-10 pl-4 border border-indigo-400 outline-none rounded-md "
                  />
                </div>
                <div className="px-5 overflow-y-scroll h-[73vh] scroll-style">
                  <h3 className="text-2xl my-4">Chat</h3>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center justify-between bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-32 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                      <div>
                        <span>12/2023</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-32 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                      <div>
                        <span>12/2023</span>
                      </div>
                    </li>
                  </ul>
                  <h3 className="text-2xl my-4">Contacts</h3>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2 px-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <span className=" w-36 truncate font-bold">
                            Charles Cooper
                          </span>
                          <p className="w-48 truncate">
                            Fight account night night night
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center border-b py-2 pl-5 w-full gap-3">
                <div className="flex items-center justify-between hover:bg-slate-700 rounded-md py-2">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={profile}
                        alt="profile/img"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                    <div>
                      <span className=" w-36 truncate font-bold">
                        Charles Cooper
                      </span>
                      <p className="w-48 truncate">
                        Fight account night night night
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <ul className="overflow-y-scroll h-[64vh] w-full scroll-style">
                  <li className="flex items-center justify-between my-3 ml-5">
                    <div className="flex items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className="max-w-[45rem] bg-slate-700 rounded-tr-2xl rounded-bl-2xl py-2 px-5">
                          Fight account night night night Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Nostrum eius quae
                          voluptates soluta necessitatibus officiis ratione, ut,
                          culpa facilis eaque autem. Laborum velit aspernatur
                          culpa consectetur sit distinctio, sed, accusamus
                          similique autem quam blanditiis pariatur consequuntur
                          voluptatum rerum quia iure. Accusantium voluptatibus,
                          aut voluptatem laboriosam sed pariatur assumenda sint?
                          Sit sint commodi atque eveniet enim laboriosam
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-row-reverse items-center justify-between mr-5">
                    <div className="flex flex-row-reverse items-start gap-4">
                      <div className="relative w-[10%]">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className="max-w-[45rem] bg-slate-700 rounded-tl-2xl rounded-br-2xl py-2 px-5">
                          Fight account night night night Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Nostrum eius quae
                          voluptates soluta necessitatibus officiis ratione, ut,
                          culpa facilis eaque autem. Laborum velit aspernatur
                          culpa consectetur sit distinctio, sed, accusamus sequi
                          esse itaque officiis dicta neque sit tenetur at
                          voluptates hic autem repudiandae fugiat est molestiae
                          illo. Dicta fugiat nesciunt dignissimos eveniet
                          suscipit saepe sequi quidem!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between my-3 ml-5 my-2">
                    <div className="flex items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className="max-w-[45rem] bg-slate-700 rounded-tr-2xl rounded-bl-2xl py-2 px-5">
                          Hello
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between my-3 ml-5 my-2">
                    <div className="flex items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className="max-w-[45rem] bg-slate-700 rounded-tr-2xl rounded-bl-2xl py-2 px-5">
                          Hello
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between my-3 ml-5 my-2">
                    <div className="flex items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className="max-w-[45rem] bg-slate-700 rounded-tr-2xl rounded-bl-2xl py-2 px-5">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Veritatis enim, voluptatum rerum laudantium esse
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between my-3 ml-5 my-2">
                    <div className="flex items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className="max-w-[45rem] bg-slate-700 rounded-tr-2xl rounded-bl-2xl py-2 px-5">
                          Hi there
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between my-3 ml-5 my-2">
                    <div className="flex items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className="max-w-[45rem] bg-slate-700 rounded-tr-2xl rounded-bl-2xl py-2 px-5">
                          Hello
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-row-reverse items-center justify-between mr-5 my-2">
                    <div className="flex flex-row-reverse items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className=" max-w-[45rem] bg-slate-700 rounded-tl-2xl rounded-br-2xl py-2 px-5">
                          Hi...
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-row-reverse items-center justify-between mr-5 my-2">
                    <div className="flex flex-row-reverse items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className=" max-w-[45rem] bg-slate-700 rounded-tl-2xl rounded-br-2xl py-2 px-5">
                          Hi...
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-row-reverse items-center justify-between mr-5 my-2">
                    <div className="flex flex-row-reverse items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className=" max-w-[45rem] bg-slate-700 rounded-tl-2xl rounded-br-2xl py-2 px-5">
                          Hi...
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-row-reverse items-center justify-between mr-5 my-2">
                    <div className="flex flex-row-reverse items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className=" max-w-[45rem] bg-slate-700 rounded-tl-2xl rounded-br-2xl py-2 px-5">
                          Hi...
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-row-reverse items-center justify-between mr-5 my-2">
                    <div className="flex flex-row-reverse items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className=" max-w-[45rem] bg-slate-700 rounded-tl-2xl rounded-br-2xl py-2 px-5">
                          Hi...
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-row-reverse items-center justify-between mr-5 my-2">
                    <div className="flex flex-row-reverse items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className=" max-w-[45rem] bg-slate-700 rounded-tl-2xl rounded-br-2xl py-2 px-5">
                          Hi...
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-row-reverse items-center justify-between mr-5 my-2">
                    <div className="flex flex-row-reverse items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className=" max-w-[45rem] bg-slate-700 rounded-tl-2xl rounded-br-2xl py-2 px-5">
                          Hi...
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-row-reverse items-center justify-between mr-5 my-2">
                    <div className="flex flex-row-reverse items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className=" max-w-[45rem] bg-slate-700 rounded-tl-2xl rounded-br-2xl py-2 px-5">
                          Hi...
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-row-reverse items-center justify-between mr-5 my-2">
                    <div className="flex flex-row-reverse items-start gap-4">
                      <div className="relative w-8 h-8">
                        <img
                          src={profile}
                          alt="profile/img"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className=" max-w-[45rem] bg-slate-700 rounded-tl-2xl rounded-br-2xl py-2 px-5">
                          Hi...
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="my-10 mx-5">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="bg-transparent h-10 pl-4 border border-indigo-400 outline-none rounded-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatmain;
