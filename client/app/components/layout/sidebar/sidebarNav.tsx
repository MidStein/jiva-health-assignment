import { useState } from "react";
import { NavLink, useLocation } from "react-router";

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

type SidebarNavProps = {
  sidebarOpen: boolean;
};

export function SidebarNav({ sidebarOpen }: SidebarNavProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="p-4 border-y-1 border-gray-300">
      <ul>
        <li className="mb-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex gap-2 rounded p-1 ${
                isActive && "bg-green-200 text-green-800"
              } ${sidebarOpen || "justify-center"}`
            }
          >
            <div title={sidebarOpen ? "" : "Dashboard"}>
              <LayoutDashboard />
            </div>{" "}
            {sidebarOpen && <span>Dashboard</span>}
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/organization"
            className={({ isActive }) =>
              `flex gap-2 rounded p-1 ${
                isActive && "bg-green-300 text-green-700"
              } ${sidebarOpen || "justify-center"}`
            }
          >
            <div title={sidebarOpen ? "" : "Organization"}>
              <Building2 />
            </div>{" "}
            {sidebarOpen && <span>Organization</span>}
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/user-management"
            className={({ isActive }) =>
              `flex gap-2 rounded p-1 ${
                (isActive || location.pathname === "/") &&
                "bg-green-300 text-green-700"
              } ${sidebarOpen || "justify-center"}`
            }
          >
            <div title={sidebarOpen ? "" : "User Management"}>
              <Users />
            </div>{" "}
            {sidebarOpen && <span>User Management</span>}
          </NavLink>
        </li>
        <li className="mb-2">
          {sidebarOpen ? (
            <button
              className="flex justify-between items-center w-full p-1"
              onClick={() => setOpen(!open)}
            >
              <span className="flex gap-2">
                <Briefcase />
                Services
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
          ) : (
            <span className="flex gap-2 justify-center p-1">
              <div title="Services">
                <Briefcase />
              </div>
            </span>
          )}
          {open && (
            <ul className="ms-4">
              <li className="mt-1 mb-1">
                <NavLink
                  to="services/service1"
                  className={({ isActive }) =>
                    `flex gap-2 rounded p-1 ${
                      isActive && "bg-green-300 text-green-700"
                    }`
                  }
                >
                  <Briefcase /> <span>Service 1</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="services/service2"
                  className={({ isActive }) =>
                    `flex gap-2 rounded p-1 ${
                      isActive && "bg-green-300 text-green-700"
                    }`
                  }
                >
                  <Briefcase /> <span>Service 2</span>
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-2">
          <NavLink
            to="/consultation"
            className={({ isActive }) =>
              `flex gap-2 rounded p-1 ${
                isActive && "bg-green-300 text-green-700"
              } ${sidebarOpen || "justify-center"}`
            }
          >
            <div title={sidebarOpen ? "" : "Consultation"}>
              <Stethoscope />
            </div>{" "}
            {sidebarOpen && <span>Consultation</span>}
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/lab-test-booking"
            className={({ isActive }) =>
              `flex gap-2 rounded p-1 ${
                isActive && "bg-green-300 text-green-700"
              } ${sidebarOpen || "justify-center"}`
            }
          >
            <div title={sidebarOpen ? "" : "Lab test Booking"}>
              <FlaskConical />
            </div>{" "}
            {sidebarOpen && <span>Lab test Booking</span>}
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/medicine-orders"
            className={({ isActive }) =>
              `flex gap-2 rounded p-1 ${
                isActive && "bg-green-300 text-green-700"
              } ${sidebarOpen || "justify-center"}`
            }
          >
            <div title={sidebarOpen ? "" : "Medicine orders"}>
              <Pill />
            </div>{" "}
            {sidebarOpen && <span>Medicine Orders</span>}
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/ambulance-booking"
            className={({ isActive }) =>
              `flex gap-2 rounded p-1 ${
                isActive && "bg-green-300 text-green-700"
              } ${sidebarOpen || "justify-center"}`
            }
          >
            <div title={sidebarOpen ? "" : "Ambulance booking"}>
              <Ambulance />
            </div>{" "}
            {sidebarOpen && <span>Ambulance booking</span>}
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/vendor-and-partners"
            className={({ isActive }) =>
              `flex gap-2 rounded p-1 ${
                isActive && "bg-green-300 text-green-700"
              } ${sidebarOpen || "justify-center"}`
            }
          >
            <div title={sidebarOpen ? "" : "Vendor & Partners"}>
              <Handshake />
            </div>{" "}
            {sidebarOpen && <span>Vendor &amp; Partners</span>}
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/report"
            className={({ isActive }) =>
              `flex gap-2 rounded p-1 ${
                isActive && "bg-green-300 text-green-700"
              } ${sidebarOpen || "justify-center"}`
            }
          >
            <div title={sidebarOpen ? "" : "Report"}>
              <FileText />
            </div>{" "}
            {sidebarOpen && <span>Report</span>}
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/user-access"
            className={({ isActive }) =>
              `flex gap-2 rounded p-1 ${
                isActive && "bg-green-300 text-green-700"
              } ${sidebarOpen || "justify-center"}`
            }
          >
            <div title={sidebarOpen ? "" : "User Access"}>
              <ShieldCheck />
            </div>{" "}
            {sidebarOpen && <span>User Access</span>}
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/setting"
            className={({ isActive }) =>
              `flex gap-2 rounded p-1 ${
                isActive && "bg-green-300 text-green-700"
              } ${sidebarOpen || "justify-center"}`
            }
          >
            <div title={sidebarOpen ? "" : "Setting"}>
              <Settings />
            </div>{" "}
            {sidebarOpen && <span>Setting</span>}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
