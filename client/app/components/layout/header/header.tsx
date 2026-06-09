import { SidebarClose, SidebarOpen } from "lucide-react";

import { HeaderSearch } from "./headerSearch";
import { HeaderButtonGroup } from "./headerButtonGroup";

type HeaderProps = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

export function Header({ sidebarOpen, toggleSidebar }: HeaderProps) {
  return (
    <div className="flex justify-between items-center px-5 border-b-1 border-gray-300 h-16">
      {sidebarOpen ? (
        <div
          onClick={toggleSidebar}
          className="p-2 rounded cursor-pointer hover:bg-gray-300"
        >
          <SidebarClose className="h-4 w-4" />
        </div>
      ) : (
        <div
          onClick={toggleSidebar}
          className="p-2 rounded cursor-pointer hover:bg-gray-300"
        >
          <SidebarOpen className="h-4 w-4" />
        </div>
      )}
      <HeaderSearch />
      <HeaderButtonGroup />
    </div>
  );
}
