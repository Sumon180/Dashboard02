import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";

const TypographyMain = () => {
  const mode = useSelector(toggleDarkMode);

  return (
    <>
      <div
        className={`mt-14 ${
          mode ? "bg-[#141B2D] text-slate-300" : "bg-[#F8F7FA] text-slate-800"
        }`}
      >
        <div className={` pt-10 pb-6`}>
          <div className={`flex flex-col  gap-5 mx-5`}>
            <div className="w-full flex flex-col">
              <div
                className={`rounded-lg ${
                  mode
                    ? "bg-slate-800 text-slate-300"
                    : "bg-slate-200 text-slate-800"
                }`}
              >
                <div
                  className={`px-5 py-5
                      `}
                >
                  <h1 className=" text-2xl">Headlines</h1>
                  <div>
                    <div className="mt-10">
                      <h1 className=" text-8xl mb-5">Heading 1</h1>
                      <p>
                        font-size: 6rem / line-height: 7rem / font-weight: 500
                      </p>
                    </div>
                    <div className="mt-10">
                      <h1 className=" text-2xl mb-5">Heading 2</h1>
                      <p>
                        font-size: 6rem / line-height: 7rem / font-weight: 500
                      </p>
                    </div>
                    <div className="mt-10">
                      <h1 className=" text-3xl mb-5">Heading 3</h1>
                      <p>
                        font-size: 6rem / line-height: 7rem / font-weight: 500
                      </p>
                    </div>
                    <div className="mt-10">
                      <h1 className=" text-4xl mb-5">Heading 4</h1>
                      <p>
                        font-size: 6rem / line-height: 7rem / font-weight: 500
                      </p>
                    </div>
                    <div className="mt-10">
                      <h1 className=" text-5xl mb-5">Heading 5</h1>
                      <p>
                        font-size: 6rem / line-height: 7rem / font-weight: 500
                      </p>
                    </div>
                    <div className="mt-10">
                      <h1 className=" text-6xl mb-5">Heading 6</h1>
                      <p>
                        font-size: 6rem / line-height: 7rem / font-weight: 500
                      </p>
                    </div>
                  </div>
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
                <div className="px-5 pb-5">
                  <h4 className=" text-2xl">Texts</h4>
                  <div className=" mt-10 flex flex-col gap-5">
                    <div className="flex gap-40">
                      <h1 className=" text-xl">text-subtitle-1</h1>
                      <div>
                        <p className=" text-lg">
                          Cupcake ipsum dolor sit amet fruitcake donut
                          chocolate.
                        </p>
                        <p className=" font-normal">
                          font-size: 1rem / line-height: 1.75rem / font-weight:
                          400
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-40">
                      <h1 className=" text-xl">text-subtitle-2</h1>
                      <div>
                        <p className=" text-lg">
                          Cupcake ipsum dolor sit amet fruitcake donut
                          chocolate.
                        </p>
                        <p className=" font-normal">
                          font-size: 1rem / line-height: 1.75rem / font-weight:
                          400
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-40">
                      <h1 className=" text-xl">text-subtitle-3</h1>
                      <div>
                        <p className=" text-lg">
                          Cupcake ipsum dolor sit amet fruitcake donut
                          chocolate.
                        </p>
                        <p className=" font-normal">
                          font-size: 1rem / line-height: 1.75rem / font-weight:
                          400
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-40">
                      <h1 className=" text-xl">text-subtitle-4</h1>
                      <div>
                        <p className=" text-lg">
                          Cupcake ipsum dolor sit amet fruitcake donut
                          chocolate.
                        </p>
                        <p className=" font-normal">
                          font-size: 1rem / line-height: 1.75rem / font-weight:
                          400
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-40">
                      <h1 className=" text-xl">text-subtitle-5</h1>
                      <div>
                        <p className=" text-lg">
                          Cupcake ipsum dolor sit amet fruitcake donut
                          chocolate.
                        </p>
                        <p className=" font-normal">
                          font-size: 1rem / line-height: 1.75rem / font-weight:
                          400
                        </p>
                      </div>
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

export default TypographyMain;
