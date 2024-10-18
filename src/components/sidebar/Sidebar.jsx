import React from "react";
import sidebarStyle from "../sidebar/sidebarStyle.module.css";
import Button from 'react-bootstrap/Button';
import { Link, Outlet } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className={sidebarStyle.sidebarWrp}>
        <div className={sidebarStyle.sidebarInner}>
          <ul className={sidebarStyle.sidebarList}>
            <li className={sidebarStyle.sidebarListNav}>
              <Link to="/netflix" >
                <div className={sidebarStyle.navIcn}>
                  <img src="/images/home.png" alt="home.png" />
                </div>
                <span>netflix</span>
              </Link>
            </li>
            <li className={sidebarStyle.sidebarListNav}>
              <Link to="/shoes"  >
                <div className={sidebarStyle.navIcn}>
                  <img src="/images/information.png" alt="information.png" />
                </div>
                <span>shoes</span>
              </Link>
            </li>
            {/* <li className={sidebarStyle.sidebarListNav}>
                <Link to ="/tableCompo"  >
                  <div className={sidebarStyle.navIcn}>
                    <img src="/images/information.png" alt="information.png" />
                  </div>
                  <span>tableCompo</span>
                </Link>
              </li> */}
            <li className={sidebarStyle.sidebarListNav}>
              <Link to="/props" >
                <div className={sidebarStyle.navIcn}>
                  <img src="/images/contact-mail.png" alt="contact-mail.png" />
                </div>
                <span>props</span>
              </Link>
            </li>
            <li className={sidebarStyle.sidebarListNav}>
              <Link to="/useStateMethod" >
                <div className={sidebarStyle.navIcn}>
                  <img src="/images/home.png" alt="home.png" />
                </div>
                <span>useStateMethod</span>
              </Link>
            </li>
            <li className={sidebarStyle.sidebarListNav}>
              <Link to="/propagation" >
                <div className={sidebarStyle.navIcn}>
                  <img src="/images/home.png" alt="home.png" />
                </div>
                <span>propagation</span>
              </Link>
            </li>
          </ul>
          <div className={sidebarStyle.sidebarBtn}>

            <Button variant="outline-primary">Collapse </Button>
          </div>
        </div>
      </div>
      <Outlet />
      {/* The <Outlet> renders the current route selected. */}
    </>
  );
};

export default Sidebar;
