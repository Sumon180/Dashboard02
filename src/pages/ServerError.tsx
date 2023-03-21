import serverError from "../assets/image/404.png";

const ServerError = () => {
  return (
    <>
      <div className="flex items-center justify-center overflow-x-hidden h-screen bg-blue-900">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl text-white">Internal server error 👨🏻‍💻</h2>
          <p className=" text-white">Oops, something went wrong!</p>
          <button className="uppercase bg-blue-600 px-5 py-2">
            Back to Home
          </button>
        </div>
        <img src={serverError} alt="" />
      </div>
    </>
  );
};

export default ServerError;
