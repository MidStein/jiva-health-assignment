import { Outlet } from "react-router";
import { Sidebar } from "../sidebar/sidebar";

export default function Layout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
