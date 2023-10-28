import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
import { Icon } from '@iconify/react';

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);
  const linkedInUrl = `https://www.linkedin.com/company/humanesleepproject`;
  const instaUrl = `instagram.com/humanesleepproject`;
  const fbUrl = `https://www.facebook.com/profile.php?id=100092845128371&mibextid=LQQJ4d`;
  return (
    <StyledSocialLinks>
      {/* <a
        href={html_url}
        aria-label="Check out my Github profile."
        className="link-icons"
      >
        <Icon icon="icomoon-free:linkedin" />
      </a> */}

      <a
        href={linkedInUrl}
        aria-label="External link"
        className="link-icons"
      >
        <Icon icon="icomoon-free:linkedin" />
      </a>
      <a
        href={instaUrl}
        aria-label="External link"
        className="link-icons"
      >
        <Icon icon="icomoon-free:instagram" />
      </a>
      <a
        href={fbUrl}
        aria-label="External link"
        className="link-icons"
      >
        <Icon icon="icomoon-free:facebook" />
      </a>
      {/* </a>
      {blog && <a href={blog} aria-label="External link" className="link-icons">
        {Blog}
      </a>} */}
    </StyledSocialLinks>
  );
}
