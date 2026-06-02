import { useLoaderData } from "react-router";

import type { Route } from "./+types/userMgmt";
import UserManagementHeader from "~/components/userMgmt/header";
import MetricsGrid from "~/components/userMgmt/metricsGrid";
import FilterBar from "~/components/userMgmt/filterBar";
import UserList from "~/components/userMgmt/userList";
import type { User } from "~/lib/types";
import { API_BASE_URL } from "~/lib/api";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User Management | Jiva Health" },
    { name: "description", content: "User Management section" },
  ];
}

export async function loader(): Promise<{
  users: User[];
  totalFamilyMembers: number;
}> {
  const [usersResp, totalFamilyMembersResp] = await Promise.all([
    fetch(`${API_BASE_URL}/users`),
    fetch(`${API_BASE_URL}/totalFamilyMembers`),
  ]);

  const [users, totalFamilyMembers] = await Promise.all([
    usersResp.json(),
    totalFamilyMembersResp.json(),
  ]);

  return { users, totalFamilyMembers };
}

export default function UserManagement() {
  const { users, totalFamilyMembers } = useLoaderData<typeof loader>();

  return (
    <div className="bg-gray-50 h-[calc(100vh-4rem)] p-5">
      <UserManagementHeader />
      <MetricsGrid users={users} totalFamilyMembers={totalFamilyMembers}/>
      <FilterBar />
      <UserList />
    </div>
  );
}
