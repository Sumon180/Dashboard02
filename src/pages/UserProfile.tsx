import UserProfileMain from "../components/UserProfileMain";
import Sidebar from "../layout/Sidebar";
import TopBar from "../layout/TopBar";

const UserProfile = () => {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <div className="lg:ml-60 ml-0  lg:w-[85.7vw] w-screen">
          <TopBar />
          <UserProfileMain />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
