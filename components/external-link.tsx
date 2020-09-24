import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import HiddenText from "../components/hidden-text";

const Link = styled.a`
  color: inherit;
  text-decoration: none;

  span {
    text-decoration: underline;
  }
`;

interface ExternalLinkProps {
  children?: ReactNode;
  label?: string;
  link: string;
}

function ExternalLink({ children, label, link }: ExternalLinkProps) {
  return (
    <Link href={link}>
      {label ? (
        <>
          <span>{label}</span> <FontAwesomeIcon icon="external-link-alt" />
        </>
      ) : (
        children
      )}
      <HiddenText>(Opens in a new tab)</HiddenText>
    </Link>
  );
}

export default ExternalLink;
