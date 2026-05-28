import { Outlet } from "react-router";
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";
import { useState } from "react";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="flex-1">
        <Header/>
        <Outlet />
      </div>
    </div>
  );
}
