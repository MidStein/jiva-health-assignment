import Fuse from "fuse.js";

import UserCard from "./userCard";

import type { UserType } from "./User";
import { useMemo } from "react";

interface UserListProps {
  users: UserType[];
  searchQuery: string;
  genderAgeFilter: string;
  activeStatus: string;
}

const getAge = (dob: Date) => {
  const today = new Date();
  const birthDate = new Date(dob);

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
};

export default function UserList({
  users,
  searchQuery,
  genderAgeFilter,
  activeStatus,
}: UserListProps) {
  const fuse = useMemo(
    () =>
      new Fuse(users, {
        keys: ["name", "email", "phoneNumber"],
        threshold: 0.4,
      }),
    [users],
  );

  const fuzzedUsers = searchQuery
    ? fuse.search(searchQuery).map(({ item }) => item)
    : users;

  return fuzzedUsers
    .filter(
      (user) => activeStatus === "allStatus" || user.status === activeStatus,
    )
    .filter((user) => {
      if (genderAgeFilter === "allGendersAges") return true;

      if (genderAgeFilter === "MALE" || genderAgeFilter === "FEMALE") {
        return user.gender === genderAgeFilter;
      }

      if (user.dob) {
        const age = getAge(user.dob);

        if (genderAgeFilter === "13-17") return age >= 13 && age <= 17;
        if (genderAgeFilter === "18-35") return age >= 18 && age <= 35;
        if (genderAgeFilter === "36-59") return age >= 36 && age <= 59;
        if (genderAgeFilter === "60+") return age >= 60;
      }

      return false;
    })
    .map((user) => <UserCard user={user} key={user.id} />);
}
