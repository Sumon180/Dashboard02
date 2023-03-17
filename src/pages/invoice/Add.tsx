import InvoiceAdd from "../../components/InvoiceAdd";
import Sidebar from "../../layout/Sidebar";
import TopBar from "../../layout/TopBar";

const Add = () => {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <div className="lg:ml-60 ml-0  lg:w-[85.7vw] w-screen">
          <TopBar />
          <InvoiceAdd />
        </div>
      </div>
    </>
  );
};

export default Add;
