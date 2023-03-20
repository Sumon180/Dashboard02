import HelpCenterMain from "../components/HelpCenterMain";
import Sidebar from "../layout/Sidebar";
import TopBar from "../layout/TopBar";

const HelpCenter = () => {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <div className="lg:ml-60 ml-0  lg:w-[85.7vw] w-screen">
          <TopBar />
          <HelpCenterMain />
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
