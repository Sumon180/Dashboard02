import comingsoon from "../assets/image/404.png";

const PageNotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center overflow-x-hidden h-screen bg-blue-900">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl text-white">Page Not Found :(</h2>
          <p className=" text-white">
            Oops! 😖 The requested URL was not found on this server.
          </p>
          <button className="uppercase bg-blue-600 px-5 py-2">
            Back to Home
          </button>
        </div>
        <img src={comingsoon} alt="" />
      </div>
    </>
  );
};

export default PageNotFound;
