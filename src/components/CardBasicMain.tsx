import card1 from "../assets/image/card1.png";
import card2 from "../assets/image/card2.png";
import card3 from "../assets/image/card3.png";
import phone from "../assets/image/phone.png";
import watch from "../assets/image/watch.jpg";
import profile from "../assets/image/profile.jpg";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";
import { useState } from "react";

const CardBasicMain = () => {
  const mode = useSelector(toggleDarkMode);
  const [card, setCard] = useState(false);

  const cardd = () => {
    setCard(!card);
    console.log("Hello");
  };

  return (
    <>
      <div
        className={`mt-14 ${
          mode ? "bg-[#141B2D] text-slate-300" : "bg-[#F8F7FA] text-slate-800"
        }`}
      >
        <div className={` pt-10 pb-6`}>
          <div className={`flex flex-col mx-5`}>
            <div className="flex flex-col gap-5">
              <h2 className=" text-2xl">Basic Cards</h2>
              <div className="flex items-start justify-between gap-5">
                <div
                  className={`rounded-lg w-4/12 ${
                    mode
                      ? "bg-slate-800 text-slate-300"
                      : "bg-slate-200 text-slate-800"
                  }`}
                >
                  <img src={card1} alt="" />

                  <div className="px-5">
                    <h5 className="font-bold text-xl my-5">
                      Influencing The Influencer
                    </h5>
                    <p className="mb-5">
                      Cancun is back, better than ever! Over a hundred Mexico
                      resorts have reopened and the state tourism minister
                      predicts Cancun will draw as many visitors in 2006 as it
                      did two years ago.
                    </p>
                  </div>
                </div>
                <div
                  className={`rounded-lg w-4/12 ${
                    mode
                      ? "bg-slate-800 text-slate-300"
                      : "bg-slate-200 text-slate-800"
                  }`}
                >
                  <img src={card2} alt="" />

                  <div className="px-5">
                    <div>
                      <img src={profile} alt="" className="w-24 h-24 -mt-10" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between my-5">
                        <div>
                          <h5 className="font-bold text-xl">Robert Meyer</h5>
                          <p>London, UK</p>
                        </div>
                        <button className="uppercase bg-blue-600 px-3 py-2">
                          Send Request
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-10">
                        <div>
                          <p className="mb-5">18 mutual friends</p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src={profile}
                            alt=""
                            className="w-10 h-10 -mt-10 rounded-full border border-slate-800"
                          />
                          <img
                            src={profile}
                            alt=""
                            className="w-10 h-10 -mt-10 rounded-full border border-slate-800 -mx-2"
                          />
                          <img
                            src={profile}
                            alt=""
                            className="w-10 h-10 -mt-10 rounded-full border border-slate-800"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`rounded-lg w-4/12 ${
                    mode
                      ? "bg-slate-800 text-slate-300"
                      : "bg-slate-200 text-slate-800"
                  }`}
                >
                  <img src={card3} alt="" />

                  <div className="px-5">
                    <div>
                      {" "}
                      <h5 className="font-bold text-xl my-5">
                        Popular Uses Of The Internet
                      </h5>
                      <p className="mb-5">
                        Although cards can support multiple actions, UI
                        controls, and an overflow menu.
                      </p>
                    </div>
                    <div
                      onClick={cardd}
                      className={`${
                        mode
                          ? "border-b border-slate-700"
                          : "border-b border-slate-300"
                      } flex items-center justify-between w-full h-10 cursor-pointer  rounded hover:bg-blue-gray-100"
                        
                    `}
                    >
                      <div>
                        <span className=" text-indigo-500">Details</span>
                      </div>
                      <div>
                        {card ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <p className={`${card ? "block" : "hidden"}`}>
                      I'm a thing. But, like most politicians, he promised more
                      than he could deliver. You won't have time for sleeping,
                      soldier, not with all the bed making you'll be doing. Then
                      we'll go with that data file! Hey, you add a one and two
                      zeros to that or we walk! You're going to do his laundry?
                      I've got to find a way to escape.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-5">
                <div
                  className={`flex rounded-lg w-1/2 ${
                    mode
                      ? "bg-slate-800 text-slate-300"
                      : "bg-slate-200 text-slate-800"
                  }`}
                >
                  <img src={phone} alt="" className="w-56 h-56 px-5 py-5" />

                  <div className="px-5">
                    <h5 className="font-bold text-xl my-5">
                      Apple iPhone 11 Pro
                    </h5>
                    <p className="my-5">
                      Apple iPhone 11 Pro smartphone. Announced Sep 2019.
                      Features 5.8″ display Apple A13 Bionic
                    </p>
                    <p>
                      Price : $<span>899</span>
                    </p>
                  </div>
                </div>
                <div
                  className={`flex flex-row-reverse rounded-lg w-1/2 ${
                    mode
                      ? "bg-slate-800 text-slate-300"
                      : "bg-slate-200 text-slate-800"
                  }`}
                >
                  <img src={watch} alt="" className="w-56 h-56 px-5 py-5" />

                  <div className="px-5">
                    <h5 className="font-bold text-xl my-5">
                      Stumptown Roasters
                    </h5>
                    <p className="mb-5">
                      Before there was a United States of America, there were
                      coffee houses, because how are you supposed to build.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-5">
                <div
                  className={`rounded-lg overflow-hidden w-4/12 ${
                    mode
                      ? "bg-slate-800 text-slate-300"
                      : "bg-slate-200 text-slate-800"
                  }`}
                >
                  <img src={card1} alt="" className="w-full h-32" />

                  <div className="px-5">
                    <h5 className="font-bold text-xl">Apple Watch</h5>
                    <p className="my-5 font-semibold">$249.40</p>
                    <p className="mb-5">
                      3.1GHz 6-core 10th-generation Intel Core i5 processor,
                      Turbo Boost up to 4.5GHz
                    </p>
                  </div>
                  <button className="uppercase w-full bg-blue-600 px-3 py-2">
                    Contact Now
                  </button>
                </div>
                <div
                  className={`flex flex-row-reverse overflow-hidden rounded-lg w-8/12 ${
                    mode
                      ? "bg-slate-800 text-slate-300"
                      : "bg-slate-200 text-slate-800"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center py-20 px-24 bg-slate-700">
                    <div className="text-center mb-10">
                      <p>
                        $<span className="text-6xl">899</span>USD
                      </p>
                      <p>5 Tips For Offshore Software Development</p>
                    </div>
                    <button className="uppercase bg-blue-600 px-3 py-2">
                      Contact Now
                    </button>
                  </div>

                  <div className="px-5 w-3/4">
                    <h5 className="font-bold text-xl my-5">
                      Lifetime Membership
                    </h5>
                    <p className="mb-5">
                      Here, I focus on a range of items and features that we use
                      in life without giving them a second thought such as Coca
                      Cola, body muscles and holding ones own breath. Though,
                      most of these notes are not fundamentally necessary, they
                      are such that you can use them for a good laugh, at a
                      drinks party or for picking up women or men.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-5">
                <div
                  className={`rounded-lg w-4/12 ${
                    mode
                      ? "bg-slate-800 text-slate-300"
                      : "bg-slate-200 text-slate-800"
                  }`}
                >
                  <div className="px-5">
                    <h5 className="font-bold text-xl my-5">
                      Influencing The Influencer
                    </h5>
                    <p className="mb-5">
                      Computers have become ubiquitous in almost every facet of
                      our lives. At work, desk jockeys spend hours in front of
                      their desktops, while delivery people scan bar codes with
                      handhelds and workers in the field stay in touch.
                    </p>
                    <p className="my-5">
                      If you're in the market for new desktops, notebooks, or
                      PDAs, there are a myriad of choices.
                    </p>
                  </div>
                  <button className="uppercase bg-blue-600 px-3 py-2">
                    Contact Now
                  </button>
                </div>
                <div
                  className={`rounded-lg w-4/12 ${
                    mode
                      ? "bg-slate-800 text-slate-300"
                      : "bg-slate-200 text-slate-800"
                  }`}
                >
                  <div className="px-5">
                    <div>
                      <div className="my-5">
                        <div>
                          <h5 className="font-bold text-xl">
                            The Best Answers
                          </h5>
                          <p className="my-5">
                            If you are looking for a new way to promote your
                            business that won't cost you more money, maybe
                            printing is one of the options you won't resist.
                          </p>
                        </div>
                        <p>
                          become fast, easy and simple. If you want your
                          promotional material to be an eye-catching
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-10">
                        <div>
                          <p className="mb-5">18 mutual friends</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 pb-5">
                      <button className="uppercase bg-blue-600 px-3 py-2">
                        Contact Now
                      </button>
                      <button className="uppercase bg-blue-600 px-3 py-2">
                        Contact Now
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className={`rounded-lg w-4/12 ${
                    mode
                      ? "bg-slate-800 text-slate-300"
                      : "bg-slate-200 text-slate-800"
                  }`}
                >
                  <div className="flex items-center flex-col px-5 my-5">
                    <div className="flex items-center flex-col">
                      {" "}
                      <h5 className="font-bold text-xl">Support</h5>
                      <p className="mb-5 text-center">
                        According to us blisters are a very common thing and we
                        come across them very often in our daily lives. It is a
                        very common occurrence like cold or fever depending upon
                        your lifestyle.
                      </p>
                    </div>
                    <button className="uppercase bg-blue-600 px-3 py-2">
                      Contact Now
                    </button>
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

export default CardBasicMain;
