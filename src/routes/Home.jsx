import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

const Home = () => {
  return (
    <div className="w-full h-screen flex bg-background flex-col">
      <TopNav />
      <div className="flex-grow flex h-full p-6 pt-[80px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
