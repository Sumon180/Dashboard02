import InvoicePreview from "../../components/InvoicePreview";
import Sidebar from "../../layout/Sidebar";
import TopBar from "../../layout/TopBar";

const Preview = () => {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <div className="lg:ml-60 ml-0  lg:w-[85.7vw] w-screen">
          <TopBar />
          <InvoicePreview />
        </div>
      </div>
    </>
  );
};

export default Preview;
