import comingsoon from "../assets/image/coming-soon.png";
import TopBar from "../layout/TopBar";

const ComingSoon = () => {
  return (
    <>
      <div className="flex items-center justify-center overflow-x-hidden h-screen bg-slate-800">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl text-white">We are launching soon 🚀</h2>
          <p className=" text-white">
            Our website is opening soon. Please register to get notified when
            it's ready!
          </p>
          <button className="uppercase bg-blue-600 px-5 py-2">Notify</button>
        </div>
        <img src={comingsoon} alt="" />
      </div>
    </>
  );
};

export default ComingSoon;
