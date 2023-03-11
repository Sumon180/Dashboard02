import Home from "./pages/Home";
import Sidebar from "./pages/Sidebar";
import TopBar from "./pages/TopBar";

function App() {
  return (
    <>
      <div className="">
        <div className="flex">
          <div className="fixed text-slate-200 w-60 h-screen border-r border-gray-400">
            <Sidebar />
          </div>
          <div className="text-slate-200 ml-60  h-screen">
            <TopBar />
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
