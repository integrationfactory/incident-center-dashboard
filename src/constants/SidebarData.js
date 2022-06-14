import React from "react";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Incidents",
    path: "/",
    icon: <FaIcons.FaHome />,
    submenu: [],
  },
  {
    title: "Stats",
    path: "/stats",
    icon: <FaIcons.FaChartBar />,
    submenu: [],
  },
  {
    title: "Organizations",
    path: "/orgs",
    icon: <FaIcons.FaTasks />,
    submenu: [
      { title: "Organizations", path: "/orgs", icon: <FaIcons.FaTasks /> },
      { title: "Departments", path: "/departments", icon: <FaIcons.FaTasks /> },
      { title: "Users", path: "/users", icon: <FaIcons.FaTasks /> },
    ],
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <FaIcons.FaRocketchat />,
    submenu: [],
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FaIcons.FaRegChartBar />,
    submenu: [],
  },
];
