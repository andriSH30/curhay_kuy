import { Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import CustomButton from "../button/CustomButton.component";

import "./Navigation.style.scss";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="brand-name">
            Curhat Kuy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <CustomButton
                ButtonText="Masuk"
                ButtonType="primary"
                ButtonSize="small"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Navigation;
