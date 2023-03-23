import CardBasicMain from "../../components/CardBasicMain";
import Sidebar from "../../layout/Sidebar";
import TopBar from "../../layout/TopBar";

const BasicCard = () => {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <div className="lg:ml-60 ml-0  lg:w-[85.7vw] w-screen">
          <TopBar />
          <CardBasicMain />
        </div>
      </div>
    </>
  );
};

export default BasicCard;
