import { useState } from "react";
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
    fetch(`${API_BASE_URL}/familyMembers/total`),
  ]);

  const [users, totalFamilyMembers] = await Promise.all([
    usersResp.json(),
    totalFamilyMembersResp.json(),
  ]);

  return { users, totalFamilyMembers };
}

export default function UserManagement() {
  const { users, totalFamilyMembers } = useLoaderData<typeof loader>();
  const [searchQuery, setSearchQuery] = useState("");
  const [genderAgeFilter, setGenderAgeFilter] = useState("allStatus");
  const [activeStatus, setActiveStatus] = useState("allStatus");

  return (
    <div className="bg-gray-50 h-[calc(100vh-4rem)] p-5 overflow-auto">
      <UserManagementHeader />
      <MetricsGrid users={users} totalFamilyMembers={totalFamilyMembers} />
      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        genderAgeFilter={genderAgeFilter}
        setGenderAgeFilter={setGenderAgeFilter}
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
      />
      <UserList
        users={users}
        searchQuery={searchQuery}
        genderAgeFilter={genderAgeFilter}
        activeStatus={activeStatus}
      />
    </div>
  );
}
