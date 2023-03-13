import DashboardMain from "../components/DashboardMain";
import Sidebar from "../layout/Sidebar";
import TopBar from "../layout/TopBar";

function Dashboard() {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <Sidebar />

        <div className="lg:ml-60 ml-0  lg:w-[85.7vw]">
          <TopBar />
          <DashboardMain />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
