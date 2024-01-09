import styled from "styled-components";
import { Black } from "../../styles/Colors";
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
        <h4 className="vertical-timeline-element-subtitle">{title}</h4>
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
  height: 150px;

  color: white;
  padding-top: 25px;
  background: #ffffff;
  box-shadow: 0 2px 2px 0 #eeeeee40;
  border-radius: ${radius};
  box-shadow: 0px 16px 15px -10px rgba(105, 96, 215, 0.0944602);
  margin-bottom: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  h3 {
    text-transform: uppercase;
    font-weight: 300;
  }

  h4 {
    font-weight: 300;
  }

  &.redbee {
    background: #e12027;
  }
  &.glamit {
    background: #3dced9;
  }
  &.fit {
    background: ${Black};
  }
  &.sjt {
    background: #0044ff61;
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
