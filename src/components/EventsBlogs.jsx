import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Data
import { skillData, resume } from "../data";
import { Link } from "react-router-dom";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import SocialLinks from "./SocialLinks";

export default function EventsBlogs() {
  const { theme } = useAppContext();

  return (
    <Element name={"EventsBlogs"} id="eventsblogs">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Links</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            <div className="d-flex align-items-center justify-content-center">
              <SocialLinks />
            </div>
          </Row>
          <Row className="mt-3 align-items-center">
            <div className="d-flex align-items-center justify-content-center">
              <Link to="/All-Projects">
                <Button
                  size="lg"
                  variant={
                    theme === "light" ? "outline-dark" : "outline-light"
                  }
                >
                  To All Events/Blogs
                </Button>
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    </Element>
  );
}
