import { NavLink } from "react-router-dom";
import { SIDE_BAR_ITEMS, SideBarItem } from "./SIdebarItem";

export const Sidebar = () => {
  return (
    <>
      <div className="w-80">
        <div className="bg-blue-200 flex items-center  space-x-4 p-3 pl-4 pr-14">
          <img className="w-12 h-12" src="src/assets/mainlogo.png" alt="Logo" />
          <span className="text-blue-500 font-inter font-semibold text-lg">
            Patan Campus
          </span>
        </div>
        <div className="flex flex-col w-223 h-807 p-8  pb-511 items-start gap-9 flex-shrink-0 bg-[#25A6F2] h-[calc(100vh-72px)]">
          {SIDE_BAR_ITEMS.map((sidebar: SideBarItem) => (
            <NavLink
              key={sidebar.id}
              className={({ isActive }) =>
                isActive
                  ? "flex gap-[8px] items-center cursor-pointer text-[#fff]"
                  : "flex gap-[8px] items-center cursor-pointer text-[#B7E2FB]"
              }
              to={sidebar.to}
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6">{sidebar.icons}</div>
                <span className="text-[14px] text-system not-italic font-semibold">
                  {sidebar.title}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
