import { SidebarHeader } from "./sidebarHeader";
import { SidebarNav } from "./sidebarNav";
import { SidebarFooter } from "./sidebarFooter";

type Props = {
  sidebarOpen: boolean;
};

export function Sidebar({ sidebarOpen }: Props) {
  return (
    <div className={`h-screen flex-shrink-0 flex flex-col border-r-1 border-gray-300 ${ sidebarOpen  ? "w-[255px]" : "w-[70px]"}`}>
      <SidebarHeader sidebarOpen={sidebarOpen} />
      <SidebarNav />
      <SidebarFooter />
    </div>
  );
}
