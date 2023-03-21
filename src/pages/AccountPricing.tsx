import PricingMain from "../components/PricingMain";
import Sidebar from "../layout/Sidebar";
import TopBar from "../layout/TopBar";

const AccountPricing = () => {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <div className="lg:ml-60 ml-0  lg:w-[85.7vw] w-screen">
          <TopBar />
          <PricingMain />
        </div>
      </div>
    </>
  );
};

export default AccountPricing;
