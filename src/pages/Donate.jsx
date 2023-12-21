import React from "react";
import { useSelector } from "react-redux";
import { selectData as homeData } from "../pages/homeSlice";
import { selectData, selectError, selectIsLoading } from "./allProjectsSlice";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Components
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";
import {
  BackToTop,
  Title,
  Loading,
} from "../components/globalStyledComponents";
import StyledCard from "../components/StyledCard";
import Footer from "../components/Footer";

const StyledSection = styled.section`
  min-height: calc(100vh - var(--min-footer-height) - var(--nav-height));

  .input-group {
    max-width: 90vw;
  }

  .row {
    min-height: var(--card-height);
  }

  @media screen and (min-width: 800px) {
    .input-group {
      width: 75%;
    }
  }
`;

export default function Donate() {
  const [searchInput, setSearchInput] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState([]);
  const [pageItems, setPageItems] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);
  const { name } = useSelector(homeData);

  React.useEffect(
    function () {
      document.title = `Humane Sleep Project | Donate`;
    },
    [name]
  );

  React.useEffect(
    function () {
      if (searchInput !== "") {
        const filteredData = data.filter((item) => {
          return item.name.toLowerCase().includes(searchInput.toLowerCase());
        });
        const tempPageItems = [];
        for (
          let number = 1;
          number <= Math.ceil(filteredData.length / 6);
          number++
        ) {
          tempPageItems.push(
            <Pagination.Item
              key={number}
              active={number === activePage}
              onClick={() => setActivePage(number)}
            >
              {number}
            </Pagination.Item>
          );
          setPageItems([...tempPageItems]);
        }
        if (activePage === 1) {
          setFilteredResults(filteredData.slice(0, 6));
        } else {
          setFilteredResults(
            filteredData.slice((activePage - 1) * 6, (activePage - 1) * 6 + 6)
          );
        }
      } else {
        const tempPageItems = [];
        for (let number = 1; number <= Math.ceil(data.length / 6); number++) {
          tempPageItems.push(
            <Pagination.Item
              key={number}
              active={number === activePage}
              onClick={() => setActivePage(number)}
            >
              {number}
            </Pagination.Item>
          );
          setPageItems([...tempPageItems]);
        }
        if (activePage === 1) {
          setFilteredResults(data.slice(0, 6));
        } else {
          setFilteredResults(
            data.slice((activePage - 1) * 6, (activePage - 1) * 6 + 6)
          );
        }
      }
    },
    [searchInput, data, pageItems.length, activePage]
  );

  React.useEffect(
    function () {
      // Anytime the search input changes set the active page back to 1
      setActivePage(1);
    },
    [searchInput]
  );

  if (isLoading) {
    return (
      <>
        <main>
          <StyledSection className="d-flex flex-column justify-content-center">
            <Container className="d-flex">
              <Title>
                <h2>
                  All <Icon icon="mdi:github" /> Projects
                </h2>
                <div className="underline"></div>
              </Title>
            </Container>
            <Loading />
          </StyledSection>
        </main>
        <Footer />
      </>
    );
  } else if (error) {
    return (
      <>
        <main>
          <StyledSection className="d-flex flex-column justify-content-center">
            <Container className="d-flex">
              <Title>
                <h2>
                  All <Icon icon="mdi:github" /> Projects
                </h2>
                <div className="underline"></div>
              </Title>
            </Container>
            <h2 className="my-5 text-center">{error}</h2>
          </StyledSection>
        </main>
        <Footer />
      </>
    );
  } else {
    return (
        <StyledSection>
          <Container>
            <Row className="align-items-center text-center">
              <Col>
                <h1 className="mb-3 display-3 title">Oakland Outreach</h1>
              </Col>
            </Row>
            <Row className="align-items-left text-left">
              <Col>
                <h2> At the Humane Sleep Project, based in Pleasanton, we've started an outreach into Oakland to assist the homeless community by providing crucial sleeping supplies and support to alleviate their hardships.
    
    We recognize the importance of maintaining hygiene for overall health and well-being, especially for those without homes. Therefore, we assembled 100 hygiene kits comprising essentials like toothbrushes, soap, and shampoo, and distributed them in Oakland among various homeless encampments and donated some to local housing projects.
    
    Our first outreach not only provided vital items but also allowed us to understand the needs of the homeless community better and forge meaningful connections.
     </h2>
              </Col>
            </Row>
          </Container>
        </StyledSection>
      );
  }
}