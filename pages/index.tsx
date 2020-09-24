import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faExternalLinkAlt,
  faBriefcase,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

import Bio from "../components/bio";
import GlobalStyle, { theme } from "../components/styled/global-style";
import SectionContainer from "../components/styled/section-container";
import Experience from "../components/experience";

library.add(faExternalLinkAlt, faLinkedin, faTwitter, faBriefcase, faTasks);

const Wrapper = styled.main`
  @media (min-width: ${(props) => props.theme.lgBreakpoint}px) {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
  }
`;

const RightContainer = styled(SectionContainer)`
  @media (min-width: ${(props) => props.theme.lgBreakpoint}px) {
    max-height: 100vh;
    overflow-y: auto;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Bio />
        <RightContainer>
          <Experience />
        </RightContainer>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
