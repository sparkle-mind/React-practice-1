import React from "react";
import sidebarStyle from "../sidebar/sidebarStyle.module.css";
import Button from 'react-bootstrap/Button';
const Sidebar = () => {
  return (
    <>
      <div className={sidebarStyle.sidebarWrp}>
        <div className={sidebarStyle.sidebarInner}>
          <ul className={sidebarStyle.sidebarList}>
            <li className={sidebarStyle.sidebarListNav}>
              <a href="#">
                <div className={sidebarStyle.navIcn}>
                  <img src="/images/home.png" alt="home.png" />
                </div>
                <span>Home</span>
              </a>
            </li>
            <li className={sidebarStyle.sidebarListNav}>
              <a href="#">
                <div className={sidebarStyle.navIcn}>
                  <img src="/images/information.png" alt="information.png" />
                </div>
                <span>Abput</span>
              </a>
            </li>
            <li className={sidebarStyle.sidebarListNav}>
              <a href="#">
                <div className={sidebarStyle.navIcn}>
                  <img src="/images/contact-mail.png" alt="contact-mail.png" />
                </div>
                <span>Contact Us</span>
              </a>
            </li>
            <li className={sidebarStyle.sidebarListNav}>
              <a href="#">
                <div className={sidebarStyle.navIcn}>
                  <img src="/images/home.png" alt="home.png" />
                </div>
                <span>Home</span>
              </a>
            </li>
          </ul>
          <div className={sidebarStyle.sidebarBtn}>

             <Button variant="outline-primary">Collapse </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
