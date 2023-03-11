import profile from "../assets/image/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, toggleMode } from "../app/darkModeSlice";

const TopBar = () => {
  const mode = useSelector(toggleDarkMode);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`flex items-center justify-between fixed top-0 right-0 left-60  z-40 opacity-90 px-5 py-2 ${
          mode ? "bg-slate-800" : "bg-white"
        }`}
      >
        <div className="flex items-center justify-between bg-slate-800 z-50 rounded-md border px-7 py-2 w-full">
          <input
            type="text"
            placeholder="Search"
            className=" bg-transparent border pl-4"
          />
          <div className="flex items-center gap-5">
            <svg
              onClick={() => dispatch(toggleMode())}
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
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
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
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
            <div className="relative">
              <img
                src={profile}
                alt="profile/img"
                className="w-10 h-10 rounded-full"
              />
              <span className=" absolute w-2 h-2 bg-green-600 rounded-full right-0 bottom-1"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
