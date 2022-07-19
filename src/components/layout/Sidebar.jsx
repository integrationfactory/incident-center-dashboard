import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import {
  SidebarMenu,
  MenuItems,
  MenuItemLinks,
  LogoWrapper,
  MenuList,
  SidebarBottom,
  MenuItemDisplay,
} from "../../core-ui/Navigation.styles";
import { NavLink } from "react-router-dom";
import SisapLogo from "../../assets/logo-sisap-blanco.png"

const Sidebar = ({ setClose, close }) => {
  const showSidebar = () => {
    console.log(close);
    setClose(!close);
  };

  return (
    <SidebarMenu>
      <CDBSidebar textColor="#fff" backgroundColor="#002C3E">
        <CDBSidebarHeader
          prefix={<i className="fa fa-bars fa-large" onClick={showSidebar}></i>}
        >
          <LogoWrapper href="/events" className="brand-link">
            <img src={SisapLogo} alt="Sisap Logo" />
          </LogoWrapper>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/incidents" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Incidents</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/stats" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Stats</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/orgs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Organizations</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/departments" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Departments</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/reports" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Reports
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/settings" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Settings
              </CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
        <NavLink exact to="/support" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line" style={{color:"white"}}>
                Support
              </CDBSidebarMenuItem>
            </NavLink>
        </CDBSidebarFooter>
      </CDBSidebar>
    </SidebarMenu>
  );
};

export default Sidebar;
