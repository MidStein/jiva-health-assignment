import { Outlet } from "react-router";
import { Sidebar } from "../components/layout/sidebar/sidebar";
import { Header } from "../components/layout/header/header";
import { useState } from "react";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="flex-1">
        <Header sidebarOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Outlet />
      </div>
    </div>
  );
}
