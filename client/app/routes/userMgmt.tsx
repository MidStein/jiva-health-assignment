import { useState } from "react";
import { useLoaderData } from "react-router";
import * as z from "zod";

import type { Route } from "./+types/userMgmt";
import UserManagementHeader from "~/components/userMgmt/header/header";
import MetricsGrid from "~/components/userMgmt/metricsGrid";
import FilterBar from "~/components/userMgmt/filterBar";
import UserList from "~/components/userMgmt/userList";
import { API_BASE_URL } from "~/lib/api";
import UserSchema, { type UserType } from "~/components/userMgmt/User";

export function meta({}: Route.MetaArgs) {
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

  if (!usersResp.ok || !totalFamilyMembersResp.ok) {
    console.error(
      "Server did not return ok response for /users or /familyMembersTotal",
    );
    throw new Response("Server error. Failed to load User Management data", {
      status: Math.max(usersResp.status, totalFamilyMembersResp.status),
    });
  }

  const [usersJson, totalFamilyMembersJson] = await Promise.all([
    usersResp.json(),
    totalFamilyMembersResp.json(),
  ]);

  const users = usersJson
    .map((user: any) => UserSchema.safeParse(user))
    .filter(
      (res: z.SafeParseReturnType<UserType, z.output<typeof UserSchema>>) => {
        if (!res.success) console.error(res.error);
        return res.success;
      },
    )
    .map(
      (res: z.SafeParseReturnType<UserType, z.output<typeof UserSchema>>) =>
        res.data,
    );

  const totalFamilyMembers = z.number().safeParse(totalFamilyMembersJson);
  if (!totalFamilyMembers.success) {
    console.error("Server did not return totalFamilyMembers as a number");
    throw new Error("Server error. Failed to load User Management data");
  }

  return { users, totalFamilyMembers: totalFamilyMembers.data };
}

export default function UserManagement() {
  const { users, totalFamilyMembers } = useLoaderData<typeof loader>();
  const [searchQuery, setSearchQuery] = useState("");
  const [genderAgeFilter, setGenderAgeFilter] = useState("allGendersAges");
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
