import notAuthorise from "../assets/image/401.png";
import TopBar from "../layout/TopBar";

const NotAuthorise = () => {
  return (
    <>
      <div className="flex items-center justify-center overflow-x-hidden h-screen bg-slate-800">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl text-white">You are not authorized! 🔐</h2>
          <p className=" text-white">
            You do not have permission to view this page using the credentials
            that you have provided while login. Please contact your site
            administrator.
          </p>
          <button className="uppercase bg-blue-600 px-5 py-2">
            Back to Home
          </button>
        </div>
        <img src={notAuthorise} alt="" />
      </div>
    </>
  );
};

export default NotAuthorise;
