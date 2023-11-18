const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 15rem;
    height: 15rem;
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
            <Col className="text-center">
              {/* Content for the first column (Group HSP image) */}
              <img
                src={GroupHSP}
                alt="GroupHSP"
                loading="lazy"
                className="img-fluid"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
            <Col className="d-flex flex-column text-center">
              {/* Content for the second column (bio and moreInfo) */}
              <Container>
                <p>{bio}</p>
                {moreInfo && <p>{moreInfo}</p>}
              </Container>
            </Col>
          </Row>
          {/* Additional content for the side-by-side layout */}
          <Row className="align-items-center mt-5">
            {/* Add content for each side-by-side element here */}
            {/* Example: */}
            <Col className="text-center">
              <img
                src={/* Image source */}
                alt={/* Alt text */}
                loading="lazy"
                className="img-fluid"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
            <Col className="d-flex flex-column text-center">
              {/* Description for the side-by-side element */}
              <Container>
                <p>{/* Description for the image */}</p>
              </Container>
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
