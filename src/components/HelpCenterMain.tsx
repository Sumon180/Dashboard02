import rocket from "../assets/image/rocket.svg";
import gift from "../assets/image/gift.svg";
import keyboard from "../assets/image/keyboard.svg";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

const HelpCenterMain = () => {
  const mode = useSelector(toggleDarkMode);
  const [pop, setPop] = useState(false);

  const popup = () => {
    setPop(!pop);
  };

  return (
    <>
      <div
        className={`mt-14 ${
          mode ? "bg-[#141B2D] text-slate-300" : "bg-[#F8F7FA] text-slate-800"
        }`}
      >
        <div className="pt-10 pb-6 ">
          <div
            className={`flex rounded-xl mx-5 ${
              mode ? "bg-slate-800" : "bg-slate-200"
            }`}
          >
            <div className="w-full rounded-xl overflow-hidden drop-shadow-xl">
              <div className="flex items-center flex-col justify-center gap-3 bg-cyan-900 py-24">
                <h5 className="text-3xl">Hello, how can we help you?</h5>
                <input
                  type="text"
                  placeholder="Search a Question"
                  className="outline-none bg-transparent border h-10 lg:w-[40rem] w-48 pl-3 rounded-md"
                />
                <p>
                  Common troubleshooting topics: eCommerce, Blogging to payment
                </p>
              </div>
              <div className="flex items-center flex-col justify-center gap-3 my-24">
                <h6 className="text-2xl">Popular Articles</h6>
                <div className="flex items-center justify-center flex-wrap gap-6">
                  <div className="flex items-center justify-center flex-col gap-3 border w-96 h-64 rounded-lg">
                    <img src={rocket} alt="rocket" />
                    <h6 className="text-2xl">Getting Started</h6>
                    <div className="flex items-center justify-center flex-col">
                      <p>Whether you're new or you're a power</p>
                      <p>user, this article will…</p>
                    </div>
                    <button className="uppercase">Read more</button>
                  </div>
                  <div className="flex items-center justify-center flex-col gap-3 border w-96 h-64 rounded-lg">
                    <img src={gift} alt="rocket" />
                    <h6 className="text-2xl">First Steps</h6>
                    <div className="flex items-center justify-center flex-col">
                      <p>Are you a new customer wondering</p>
                      <p>how to get started?</p>
                    </div>
                    <button className="uppercase">Read more</button>
                  </div>
                  <div className="flex items-center justify-center flex-col gap-3 border w-96 h-64 rounded-lg">
                    <img src={keyboard} alt="rocket" />
                    <h6 className="text-2xl">Add External Content</h6>
                    <div className="flex items-center justify-center flex-col">
                      <p>This article will show you how to expand</p>
                      <p>the functionality of...</p>
                    </div>
                    <button className="uppercase">Read more</button>
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-col justify-center gap-3 my-24 bg-slate-700 py-24">
                <h6 className="text-2xl">Knowledge Base</h6>
                <div className="flex items-start justify-center flex-wrap gap-6">
                  <div className="flex items-start justify-center flex-col gap-3 pl-5 drop-shadow-lg hover:drop-shadow-none transition-all duration-300 bg-slate-800 w-80 h-64 rounded-lg">
                    <div className="flex items-center gap-3">
                      <img src={gift} alt="rocket" />
                      <h6 className="text-2xl">Getting Started</h6>
                    </div>
                    <div className="flex items-start justify-center flex-col">
                      <p>Are you a new customer wondering</p>
                      <p>how to get started?</p>
                    </div>
                    <button className="uppercase">14 articles</button>
                  </div>
                  <div className="flex items-start justify-center flex-col gap-3 pl-5 drop-shadow-lg hover:drop-shadow-none transition-all duration-300 bg-slate-800 w-80 h-64 rounded-lg">
                    <div className="flex items-center gap-3">
                      <img src={gift} alt="rocket" />
                      <h6 className="text-2xl">Orders</h6>
                    </div>
                    <div className="flex items-start justify-center flex-col">
                      <p>Are you a new customer wondering</p>
                      <p>how to get started?</p>
                    </div>
                    <button className="uppercase">4 articles</button>
                  </div>
                  <div className="flex items-start justify-center flex-col gap-3 pl-5 drop-shadow-lg hover:drop-shadow-none transition-all duration-300 bg-slate-800 w-80 h-64 rounded-lg">
                    <div className="flex items-center gap-3">
                      <img src={gift} alt="rocket" />
                      <h6 className="text-2xl">Safety and Security</h6>
                    </div>
                    <div className="flex items-start justify-center flex-col">
                      <p>Are you a new customer wondering</p>
                      <p>how to get started?</p>
                    </div>
                    <button className="uppercase">10 articles</button>
                  </div>
                  <div className="flex items-start justify-center flex-col gap-3 pl-5 drop-shadow-lg hover:drop-shadow-none transition-all duration-300 bg-slate-800 w-80 h-64 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-3">
                        <img src={gift} alt="rocket" />
                        <h6 className="text-2xl">Rules and Policies</h6>
                      </div>
                    </div>
                    <div className="flex items-start justify-center flex-col">
                      <p>Are you a new customer wondering</p>
                      <p>how to get started?</p>
                    </div>
                    <button className="uppercase">14 articles</button>
                  </div>
                  <div className="flex items-start justify-center flex-col gap-3 pl-5 drop-shadow-lg hover:drop-shadow-none transition-all duration-300 bg-slate-800 w-80 h-64 rounded-lg">
                    <div className="flex items-center gap-3">
                      <img src={gift} alt="rocket" />
                      <h6 className="text-2xl">Chats</h6>
                    </div>
                    <div className="flex items-start justify-center flex-col">
                      <p>Are you a new customer wondering</p>
                      <p>how to get started?</p>
                    </div>
                    <button className="uppercase">14 articles</button>
                  </div>
                  <div className="flex items-start justify-center flex-col gap-3 pl-5 drop-shadow-lg hover:drop-shadow-none transition-all duration-300 bg-slate-800 w-80 h-64 rounded-lg">
                    <div className="flex items-center gap-3">
                      <img src={gift} alt="rocket" />
                      <h6 className="text-2xl">Connections</h6>
                    </div>
                    <div className="flex items-start justify-center flex-col">
                      <p>Are you a new customer wondering</p>
                      <p>how to get started?</p>
                    </div>
                    <button className="uppercase">14 articles</button>
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

export default HelpCenterMain;
