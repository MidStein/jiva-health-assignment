import type { Route } from "./+types/section404";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User Management" },
    { name: "description", content: "User Management section" },
  ];
}

export default function section404() {
  return (
    <div>
      <div>
        This section is not implemented. It is not needed for this self-learning
        project.
      </div>
      <div>
        Go back to <NavLink to="/user-management">User Management</NavLink>.
      </div>
    </div>
  );
}
