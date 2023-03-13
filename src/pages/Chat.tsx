import Chatmain from "../components/Chatmain";
import EmailMain from "../components/EmailMain";
import Sidebar from "../layout/Sidebar";
import TopBar from "../layout/TopBar";

const Chat = () => {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <div className="lg:ml-60 ml-0  lg:w-[85.7vw] h w-screen">
          <TopBar />
          <Chatmain />
        </div>
      </div>
    </>
  );
};

export default Chat;
