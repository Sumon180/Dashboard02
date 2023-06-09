import EmailMain from "../components/EmailMain";
import Sidebar from "../layout/Sidebar";
import TopBar from "../layout/TopBar";

const Email = () => {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <div className="lg:ml-60 ml-0  lg:w-[85.7vw] w-screen">
          <TopBar />
          <EmailMain />
        </div>
      </div>
    </>
  );
};

export default Email;
