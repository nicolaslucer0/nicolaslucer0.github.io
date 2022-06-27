import styled from "styled-components";

type TimelineCardProps = {
  image: string;
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
  <ExperienceCard className={classname}>
    <Image src={image} />
    <div>
      <h3 className="vertical-timeline-element-title">{position}</h3>
      <h4 className="vertical-timeline-element-subtitle">{title}</h4>
      <p>{description}</p>
    </div>
  </ExperienceCard>
);

const Image = styled.img`
  width: 20%;
  padding: 1em;

  &.sjt {
    width: 60px !important;
    height: 60px !important;
  }
  @media (max-width: 768px) {
    width: 30%;
    padding: 5px;
  }
`;

const ExperienceCard = styled.div`
  background: #f0f0f0;
  max-width: 50%;
  border-radius: 10px;
  padding: 1em;
  margin: 1em;
  display: flex;
  color: #fafafa;
  width: 100%;
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
  h3 {
    text-transform: uppercase;
    font-weight: 300;
  }

  h4 {
    font-weight: 300;
  }

  div {
    width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    flex-direction: column;
    align-items: center;
  }
`;
