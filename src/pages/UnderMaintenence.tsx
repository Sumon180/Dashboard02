import underMaintenance from "../assets/image/under-maintenance.png";

const UnderMaintenence = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-x-hidden h-screen bg-blue-900">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl text-white">Under Maintenance! 🚧</h2>
          <p className=" text-white">
            Sorry for the inconvenience but we're performing some maintenance at
            the moment
          </p>
          <button className="uppercase bg-blue-600 px-5 py-2">
            Back to Home
          </button>
        </div>
        <img src={underMaintenance} alt="" />
      </div>
    </>
  );
};

export default UnderMaintenence;
