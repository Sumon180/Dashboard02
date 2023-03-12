import { useSelector } from "react-redux";
import { toggleDarkMode } from "./app/darkModeSlice";
import Home from "./pages/Dashboard";
import Sidebar from "./layout/Sidebar";
import TopBar from "./layout/TopBar";

function App() {
  const mode = useSelector(toggleDarkMode);

  return (
    <>
      <div className="">
        <div className="flex">
          <div
            className={`fixed  w-60 h-screen border-r border-gray-400 ${
              mode ? "bg-black text-slate-300" : "bg-white text-slate-800"
            }`}
          >
            <Sidebar />
          </div>
          <div className="ml-60  h-screen">
            <TopBar />
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
