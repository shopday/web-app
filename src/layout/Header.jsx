import { useState, useEffect } from "react";
import useLanguage from "../hooks/useLanguage";
import { Box, Nav, Anchor, Header, Menu, Avatar } from "grommet";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../lib/reducer/authenticationSlice";
import { FormDown } from "grommet-icons";

const HeaderComponent = () => {
  const { isAuthenticated, name } = useSelector((state) => ({
    isAuthenticated: state.authentication.isAuthenticated,
    name: state.authentication.name,
  }));

  const dispath = useDispatch();
  if (!isAuthenticated) {
    dispath(logout());
  }

  console.log(isAuthenticated);

  const { nextLanguage, toggleLanguage } = useLanguage();

  return (
    <header className="mx-auto container">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <a href="/" className="-m-1.5 p-1.5 text-black">
          <h1 className="text-2xl font-semibold">shopday</h1>
        </a>
        <div className="flex gap-4 items-center">
          {isAuthenticated ? (
            <UserMenu name={name} />
          ) : (
            [
              <Anchor href="/login" color="black" key="login" weight="normal">
                Login
              </Anchor>,
              <Anchor
                href="/register"
                color="black"
                key="register"
                weight="normal"
              >
                Register
              </Anchor>,
            ]
          )}

          <Anchor
            color="black"
            onClick={() => toggleLanguage()}
            weight="normal"
          >
            {nextLanguage}
          </Anchor>
        </div>
      </nav>
    </header>
  );
};

const menuItem = (label, href) => {
  return { label: label, href: href };
};

const LogoutLink = () => {
  const dispath = useDispatch();
  const logoutCall = (e) => {
    e.preventDefault();
    dispath(logout());
  };
  return (
    <Anchor
      href="#"
      onClick={(e) => logoutCall(e)}
      color="black"
      weight="normal"
    >
      Logout
    </Anchor>
  );
};

const UserMenu = (props) => {
  const items = [
    menuItem("Dashboard", "/user/dashboard"),
    menuItem(<LogoutLink />),
  ];
  return (
    <Menu
      items={items}
      dropProps={{
        align: { top: "bottom", left: "left" },
      }}
    >
      <Box direction="row" align="center" gap="small">
        <span>Hello, {props.name}</span>
        <FormDown />
      </Box>
    </Menu>
  );
};

export default HeaderComponent;
