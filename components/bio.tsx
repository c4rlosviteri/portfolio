import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import HiddenText from "../components/hidden-text";
import ExternalLink from "./external-link";
import SectionContainer from "./styled/section-container";

const Heading = styled.h1`
  color: ${(props) => props.theme.pink};
  font-family: "Neutra Text";
  font-size: 48px;
  line-height: 1.2;
  margin: 0;
`;

const ProfilePhoto = styled.img`
  --size: 240px;
  border-radius: 50%;
  display: block;
  height: var(--size);
  margin: 2em auto;
  width: var(--size);
`;

const Description = styled.p`
  font-size: 1.25em;
  line-height: 1.5;
  margin: 0;
`;

const SocialNetworks = styled.section`
  display: flex;
  gap: 2em;
  justify-content: center;
  padding-top: 2rem;

  a {
    color: ${(props) => props.theme.pink};
  }
`;

function Bio() {
  return (
    <SectionContainer aria-label="Biography">
      <Heading>Hello, I’m Carlos Viteri</Heading>
      <ProfilePhoto src="imgs/photo.jpeg" />
      <Description>
        I’m a Senior Software Developer, currently working as Front End Engineer
        at <ExternalLink label="Verndale" link="https://verndale.com" />. I
        mostly do front-end development, focused on accessibility and React. I
        also share what I learn at{" "}
        <ExternalLink label="Front End UIO" link="https://frontenduio.com" />{" "}
        and{" "}
        <ExternalLink label="QuitoJS" link="https://www.facebook.com/quitojs" />
        .
      </Description>
      <SocialNetworks aria-label="Social Network">
        <ExternalLink link="https://www.linkedin.com/in/carlosandresviteri">
          <FontAwesomeIcon
            aria-label="Carlos Viteri LinkedIn Profile"
            icon={["fab", "linkedin"]}
            size="3x"
          />
          <HiddenText>(Opens in a new tab)</HiddenText>
        </ExternalLink>
        <ExternalLink link="https://twitter.com/c4rlosviteri">
          <FontAwesomeIcon
            aria-label="Carlos Viteri Twitter Profile"
            icon={["fab", "twitter"]}
            size="3x"
          />
          <HiddenText>(Opens in a new tab)</HiddenText>
        </ExternalLink>
      </SocialNetworks>
    </SectionContainer>
  );
}

export default Bio;
