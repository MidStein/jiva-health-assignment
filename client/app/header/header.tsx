import { SidebarClose } from "lucide-react";

import { HeaderSearch } from "./headerSearch";
import { HeaderButtonGroup } from "./headerButtonGroup";

export function Header() {
  return (
    <div className="flex justify-between items-center px-5 border-b-1 border-gray-300 h-16">
      <SidebarClose className="h-4 w-4" />
      <HeaderSearch />
      <HeaderButtonGroup />
    </div>
  );
}
