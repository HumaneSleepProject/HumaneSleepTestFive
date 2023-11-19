import styled from "styled-components";
// Components
import SocialLinks from "./SocialLinks";

const StyledFooter = styled.footer`
  min-height: var(--min-footer-height);
  background: var(--primary);

  a {
    color: #45413c;

    &:hover {
      color: #fbfdff;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter className="d-flex align-items-center justify-content-center p-2">
      <span style={{ fontStyle: '12px'}}> Humane Sleep Project is a Registered 501(c)(3) Organization under the State of California </span>
    </StyledFooter>
  );
}
