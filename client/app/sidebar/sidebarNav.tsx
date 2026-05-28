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
    <div className="p-4 border-y-1 border-gray-300">
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
              <li className="rounded p-1 mt-1 mb-1">
                <NavLink
                  to="services/service1"
                  className={({ isActive }) => `flex gap-2 rounded p-1 ${
                    isActive && "bg-green-300 text-green-700"
                  }`}
                >
                  <Briefcase /> <span>Service 1</span>
                </NavLink>
              </li>
              <li className="rounded px-1">
                <NavLink
                  to="services/service2"
                  className={({ isActive }) => `flex gap-2 rounded p-1 ${
                    isActive && "bg-green-300 text-green-700"
                  }`}
                >
                  <Briefcase /> <span>Service 2</span>
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <NavLink
            to="/consultation"
            className={({ isActive }) => `flex gap-2 rounded p-1 ${
              isActive && "bg-green-300 text-green-700"
            }`}
          >
            <Stethoscope /> <span>Consultation</span>
          </NavLink>
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <NavLink
            to="/lab-test-booking"
            className={({ isActive }) => `flex gap-2 rounded p-1 ${
              isActive && "bg-green-300 text-green-700"
            }`}
          >
            <FlaskConical /> <span>Lab test Booking</span>
          </NavLink>
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <NavLink
            to="/medicine-orders"
            className={({ isActive }) => `flex gap-2 rounded p-1 ${
              isActive && "bg-green-300 text-green-700"
            }`}
          >
            <Pill /> <span>Medicine Orders</span>
          </NavLink>
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <NavLink
            to="/ambulance-booking"
            className={({ isActive }) => `flex gap-2 rounded p-1 ${
              isActive && "bg-green-300 text-green-700"
            }`}
          >
            <Ambulance /> <span>Ambulance booking</span>
          </NavLink>
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <NavLink
            to="/vendor-and-partners"
            className={({ isActive }) => `flex gap-2 rounded p-1 ${
              isActive && "bg-green-300 text-green-700"
            }`}
          >
            <Handshake /> <span>Vendor &amp; Partners</span>
          </NavLink>
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <NavLink
            to="/report"
            className={({ isActive }) => `flex gap-2 rounded p-1 ${
              isActive && "bg-green-300 text-green-700"
            }`}
          >
            <FileText /> <span>Report</span>
          </NavLink>
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <NavLink
            to="/user-access"
            className={({ isActive }) => `flex gap-2 rounded p-1 ${
              isActive && "bg-green-300 text-green-700"
            }`}
          >
            <ShieldCheck /> <span>User Access</span>
          </NavLink>
        </li>
        <li className="flex gap-2 rounded p-1 mb-1">
          <NavLink
            to="/setting"
            className={({ isActive }) => `flex gap-2 rounded p-1 ${
              isActive && "bg-green-300 text-green-700"
            }`}
          >
            <Settings /> <span>Setting</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
