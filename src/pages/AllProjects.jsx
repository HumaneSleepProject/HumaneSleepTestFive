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
  background: ${({ theme }) =>
    theme.name === "light"
      ? "linear-gradient(135deg, var(--primary), var(--bs-light))"
      : "linear-gradient(135deg, var(--primary), var(--bs-dark))"};
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
  background: ${({ theme }) =>
    theme.name === "light"
      ? "rgba(255, 255, 255, 0.2)"
      : "rgba(0, 0, 0, 0.2)"};
  z-index: -1;
}

.down-container {
  height: 10rem;
}

@media (prefers-reduced-motion: no-preference) {
  .hero-img {
    animation: ${Spin} infinite 20s linear;
  }
}

@media screen and (min-width: 1180px) {
  &::before {
    background: ${({ theme }) =>
      theme.name === "light"
        ? `url(${Light}) top center fixed no-repeat`
        : `url(${Dark}) top center fixed no-repeat`};
    background-size: 100vw auto;
  }
}

@media screen and (min-width: 1367px) {
  &::before {
    background: ${({ theme }) =>
      theme.name === "light"
        ? `url(${Light}) center center fixed no-repeat`
        : `url(${Dark}) center center fixed no-repeat`};
    background-size: cover;
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

  // React.useEffect(
  //   function () {
  //     document.title = `${name} | All Projects`;
  //   },
  //   [name]
  // );

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
    // <div>
    //   <h1>
    //     Blog Post 1
    //   </h1>
    //   <h1>
    //     Blog Post 2
    //   </h1>
    //   <h1>
    //     Blog Post 3
    //   </h1>
    // </div>
    <StyledSection>
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <h1 className="mb-3 display-3 title">Blog Post 1</h1>
          </Col>
        </Row>
        <Row className="align-items-left text-left">
          <Col>
            <h1> Content </h1>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
}
