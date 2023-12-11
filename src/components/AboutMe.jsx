import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo, sidInfo, abhiInfo, adiInfo, lukeInfo, mehakInfo, danielInfo } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import GroupHSP from "../images/GroupHSP.jpg"
import SidProfPic from "../images/SidProfPic.png"
import AbhiProfPic from "../images/AbhiPic.jpeg"
import MehakProfPic from "../images/MehakPic.jpeg"
import AdiProfPic from "../images/AdiSquarePic.png"
import DanielProfPic from "../images/DanielPic.jpg"
import LukeProfPic from "../images/LukeSquarePic.png"
import HSPLogo from "./hsp.png"

const StyledAboutMe = styled.section`
  p {
    font-size: 1rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;
function AboutPersonComponent(image1, description1, image2, description2) {
  return (
    <Row>
      <Col className="d-none d-md-block text-center">
        <img
          src={image1}
          alt="ProfileImage"
          loading="lazy"
          className="mx-auto rounded-circle"
          style={{ width: "15rem", height: "15rem" }}
        />
      </Col>
      <Col className="d-flex flex-column text-center">
        <Container>
          {description1 && <p>{description1}</p>}
        </Container>
      </Col>
      <Col className="d-none d-md-block text-center">
        <img
          src={image2}
          alt="ProfileImage"
          loading="lazy"
          className="mx-auto rounded-circle"
          style={{ width: "15rem", height: "15rem" }}
        />
      </Col>
      <Col className="d-flex flex-column text-center">
        <Container>
          {description2 && <p>{description2}</p>}
        </Container>
      </Col>
    </Row>
  )
}


export default function AboutMe() {
  const { avatar_url, bio } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Us</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <div>
            <Col className="d-none d-md-block text-center">
              <img
                src={HSPLogo}
                alt="GroupHSP"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
            <Col className="d-none d-md-block text-center">
              <Title>
                <h2>Mission Statement</h2>
              </Title>
            </Col>
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>{bio}</p>
                {moreInfo && <p>{moreInfo}</p>}
              </Container>
            </Col>
            </div>
          </Row>
          <Row className="align-items-center mt-5">
          </Row>
          {AboutPersonComponent(SidProfPic, sidInfo, AdiProfPic, adiInfo)}
          {AboutPersonComponent(AbhiProfPic, abhiInfo, LukeProfPic, lukeInfo)}
          {AboutPersonComponent(MehakProfPic, mehakInfo, DanielProfPic, danielInfo)}
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
