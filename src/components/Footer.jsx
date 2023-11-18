import styled from "styled-components";
// Components
import SocialLinks from "./SocialLinks";

const StyledFooter = styled.footer`
  min-height: var(--min-footer-height);
  background: #333;  // Set a dark background color for the footer

  a {
    color: #F5F2E8;  // Set a light color for the links

    &:hover {
      color: #61DBFB;  // Set a primary color for hover
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter className="d-flex align-items-center justify-content-center p-2">
      <span style={{ fontStyle: '12px'}}> Website Template from Michael Huber : https://github.com/mshuber1981</span>
    </StyledFooter>
  );
}
