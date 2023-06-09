import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";

const InvoiceAdd = () => {
  const mode = useSelector(toggleDarkMode);

  return (
    <>
      <div
        className={`mt-14 ${
          mode ? "bg-[#141B2D] text-slate-300" : "bg-[#F8F7FA] text-slate-800"
        }`}
      >
        <div className={` pt-10 pb-6`}>
          <div className={` flex flex-col mx-5`}>
            <div className="w-full">
              <div className="lg:flex lg:flex-row flex flex-col gap-5">
                <div className="lg:w-[30%] w-full">
                  <div
                    className={`rounded-lg ${
                      mode
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    <div
                      className={`flex flex-col items-center justify-center gap-4 px-5 py-5
                      `}
                    >
                      <button className="bg-indigo-500 w-full py-2 rounded-md">
                        SEND INVOICE
                      </button>
                      <div className="flex items-center justify-between w-full gap-5 ">
                        <button className="bg-slate-900 hover:bg-indigo-500 w-full py-2 rounded-md">
                          PREVIEW
                        </button>
                        <button className="bg-slate-900 hover:bg-indigo-500 w-full py-2 rounded-md">
                          SAVE
                        </button>
                      </div>

                      <button className="bg-indigo-500 w-full py-2 rounded-md">
                        ADD PAYMENT
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div
                    className={`py-5 rounded-lg ${
                      mode
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    <div className="flex items-center justify-between px-5 pb-5 border-b">
                      <div className=" max-w-md">
                        <h3 className=" font-bold text-xl pb-4">Vuexy</h3>
                        <p>
                          Office 149, 450 South Brand Brooklyn San Diego County,
                          CA 91905, USA +1 (123) 456 7891, +44 (876) 543 2198
                        </p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl pb-4">
                          Invoice #5036
                        </h3>
                        <p>Date Issued: 2023-03-19</p>
                        <p>Due Date: 2023-03-25</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-5 py-5 border-b">
                      <div className=" max-w-md">
                        <h3 className=" font-bold text-lg pb-4">Invoice To:</h3>
                        <input
                          type="text"
                          placeholder="Search..."
                          className="bg-transparent h-10 w-full pl-4 border border-indigo-400 outline-none rounded-md my-5"
                        />
                        <p>Andrew Burns</p>
                        <p>Richardson and Sons LLC</p>
                        <p>78083 Laura Pines, Bhutan</p>
                        <p>(687) 660-2473</p>
                        <p>pwillis@cross.org</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg pb-4">Bill To:</h3>
                        <p>Total Due: $12,110.55</p>
                        <p>Bank Name: American Bank</p>
                        <p>Country: United States</p>
                        <p>IBAN: ETD95476213874685</p>
                        <p>SWIFT Code: BR91905</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-5 py-5 border-b">
                      <div className=" max-w-md">
                        <h3 className=" font-bold text-lg pb-4">Invoice To:</h3>
                        <input
                          type="text"
                          placeholder="Search..."
                          className="bg-transparent h-10 w-full pl-4 border border-indigo-400 outline-none rounded-md my-5"
                        />
                        <p>Andrew Burns</p>
                        <p>Richardson and Sons LLC</p>
                        <p>78083 Laura Pines, Bhutan</p>
                        <p>(687) 660-2473</p>
                        <p>pwillis@cross.org</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg pb-4">Bill To:</h3>
                        <p>Total Due: $12,110.55</p>
                        <p>Bank Name: American Bank</p>
                        <p>Country: United States</p>
                        <p>IBAN: ETD95476213874685</p>
                        <p>SWIFT Code: BR91905</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-5 py-5 border-b">
                      <div className=" max-w-md">
                        <p>
                          <span className=" font-bold">Salesperson:</span> Jenny
                          Parker
                        </p>
                        <p>Thanks for your business</p>
                      </div>
                      <div>
                        <p>Subtotal:$154.25</p>
                        <p>Discount: $00.00</p>
                        <p>Tax: $50.00</p>
                        <p>Total: $204.25</p>
                      </div>
                    </div>
                    <div className="px-5 py-10">
                      <p>
                        Note: It was a pleasure working with you and your team.
                        We hope you will keep us in mind for future freelance
                        projects. Thank You!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceAdd;
