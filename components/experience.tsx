import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Section = styled.section`
  & + & {
    margin-top: 2.5rem;
  }

  article + article {
    margin-top: 2em;
  }

  p {
    line-height: 1.25;
  }
`;

const Heading = styled.h2`
  color: ${(props) => props.theme.pink};
  font-size: 2em;
  line-height: 1.125;
  margin-bottom: 1em;
  margin-top: 0;

  svg {
    width: 1.75rem;
  }
`;

const TimeSpan = styled.span`
  display: block;
  font-size: 1em;
`;

const Position = styled.h3`
  font-size: 1.25em;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 0.25em;
`;

const ProjectName = styled.h3`
  font-size: 1.25em;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 0.25em;
`;

const Description = styled.p`
  font-size: 1.25em;
`;

const ProjectLink = styled.a`
  display: flex;
  height: 7.5rem;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 11.25rem;

  &:hover img {
    transform: scale(1.1);
  }
`;

const ProjectImage = styled.img`
  border: 3px solid ${(props) => props.theme.pink};
  height: 100%;
  width: 100%;
  transition: transform 0.2s;
`;

function Experience() {
  return (
    <>
      <Section aria-labelledby="portfolio">
        <Heading id="portfolio">
          <FontAwesomeIcon icon="tasks" size="sm" /> Portfolio
        </Heading>
        <article aria-labelledby="factu">
          <ProjectName id="factu">Factu (2017)</ProjectName>
          <Description>
            Factu is a web app that automates your Ecuadorian tax payments
          </Description>
          <ProjectLink href="https://factu.com.ec">
            <ProjectImage src="/imgs/factu.png" alt="Factu" />
          </ProjectLink>
        </article>
        <article aria-labelledby="kw">
          <ProjectName id="kw">Keller Williams (2018)</ProjectName>
          <Description>
            Keller Williams Realty is a web/mobile app that helps you to find
            your perfect home.
          </Description>
          <ProjectLink href="https://apps.apple.com/us/app/kw-buy-sell-real-estate/id652512924">
            <ProjectImage src="/imgs/kw.png" alt="Keller Williams" />
          </ProjectLink>
        </article>
        <article aria-labelledby="jane">
          <ProjectName id="jane">Jane (2019)</ProjectName>
          <Description>
            Jane is a marketplace featuring the latest in women's fashion, home
            decor, beauty & wellness, pets, and children's clothing
          </Description>
          <ProjectLink href="https://apps.apple.com/us/app/jane-boutique-shopping-deals/id894844399">
            <ProjectImage src="/imgs/jane.png" alt="Jane" />
          </ProjectLink>
        </article>
        <article aria-labelledby="setf">
          <ProjectName id="setf">Southeast Toyota Finance (2020)</ProjectName>
          <Description>
            SETF is a web app that helps you to manage your Toyota loans and
            payments.
          </Description>
          <ProjectLink href="https://www.setf.com">
            <ProjectImage src="/imgs/setf.png" alt="SETF" />
          </ProjectLink>
        </article>
        <article aria-labelledby="covid">
          <ProjectName id="covid">COVID-19 - Ecuador (2020)</ProjectName>
          <Description>
            COVID-19 - Ecuador shows the latest available data of the
            coronavirus pandemic in Ecuador in an interactive map.
          </Description>
          <ProjectLink href="https://covid19-ecuador.com/">
            <ProjectImage src="/imgs/covid19.png" alt="Covid-19 - Ecuador" />
          </ProjectLink>
        </article>
        <article aria-labelledby="landrys">
          <ProjectName id="landrys">Landry's Inc (2020)</ProjectName>
          <Description>
            Landry's, Inc. owns and operates more than 600 restaurants, hotels,
            casinos and entertainment destinations in 35 states and the District
            of Columbia.
          </Description>
          <ProjectLink href="https://www.landrysinc.com/">
            <ProjectImage src="/imgs/landrys.png" alt="Landry's" />
          </ProjectLink>
        </article>
      </Section>
      <Section aria-labelledby="experience">
        <Heading id="experience">
          <FontAwesomeIcon icon="briefcase" size="sm" /> Experience
        </Heading>
        <article aria-labelledby="verndale">
          <TimeSpan>
            <time dateTime="2019-04">Apr 2019</time> -{" "}
            <time dateTime={`${new Date().getFullYear()}`}>Present</time>
          </TimeSpan>
          <Position id="verndale">
            Senior Front End Engineer at Verndale
          </Position>
          <Description>
            Verndale is a User Experience Agency based in the US and Ecuador. I
            have been working on some projects including Honda Powersports,
            Quinnipiac University and Toyota.
          </Description>
          <Description>
            <strong>Tech Stack:</strong> React / Redux
          </Description>
        </article>
        <article aria-labelledby="dreamcode">
          <TimeSpan>
            <time dateTime="2018-07">Jul 2018</time> -{" "}
            <time dateTime="2019-04">Apr 2019</time>
          </TimeSpan>
          <Position id="dreamcode">UI Developer at Dreamcode</Position>
          <Description>
            Dreamcode offers cloud based solutions for innovative business. I
            was in charge of developing React Native apps for Keller Williams
            Realty and Jane.com, as well as Next.js based web applications for
            local clients.
          </Description>
          <Description>
            <strong>Tech Stack:</strong> React Native / Apollo and Next.js
          </Description>
        </article>
        <article aria-labelledby="datien">
          <TimeSpan>
            <time dateTime="2017-09">Sep 2017</time> -{" "}
            <time dateTime="2018-04">Apr 2018</time>
          </TimeSpan>
          <Position id="datien">UI Developer at Datien</Position>
          <Description>
            Factu (by Datien) is an Ecuadorian company that automates your tax
            tracking. I developed the first version of this system that helps
            you to track all your bills to ease your tax payments.
          </Description>
          <Description>
            <strong>Tech Stack:</strong> Vue.js and Next.js
          </Description>
        </article>
      </Section>
    </>
  );
}

export default Experience;
