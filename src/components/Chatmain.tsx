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
                    className="bg-transparent h-10 w-full pl-4 border border-indigo-400 outline-none rounded-md "
                  />
                </div>
                <div className="px-5 overflow-y-scroll h-[73vh] scroll-style">
                  <h3 className="text-2xl my-4">Chat</h3>
                  <ul className="flex flex-col gap-2">
                    <li
                      className={`${
                        mode ? "bg-slate-700" : "bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                    <li
                      className={`${
                        mode ? "hover:bg-slate-700" : "hover:bg-slate-200"
                      } flex items-center justify-between rounded-md py-2 px-5`}
                    >
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
                <div className="flex items-center justify-between  py-2">
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
                <ul className="overflow-y-scroll h-[64vh] w-full scroll-style ">
                  <div className="mx-5">
                    <li
                      className={` flex items-center justify-between my-3 ml-5`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative w-8 h-8">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <p
                            className={`${
                              mode ? "bg-slate-700" : "bg-slate-200"
                            } max-w-[45rem] rounded-tr-2xl rounded-bl-2xl py-2 px-5`}
                          >
                            Fight account night night night Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Nostrum eius
                            quae voluptates soluta necessitatibus officiis
                            ratione, ut, culpa facilis eaque autem. Laborum
                            velit aspernatur culpa consectetur sit distinctio,
                            sed, accusamus similique autem quam blanditiis
                            pariatur consequuntur voluptatum rerum quia iure.
                            Accusantium voluptatibus, aut voluptatem laboriosam
                            sed pariatur assumenda sint? Sit sint commodi atque
                            eveniet enim laboriosam
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
                          <p
                            className={`${
                              mode ? "bg-slate-700" : "bg-slate-200"
                            } max-w-[45rem] rounded-tl-2xl rounded-br-2xl py-2 px-5`}
                          >
                            orem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi dignissimos rerum veritatis quod quasi
                            necessitatibus illum, quisquam dolore nihil ipsa
                            aperiam delectus cumque porro illo optio nostrum
                            perspiciatis qui aspernatur harum iste minima?
                            Maiores numquam vitae quas ex impedit provident ut
                            consequuntur, excepturi id pariatur mollitia esse
                            quisquam distinctio itaque!
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
                          <p
                            className={`${
                              mode ? "bg-slate-700" : "bg-slate-200"
                            } max-w-[45rem] rounded-tl-2xl rounded-br-2xl py-2 px-5`}
                          >
                            orem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi dignissimos rerum veritatis quod quasi
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
                          <p
                            className={`${
                              mode ? "bg-slate-700" : "bg-slate-200"
                            } max-w-[45rem] rounded-tl-2xl rounded-br-2xl py-2 px-5`}
                          >
                            orem ipsum
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
                          <p
                            className={`${
                              mode ? "bg-slate-700" : "bg-slate-200"
                            } max-w-[45rem] rounded-tl-2xl rounded-br-2xl py-2 px-5`}
                          >
                            Lorem
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
                          <p
                            className={`${
                              mode ? "bg-slate-700" : "bg-slate-200"
                            } max-w-[45rem] rounded-tl-2xl rounded-br-2xl py-2 px-5`}
                          >
                            orem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi dignissimos
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
                          <p
                            className={`${
                              mode ? "bg-slate-700" : "bg-slate-200"
                            } max-w-[45rem] rounded-tl-2xl rounded-br-2xl py-2 px-5`}
                          >
                            orem ipsum dolor
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      className={` flex items-center justify-between my-3 ml-5`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative w-8 h-8">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <p
                            className={`${
                              mode ? "bg-slate-700" : "bg-slate-200"
                            } max-w-[45rem] rounded-tr-2xl rounded-bl-2xl py-2 px-5`}
                          >
                            Hello!!!!!!!
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      className={` flex items-center justify-between my-3 ml-5`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative w-8 h-8">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <p
                            className={`${
                              mode ? "bg-slate-700" : "bg-slate-200"
                            } max-w-[45rem] rounded-tr-2xl rounded-bl-2xl py-2 px-5`}
                          >
                            Hello!!!!!!!
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      className={` flex items-center justify-between my-3 ml-5`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative w-8 h-8">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <p
                            className={`${
                              mode ? "bg-slate-700" : "bg-slate-200"
                            } max-w-[45rem] rounded-tr-2xl rounded-bl-2xl py-2 px-5`}
                          >
                            Hello!!!!!!!
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      className={` flex items-center justify-between my-3 ml-5`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative w-8 h-8">
                          <img
                            src={profile}
                            alt="profile/img"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div>
                          <p
                            className={`${
                              mode ? "bg-slate-700" : "bg-slate-200"
                            } max-w-[45rem] rounded-tr-2xl rounded-bl-2xl py-2 px-5`}
                          >
                            Hello!!!!!!!
                          </p>
                        </div>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
              <div
                className={`${
                  mode ? "bg-slate-700" : "bg-slate-200"
                } flex items-center my-10 mx-5 h-14 border border-indigo-400 rounded-md`}
              >
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="bg-transparent outline-none w-full h-full pl-4"
                />
                <div className="flex items-center gap-1 mr-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-indigo-500">
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
                        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-indigo-500">
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
                        d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                      />
                    </svg>
                  </div>
                  <button className="bg-indigo-400 py-2 px-5 rounded-md">
                    Send
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

export default Chatmain;
