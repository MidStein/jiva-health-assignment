import { SidebarHeader } from "./sidebarHeader";
import { SidebarNav } from "./sidebarNav";
import { SidebarFooter } from "./sidebarFooter";

type Props = {
  sidebarOpen: boolean;
};

export function Sidebar({ sidebarOpen }: Props) {
  return (
    <div
      className={`h-screen flex-shrink-0 flex flex-col border-r-1 border-gray-300 transition-all duration-300 truncate
        ${sidebarOpen ? "w-[275px]" : "w-[70px]"}`}
    >
      <SidebarHeader sidebarOpen={sidebarOpen} />
      <SidebarNav sidebarOpen={sidebarOpen} />
      <SidebarFooter sidebarOpen={sidebarOpen} />
    </div>
  );
}
