import InvoiceEdit from "../../components/InvoiceEdit";
import Sidebar from "../../layout/Sidebar";
import TopBar from "../../layout/TopBar";

const Edit = () => {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <div className="lg:ml-60 ml-0  lg:w-[85.7vw] w-screen">
          <TopBar />
          <InvoiceEdit />
        </div>
      </div>
    </>
  );
};

export default Edit;
