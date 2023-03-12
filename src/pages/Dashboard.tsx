import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";

const Dashboard = () => {
  const mode = useSelector(toggleDarkMode);

  return (
    <>
      
    </>
  );
};

export default Dashboard;
