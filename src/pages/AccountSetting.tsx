import AccountSettingMain from "../components/AccountSettingMain";
import Sidebar from "../layout/Sidebar";
import TopBar from "../layout/TopBar";

const AccountSetting = () => {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <div className="lg:ml-60 ml-0  lg:w-[85.7vw] w-screen">
          <TopBar />
          <AccountSettingMain />
        </div>
      </div>
    </>
  );
};

export default AccountSetting;
