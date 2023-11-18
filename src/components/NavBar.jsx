import React from "react";
import PropTypes from "prop-types";
import { useAppContext } from "../appContext";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Logo from "./defaultNavLogo.svg";
import SocialLinks from "./SocialLinks"; // Import SocialLinks component

const FixedNavSpacer = styled.div`
  height: var(--nav-height);
  background-color: #333;
`;

const DonateButton = styled(Button)`
  background-color: #4caf50;
  border-color: #4caf50;
  &:hover {
    background-color: #45a049;
    border-color: #45a049;
  }
`;

const propTypes = {
  Logo: PropTypes.node.isRequired,
};

const defaultProps = {
  Logo: Logo,
};

export default function NavBar({ Logo, navLinks }) {
  const { isExpanded, closeExpanded, toggleExpanded } = useAppContext();
  const { pathname } = useLocation();

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect
        expand="lg"
        expanded={isExpanded}
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt="Logo"
              src={Logo}
              width="35"
              height="35"
              className="rounded-circle"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              {pathname === "/"
                ? navLinks.to.map((el) => (
                    <Nav.Item key={el.id}>
                      <ScrollLink
                        to={el.to}
                        spy
                        activeClass="active"
                        className="nav-link"
                        onClick={closeExpanded}
                      >
                        {el.name}
                      </ScrollLink>
                    </Nav.Item>
                  ))
                : navLinks.routes.map((el) => (
                    <Nav.Item key={el.id}>
                      <Link
                        to={el.route}
                        className={
                          pathname === el.route ? "nav-link active" : "nav-link"
                        }
                        onClick={closeExpanded}
                      >
                        {el.name}
                      </Link>
                    </Nav.Item>
                  ))}
            </Nav>
            <Nav>
              <SocialLinks /> {/* Add SocialLinks component */}
              <DonateButton variant="success" href="#donate">
                Donate Now
              </DonateButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
