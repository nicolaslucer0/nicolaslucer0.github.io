import styled from "styled-components";
import { blue } from "../../styles/Colors";
import { radius } from "../../styles/Styles";

type TimelineCardProps = {
  image: any;
  title: string;
  position: string;
  classname: string;
  description: string;
};
export const TimelineCard = ({
  image,
  title,
  classname,
  position,
  description,
}: TimelineCardProps) => (
  <ExperienceCard className={`${classname} right`}>
    <CardBody className={`body ${classname}`}>
      <CardHeader>
        <Image src={image} className={classname} />
      </CardHeader>
      <CardDetails>
        <h3 className="vertical-timeline-element-title">{position}</h3>
        <p>{description}</p>
      </CardDetails>
    </CardBody>
  </ExperienceCard>
);
const ExperienceCard = styled.div`
  padding: 0 10px;
  margin-bottom: 10px;
  position: relative;
  box-sizing: border-box;
  background-color: inherit;
  width: -webkit-fill-available;
  @media (max-width: 768px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

const CardBody = styled.div`
  display: flex;
  border-radius: ${radius};
  height: 200px;
  color: ${blue};
  padding-top: 25px;
  background: #ffffff;
  box-shadow: 0px 0 8px 0px rgb(229 229 229);
  border-radius: ${radius};
  box-shadow: 0px 16px 15px -10px rgba(105, 96, 215, 0.0944602);
  margin-bottom: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(105, 96, 215, 0.0944602);

  h3 {
    font-weight: bold;
  }

  h4 {
    font-weight: 300;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    margin: auto;
  }
`;

const CardHeader = styled.div`
  height: 70px;
  width: 40%;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 70%;
  &.sjt {
    width: 60px !important;
    height: 60px !important;
  }
`;

const CardDetails = styled.div`
  width: 60%;
  padding: 1em;
  font-size: 12px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
