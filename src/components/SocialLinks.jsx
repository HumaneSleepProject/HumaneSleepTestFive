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
  const linkedInUrl = `https://www.linkedin.com/company/humanesleepproject`
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
      {/* </a>
      {blog && <a href={blog} aria-label="External link" className="link-icons">
        {Blog}
      </a>} */}
    </StyledSocialLinks>
  );
}
