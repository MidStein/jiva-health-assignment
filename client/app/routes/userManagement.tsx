import type { Route } from "./+types/userManagement";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User Management" },
    { name: "description", content: "User Management section" },
  ];
}

export default function userManagement() {
}
