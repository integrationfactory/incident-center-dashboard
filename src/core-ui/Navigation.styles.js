import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  background-color: #fff;
  padding-left: ${({ close }) => (close ? "270px" : "80px")};
  border-bottom: 1px solid grey;
  transition: 0.2s;
`;

export const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  margin-left: ${({ close }) => (close ? "320px" : "90px")};
  color: #000;
  transition: 0.2s;
`;

export const SidebarMenu = styled.div`
  width: ${({ close }) => (close ? "300px" : "70px")};
  height: 100vh;
  background-color: #002c3e;
  position: fixed;
  top: 0;
  transition: 0.2s;
  overflow: scroll initial;
`;

export const MenuList = styled.ul`
  gap: 1px;
  list-style-type: none;
  padding: 0;
`;

export const MenuItems = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  list-style-type: none;
`;

export const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  color: #ffffff;
  padding-left: 2rem;

  &:hover {
    color: #fff;
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const MenuItemDisplay =
  styled.div >
  `
  display: flex;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  color: #ffffff;
  padding-left: 2rem;
  padding-bottom: ${({ close }) => (close ? "1rem" : "0")};; 

  &:hover {
    color: #fff;
    font-weight: bold;
    text-decoration: underline;
  }
`;
export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  img {
    width: 90%;
  }
`;

export const SidebarBottom = styled.div`
  position: absolute;
  bottom: 1rem;
`;

export const MainContent = styled.div`
  display: flex;
  width: 100%;
  padding-left: ${({ close }) => (close ? "270px" : "80px")};
  align-items: left;
  justify-content: center;
  font-size: 50px;
  height: 100vh;
  transition: 0.2s;
`;
export const UserOptions = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 192px;
  height: 101px;
  right: 10px;
  top: 3.7rem;
  z-index: 99;
  background: #ffffff;
  border: 1px solid #bbbcba;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const UserProfile = styled.div`
  width: 100%;
  height: 45px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  align-items: center;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  padding-left: 15px;
  padding-right: 0px;
  margin-right: 0;

  color: #000000;
`;

export const MainContentContainer = styled.div`
    background: #EEE;
    width: 100%;
    height: 100vh;
`

export const MainContentDisplay = styled.div`
  width: 90%;
  height: 75vh;
  background: white;
  position: relative;
  left: 5%;
  margin-top: 3%;
`
