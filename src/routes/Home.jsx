import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <TopNav />
      <div className="flex-grow flex p-6 pt-[80px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
