import styled from "styled-components";
import me from "../assets/img/aboutme.jpg";
import { FlexContainerRow, Padding } from "../styles/Grid";
import { DescriptionText, DescriptionTitle, radius } from "../styles/Styles";

export const AboutMe = () => (
  <Padding>
    <FlexContainerRow id="about-me">
      <DescriptionSection>
        <DescriptionTitle>
          I'm Nico a <u>software developer</u> currently working in redbee
          studios, taking client ideas to next level, using agile methodologies
          and good practices in Buenos Aires, Argentina. 🚀
        </DescriptionTitle>
        <DescriptionText>
          I've spent the past 7 years working across different areas of software
          development; making my career as a full stack developer. I love
          turning complex problems into elegant, user-friendly solutions.
        </DescriptionText>
        <DescriptionText>
          I believe in not just writing code, but in thinking deeply about the
          products I help to build, ensuring they're as enjoyable to use as they
          were for me to create.
        </DescriptionText>
      </DescriptionSection>
      <PictureSection>
        <AboutMeImage src={me} />
      </PictureSection>
    </FlexContainerRow>
  </Padding>
);

export default AboutMe;

const AboutMeImage = styled.img`
  width: 100%;
  border-radius: ${radius};
  object-fit: cover;
  &.light {
    box-shadow: 0 0 14px 0 #a7a7a7;
  }
`;

const PictureSection = styled.div`
  width: 90%;
  margin-left: 4rem;
  z-index: 5;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-left: 0;
  }
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 5;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin: auto;
    height: auto;
  }
`;
