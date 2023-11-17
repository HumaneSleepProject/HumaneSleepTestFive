import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import GroupHSP from "../images/GroupHSP.jpg"

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

const StyledImageSection = styled.section`
  .image-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3rem;
  }

  .image-item {
    margin: 1rem;
    text-align: center;
  }

  .image {
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 8px;
  }

  .description {
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

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
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>{bio}</p>
                {/* ... Additional content ... */}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={GroupHSP}
                alt="GroupHSP"
                loading="lazy"
                className="img-fluid"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>

      {/* New section for images and descriptions */}
      <StyledImageSection>
        <Container>
          <Title>
            <h2>Our Work</h2>
            <div className="underline"></div>
          </Title>
          <Row className="image-container">
            {/* Image 1 */}
            <Col className="image-item">
              <img src={/* Image source */} alt="Image 1" className="image" />
              <p className="description">Description for Image 1</p>
            </Col>
            {/* Repeat for Images 2 to 6 */}
            {/* Image 2 */}
            {/* Image 3 */}
            {/* Image 4 */}
            {/* Image 5 */}
            {/* Image 6 */}
          </Row>
        </Container>
      </StyledImageSection>
    </Element>
  );
}
