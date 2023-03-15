import UserListMain from "../../components/UserListMain";
import Sidebar from "../../layout/Sidebar";
import TopBar from "../../layout/TopBar";

const UserList = () => {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <div className="lg:ml-60 ml-0  lg:w-[85.7vw] w-screen">
          <TopBar />
          <UserListMain />
        </div>
      </div>
    </>
  );
};

export default UserList;
