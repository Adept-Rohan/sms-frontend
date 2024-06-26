import { Sidebar } from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen overflow-y-auto bg-[#E7F5FE] w-full">
        <Outlet />
      </div>
    </div>
  );
};
