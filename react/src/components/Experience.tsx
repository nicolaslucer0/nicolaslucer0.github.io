import React from "react";
import styled from "styled-components";
import { Title } from "./Styles";
import redbee from "./../Assets/img/experience/redbee.svg";
import glamit from "./../Assets/img/experience/glamit.svg";
import factorit from "./../Assets/img/experience/factorit.svg";
import sanju from "./../Assets/img/experience/sanju.png";
export const Experience = () => {
  return (
    <>
      <FlexContainerColumn id="experience">
        <Title>My work</Title>
        <VerticalTimeline>
          <VerticalTimelineElement className="redbee">
            <Image src={redbee} />
            <div>
              <h3 className="vertical-timeline-element-title">
                Fullstack developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">redbee</h4>
              <p>
                Mobile design and development. Front and back end using Flutter
                and Java. Part of{" "}
                <Link href="https://play.google.com/store/apps/details?id=com.pedidosya.partnerpics&hl=es_419">
                  Partners pics
                </Link>{" "}
                build.
              </p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="glamit">
            <Image src={glamit} />
            <div>
              <h3 className="vertical-timeline-element-title">
                Front end developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Glamit</h4>
              <p>
                Frontend developer using ReactJS and Less, Ecommerce builder.
              </p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="fit">
            <Image src={factorit} />
            <div>
              <h3 className="vertical-timeline-element-title">
                Fullstack developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Factor IT</h4>
              <p>Web development, working building Walmart apps.</p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--work">
            <Image src={sanju} />
            <div>
              <h3 className="vertical-timeline-element-title">Profesor</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Instituto Técnico Industrial San Judas Tadeo
              </h4>
              <p>IT professor, algorythms and C develompent.</p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </FlexContainerColumn>
    </>
  );
};

const FlexContainerColumn = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: #fafafa;
  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
  }
`;

const Image = styled.img`
  width: 20%;
  padding: 1em;
`;
const Link = styled.a`
  font-weight: bold;
  color: white;
`;
const VerticalTimeline = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const VerticalTimelineElement = styled.div`
  background: #f0f0f0;
  max-width: 50%;
  border-radius: 10px;
  padding: 1em;
  margin: 1em;
  box-shadow: 1px 1px 2px 0px #cbcbcb;
  display: flex;
  &.redbee {
    background: #e12027;
    color: white;
  }
  &.glamit {
    background: #3dced9;
    color: white;
  }
  &.fit {
    background: #dc6a09;
    color: white;
  }
  &.sjt {
    background: #e12027;
    color: white;
  }
  h3 {
    text-transform: uppercase;
    font-weight: 300;
  }

  h4 {
    font-weight: 300;
  }
`;
