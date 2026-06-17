import { SidebarClose, SidebarOpen } from "lucide-react";

import { Button } from "~/components/ui/button";

import { HeaderSearch } from "./headerSearch";
import { HeaderButtonGroup } from "./headerButtonGroup";

type HeaderProps = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

export function Header({ sidebarOpen, toggleSidebar }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-5 border-b-1 border-gray-300 h-16">
      <Button variant="ghost" onClick={toggleSidebar}>
        {sidebarOpen ? <SidebarClose /> : <SidebarOpen />}
      </Button>
      <HeaderSearch />
      <HeaderButtonGroup />
    </header>
  );
}
