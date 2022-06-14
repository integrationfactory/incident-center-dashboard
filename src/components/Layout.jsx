import React from "react";
import { MainContent } from "../core-ui/Navigation.styles";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";

const Layout = ({ children, title }) => {
  const [close, setClose] = React.useState(true);

  return (
    <>
      <Navbar close={close} title={title} userInitials={"SP"}/>
      <Sidebar setClose={setClose} close={close} />
      <MainContent close={close} title={title}>{children}</MainContent>
    </>
  );
};
export default Layout;
