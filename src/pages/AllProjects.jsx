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
  Pagination,
  Row,
} from "react-bootstrap";

// const StyledSection = styled.section`
//   min-height: calc(80vh - var(--min-footer-height) - var(--nav-height));

//   .input-group {
//     max-width: 90vw;
//   }

//   .row {
//     min-height: var(--card-height);
//   }

//   @media screen and (min-width: 800px) {
//     .input-group {
//       width: 75%;
//     }
//   }
// `;

const StyledSection = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }

  /* Overlay for contrast */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .down-container {
    height: 10rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    .hero-img {
    }
  }

  @media screen and (min-width: 1180px) {
    &::before {
    }
  }

  @media screen and (min-width: 1367px) {
    &::before {
    }
  }
`;

export default function AllProjects() {
  const [searchInput, setSearchInput] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState([]);
  const [pageItems, setPageItems] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);
  const isLoading 
  = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);
  const { name } = useSelector(homeData);

  document.title = `HumaneSleepProject | All Events`;

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
  
  //Will just be a static page of blog posts and links
  return (
    <StyledSection>
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <h1 className="mb-3 display-3 title">Oakland Outreach</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>tl:dr</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p> At the Humane Sleep Project, based in Pleasanton, we've started an outreach into Oakland to assist the homeless community by providing crucial sleeping supplies and support to alleviate their hardships.

We recognize the importance of maintaining hygiene for overall health and well-being, especially for those without homes. Therefore, we assembled 100 hygiene kits comprising essentials like toothbrushes, soap, and shampoo, and distributed them in Oakland among various homeless encampments and donated some to local housing projects.

Our first outreach not only provided vital items but also allowed us to understand the needs of the homeless community better and forge meaningful connections.
 </p>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
}
