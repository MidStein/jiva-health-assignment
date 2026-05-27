import { useState } from "react";
import { NavLink } from "react-router";

import {
  Ambulance,
  Briefcase,
  Building2,
  ChevronDown,
  FileText,
  FlaskConical,
  Handshake,
  LayoutDashboard,
  Pill,
  Settings,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

export function SidebarNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 border-b-1 border-gray-300">
      <ul>
        <li className="mb-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `flex gap-2 rounded p-1 ${
              isActive && "bg-green-300 text-green-700"
            }`}
          >
          <LayoutDashboard /> <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="mb-1">
          <NavLink
            to="/organization"
            className={({ isActive }) => `flex gap-2 rounded p-1 ${
              isActive && "bg-green-300 text-green-700"
            }`}
          >
          <Building2 /> <span>Organization</span>
          </NavLink>
        </li>
        <li className="mb-1">
          <NavLink
            to="/user-management"
            className={({ isActive }) => `flex gap-2 rounded p-1 ${
              isActive && "bg-green-300 text-green-700"
            }`}
          >
            <Users /> <span>User Management</span>
          </NavLink>
        </li>
        <li className="rounded p-1 mb-1">
          <button
            className="flex justify-between"
            onClick={() => setOpen(!open)}
          >
            <span className="flex gap-2">
              <Briefcase /> <span>Services</span>
            </span>{" "}
            <ChevronDown />
          </button>
          {open && (
            <ul className="ms-4">
              <li className="rounded p-1 mt-1 mb-1">Service 1</li>
              <li className="rounded px-1">Service 2</li>
            </ul>
          )}
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <Stethoscope /> <span>Consultation</span>
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <FlaskConical /> <span>Lab test Booking</span>
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <Pill /> <span>Medicine Orders</span>
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <Ambulance /> <span>Ambulance booking</span>
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <Handshake /> <span>Vendor &amp; Partners</span>
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <FileText /> <span>Report</span>
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <ShieldCheck /> <span>User Access</span>
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <Settings /> <span>Setting</span>
        </li>
      </ul>
    </div>
  );
}
