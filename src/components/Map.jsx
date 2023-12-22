import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Data
import { skillData, resume } from "../data";
import { Link } from "react-router-dom";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import SocialLinks from "./SocialLinks";
import MapOfBay from "../images/CroppedMapOfBay.png";

export default function Maps() {
  const { theme } = useAppContext();
  let mapUrl = "https://www.gmapgis.com/viewer.html?fcode=rhR1tfOKQnZ";

  return (
    <Element name={"Maps"} id="maps">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Bay Area Map</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            <Col className="d-none d-md-block text-center">
                <img
                src={MapOfBay}
                alt="MapOfBay"
                loading="lazy"
                className="mx-auto"
                style={{ width: "30rem", height: "30rem" }}
                />
            </Col>
          </Row>
          <Row className="mt-3 align-items-center">
            <div className="d-flex align-items-center justify-content-center">
              <Link to={mapUrl}>
                <Button
                  size="lg"
                  variant={
                    theme === "light" ? "outline-dark" : "outline-light"
                  }
                >
                  To Dynamic Map
                </Button>
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    </Element>
  );
}
