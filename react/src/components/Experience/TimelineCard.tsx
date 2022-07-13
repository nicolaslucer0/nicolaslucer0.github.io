import styled from "styled-components";

type TimelineCardProps = {
  image: string;
  title: string;
  position: string;
  classname: string;
  description: string;
  location: string;
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
  width: 60%;
  padding: 10px 40px;
  position: relative;
  box-sizing: border-box;
  background-color: inherit;
  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: #f1f1f1;
    border: 4px solid #ffffff;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  &.right {
    left: 20%;
    @media (max-width: 768px) {
      left: 0;
      width: 95%;
      box-sizing: border-box;
      position: relative;
      padding: 10px;
      margin: auto;
      &::after {
        display: none;
      }
    }
  }

  &.right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 20px;
    border: medium solid red;
    border-width: 10px 10px 10px 0;
    @media (max-width: 768px) {
      display: none;
    }
  }

  &.redbee::before {
    border-color: transparent #e12027 transparent transparent;
  }
  &.glamit::before {
    border-color: transparent #3dced9 transparent transparent;
  }
  &.fit::before {
    border-color: transparent #dc6a09 transparent transparent;
  }
  &.sjt::before {
    border-color: transparent black transparent transparent;
  }
  &.right::after {
    left: -16px;
  }

  @media (max-width: 768px) {
    width: 70%;
    padding: 10px 40px;
    box-sizing: border-box;
  }
`;

const CardBody = styled.div`
  display: flex;
  border-radius: 15px;
  color: white;
  min-height: 250px;
  align-items: center;

  h3 {
    text-transform: uppercase;
    font-weight: 300;
  }

  h4 {
    font-weight: 300;
  }

  &.redbee {
    background: linear-gradient(45deg, #e12027, #0044ff61);
  }
  &.glamit {
    background: linear-gradient(45deg, #3dced9, #0044ff61);
  }
  &.fit {
    background: linear-gradient(45deg, #dc6a09, #e400ff94);
  }
  &.sjt {
    background: linear-gradient(45deg, black, #0044ff61);
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

  @media (max-width: 768px) {
    width: 90%;
  }
`;
