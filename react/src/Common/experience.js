import React from "react";
import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import redbee from '../Assets/img/experience/redbee.svg'
import glamit from '../Assets/img/experience/glamit.svg'
import factorit from '../Assets/img/experience/factorit.svg'
import sanju from '../Assets/img/experience/sanju.png'
import pilar from '../Assets/img/experience/pilar.png'
const Experience = () => {
  return (
    <>
      <FlexContainerColumn id="experience">
        <Title>Experiencias</Title>
        <VerticalTimeline>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#E12027", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #E12027" }}
            date="2020 - actualidad"
            dateClassName="timeline-date"
            iconStyle={{ background: "#E12027", color: "#fff" }}
            icon={<Image src={redbee}/>}
          >
            <h3 className="vertical-timeline-element-title">
              Fullstack developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Redbee</h4>
            <p>
              Diseño y desarrollo de sistemas web y mobile, tanto front como back end.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#3DCED9", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #3DCED9" }}
            date="2019 - 2020"
            dateClassName="timeline-date"
            iconStyle={{ background: "#3DCED9", color: "#3DCED9"}}
            icon={<Image src={glamit}/>}
          >
            <h3 className="vertical-timeline-element-title">Front end developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Glamit
            </h4>
            <p>
              Diseño, maquetación y desarrollo de sitios de ecommerce para importantes marcas de moda.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#DC6A09", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #DC6A09" }}
            date="2019 - 2016"
            dateClassName="timeline-date"
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<Image src={factorit}/>}
          >
            <h3 className="vertical-timeline-element-title">Fullstack developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Factor IT
            </h4>
            <p>Diseño y desarrollo de sistemas web y mobile, tanto front como back end.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "green", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  green" }}
            date="2016 - 2014"
            dateClassName="timeline-date"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={<Image src={pilar}/>}
          >
            <h3 className="vertical-timeline-element-title">Profesor</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Instituto Nuestra señora del Pilar
            </h4>
            <p>Profesor de materias relacionadas con la programación y desarrollo de sistemas.</p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "gray", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2016 - 2012"
            dateClassName="timeline-date"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={<Image src={sanju}/>}
          >
            <h3 className="vertical-timeline-element-title">Profesor</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Instituto Técnico Industrial San Judas Tadeo
            </h4>
            <p>Profesor de materias relacionadas con la programación y desarrollo de sistemas.</p>
          </VerticalTimelineElement>

          
          
          <VerticalTimelineElement
            dateClassName="timeline-date"
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          />
        </VerticalTimeline>
      </FlexContainerColumn>
    </>
  );
};
export default Experience;

const FlexContainerColumn = styled.div`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
      width: 90%;
      padding: 0;
    }
  }
`;

const Image = styled.img`
   {
    width: 90%;
    height: 90%;
  }
`;
const Title = styled.h2`
   {
    color: white;
    background: #4f7d33;
    width: 50%;
    text-align: center;
    padding: 2em 0;
    margin: 5em 0;
    transform: rotate(1deg);
    @media (max-width: 768px) {
      margin: 2em 0;
    }
  }
`;
