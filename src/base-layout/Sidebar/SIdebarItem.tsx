import { DashboardIcon } from "../../icons/DashboardIcon";
import { DepartmentIcon } from "../../icons/DepartmentIcon";
import { NoticeIcon } from "../../icons/NoticeIcon";
import { UserIcon } from "../../icons/UserIcon";

export interface SideBarItem {
  id: number;
  title: string;
  icons?: React.ReactNode | null;
  to: string;
}

export const SIDE_BAR_ITEMS: SideBarItem[] = [
  {
    id: 1,
    title: "Dashboard",
    icons: <DashboardIcon />,
    to: "/",
  },
  {
    id: 2,
    title: "Department",
    icons: <DepartmentIcon />,
    to: "/department",
  },
  {
    id: 3,
    title: "User",
    icons: <UserIcon />,
    to: "/user",
  },
  {
    id: 4,
    title: "Notice",
    icons: <NoticeIcon />,
    to: "/notice",
  },
] as const;
