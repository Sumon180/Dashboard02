import DashboardMain from "../components/DashboardMain";
import Sidebar from "../layout/Sidebar";
import TopBar from "../layout/TopBar";

const Preview = () => {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <div className="lg:ml-60 ml-0  lg:w-[85.7vw] w-screen">
          <TopBar />
          <DashboardMain />
        </div>
      </div>
    </>
  );
};

export default Preview;
