import { useState } from "react";
import { useLoaderData } from "react-router";
import * as z from "zod";

import type { Route } from "./+types/userMgmt";
import UserManagementHeader from "~/components/userMgmt/header";
import MetricsGrid from "~/components/userMgmt/metricsGrid";
import FilterBar from "~/components/userMgmt/filterBar";
import UserList from "~/components/userMgmt/userList";
import { API_BASE_URL } from "~/lib/api";
import UserSchema, { type UserType } from "~/components/userMgmt/User";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "User Management | Jiva Health" },
    { name: "description", content: "User Management section" },
  ];
}

export async function loader(): Promise<{
  users: UserType[];
  totalFamilyMembers: number;
}> {
  const [usersResp, totalFamilyMembersResp] = await Promise.all([
    fetch(`${API_BASE_URL}/users`),
    fetch(`${API_BASE_URL}/familyMembers/total`),
  ]);

  if (!totalFamilyMembersResp.ok || !usersResp.ok) {
    throw new Response("Server error. Failed to load User Management data");
  }

  const [usersJson, totalFamilyMembersJson] = await Promise.all([
    usersResp.json(),
    totalFamilyMembersResp.json(),
  ]);

  const users = z.array(UserSchema).parse(usersJson);
  const totalFamilyMembers = z.number().parse(totalFamilyMembersJson);

  return { users, totalFamilyMembers };
}

export default function UserManagement() {
  const { users, totalFamilyMembers } = useLoaderData<typeof loader>();
  const [searchQuery, setSearchQuery] = useState("");
  const [genderAgeFilter, setGenderAgeFilter] = useState("allStatus");
  const [activeStatus, setActiveStatus] = useState("allStatus");

  return (
    <main className="bg-gray-50 h-[calc(100vh-4rem)] p-5 overflow-auto">
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
    </main>
  );
}
