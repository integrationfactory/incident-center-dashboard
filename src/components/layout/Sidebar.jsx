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
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Incidents</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Stats</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Organizations</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Reports
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Settings
              </CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
        <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Support
              </CDBSidebarMenuItem>
            </NavLink>
        </CDBSidebarFooter>
      </CDBSidebar>
    </SidebarMenu>
  );
};

export default Sidebar;
