import React from "react";
import {
  NavbarStyle,
  UserOptions,
  UserProfile,
} from "../../core-ui/Navigation.styles";
import { FaAngleDown, FaUserAlt, FaRegArrowAltCircleRight } from "react-icons/fa";
import { AuthContext } from "../../services/AuthProvider";

const Navbar = ({ close, title, userInitials }) => {
  const [userOptions, setUserOptions] = React.useState(false);
  const { onLogout } = React.useContext(AuthContext);

  return (
    <NavbarStyle close={close}>
      <div style={{ height: "50px" }}>
        <h2 style={{ fontWeight: "bold" }}> {title} </h2>
      </div>
      <div
        style={{
          height: "50px",
          width: "70px",
          justifyContent: "center",
          alignContent: "center",
          position: "absolute",
          right: "0",
        }}
      >
        <svg height={50} width={50}>
          <circle cx="25" cy="25" r="20" fill="#002C3E" />
          <text x="12" y="32" fontFamily="Verdana" fontSize="20" fill="white">
            {userInitials}
          </text>
        </svg>
        <FaAngleDown onClick={() => setUserOptions(!userOptions)} />
      </div>
      {userOptions && (
        <UserOptions>
          <UserProfile className="row">
            <div className="col-sm-8">User Profile</div>{" "}
            <div className="col-sm-4">
              <FaUserAlt />
            </div>
          </UserProfile>
          <UserProfile className="row" onClick={onLogout}>
            <div className="col-sm-8">Log Out</div>{" "}
            <div className="col-sm-4">
              <FaRegArrowAltCircleRight />
            </div>
          </UserProfile>
        </UserOptions>
      )}
    </NavbarStyle>
  );
};

export default Navbar;
