import InvoiceListMain from "../../components/InvoiceListMain";
import ListMain from "../../components/ListMain";
import Sidebar from "../../layout/Sidebar";
import TopBar from "../../layout/TopBar";

const List = () => {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <div className="lg:ml-60 ml-0  lg:w-[85.7vw] w-screen">
          <TopBar />
          <InvoiceListMain />
        </div>
      </div>
    </>
  );
};

export default List;
