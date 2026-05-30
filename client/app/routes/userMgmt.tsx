import type { Route } from "./+types/userMgmt";
import UserManagementHeader from "~/components/userMgmt/header";
import MetricsGrid from "~/components/userMgmt/metricsGrid";
import FilterBar from "~/components/userMgmt/filterBar";
import UserList from "~/components/userMgmt/userList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User Management | Jiva Health" },
    { name: "description", content: "User Management section" },
  ];
}

export default function UserManagement() {
  return (
    <div className="bg-gray-50 h-[calc(100vh-4rem)] p-5">
      <UserManagementHeader />
      <MetricsGrid />
      <FilterBar />
      <UserList />
    </div>
  );
}
