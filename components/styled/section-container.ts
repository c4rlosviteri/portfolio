import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;

  @media (min-width: ${(props) => props.theme.lgBreakpoint}px) {
    width: 50%;
  }
`;

export default SectionContainer;
