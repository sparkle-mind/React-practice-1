import React from "react";
import headerCustomStyle from "../header-custom/headerCustomStyle.module.css";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const HeaderCustom = () => {
  return (
    <>
      <header className={`${headerCustomStyle.headerCustomWrp}`}>
        <div className={headerCustomStyle.headerCustomInner}>
          <div className={["container"]}>
            <Row className={headerCustomStyle.navRow}>
              <Col sm={9} className={headerCustomStyle.navCol}>
                <div className={headerCustomStyle.navColIn}>
                  <Form.Control
                    type="search"
                    placeholder="Search (Cntrl + /)"
                    className=" mr-sm-2"
                  />
                </div>
              </Col>
              <Col sm={3} className={headerCustomStyle.navCol}>
                <div className={headerCustomStyle.navColIn}>
                  <ul className={headerCustomStyle.navColRight}>
                    <li>
                      <a href="#">
                        <img src="/images/language.png" alt="language.png" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/images/notification.png"
                          alt="notification.png"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/profile.png" alt="notiprofile.png" />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderCustom;
