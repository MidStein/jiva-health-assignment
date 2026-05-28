import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("", "routes/layout.tsx", [
    route("dashboard", "routes/section404.tsx", { id: "dashboard" }),
    route("organization", "routes/section404.tsx", { id: "organization" }),

    route("user-management", "routes/userManagement.tsx"),

    route("services/service1", "routes/section404.tsx", { id: "service1" }),
    route("services/service2", "routes/section404.tsx", { id: "service2" }),
    route("consultation", "routes/section404.tsx", { id: "consultation" }),
    route("lab-test-booking", "routes/section404.tsx", {
      id: "lab-test-booking",
    }),
    route("medicine-orders", "routes/section404.tsx", {
      id: "medicine-orders",
    }),
    route("ambulance-booking", "routes/section404.tsx", {
      id: "ambulance-booking",
    }),
    route("vendor-and-partners", "routes/section404.tsx", {
      id: "vendor-and-partners",
    }),
    route("report", "routes/section404.tsx", { id: "report" }),
    route("user-access", "routes/section404.tsx", { id: "user-access" }),
    route("setting", "routes/section404.tsx", { id: "setting" }),
  ]),
] satisfies RouteConfig;
