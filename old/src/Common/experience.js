import React from 'react'
import styled from 'styled-components'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import redbee from '../Assets/img/experience/redbee.svg'
import glamit from '../Assets/img/experience/glamit.svg'
import factorit from '../Assets/img/experience/factorit.svg'
import sanju from '../Assets/img/experience/sanju.png'
import pilar from '../Assets/img/experience/pilar.png'
import { Title } from './styles'

const Experience = () => {
  return (
    <>
      <FlexContainerColumn id="experience">
        <Title>My work</Title>
        <VerticalTimeline animate={false}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#E12027', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #E12027' }}
            date="2020 - actualidad"
            dateClassName="timeline-date"
            animate={false}
            iconStyle={{ background: '#E12027', color: '#fff' }}
            icon={<Image src={redbee} />}
          >
            <h3 className="vertical-timeline-element-title">
              Fullstack developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Redbee</h4>
            <p>
              Mobile design and development. Front and back end using Flutter
              and Java. Part of{' '}
              <Link href="https://play.google.com/store/apps/details?id=com.pedidosya.partnerpics&hl=es_419">
                Partners pics
              </Link>{' '}
              build.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3DCED9', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3DCED9' }}
            date="2020 - 2019"
            dateClassName="timeline-date"
            iconStyle={{ background: '#3DCED9', color: '#3DCED9' }}
            icon={<Image src={glamit} />}
          >
            <h3 className="vertical-timeline-element-title">
              Front end developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Glamit</h4>
            <p>Frontend developer using ReactJS and Less, Ecommerce builder.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#DC6A09', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #DC6A09' }}
            date="2016 - 2019"
            dateClassName="timeline-date"
            iconStyle={{ background: 'black', color: '#fff' }}
            icon={<Image src={factorit} />}
          >
            <h3 className="vertical-timeline-element-title">
              Fullstack developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Factor IT</h4>
            <p>Web development, working building Walmart apps.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'green', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  green' }}
            date="2014 - 2016"
            dateClassName="timeline-date"
            iconStyle={{ background: 'white', color: '#fff' }}
            icon={<Image src={pilar} />}
          >
            <h3 className="vertical-timeline-element-title">Profesor</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Instituto Nuestra señora del Pilar
            </h4>
            <p>IT professor, algorythms and office software.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'gray', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  gray' }}
            date="2012 - 2016"
            dateClassName="timeline-date"
            iconStyle={{ background: 'white', color: '#fff' }}
            icon={<Image src={sanju} />}
          >
            <h3 className="vertical-timeline-element-title">Profesor</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Instituto Técnico Industrial San Judas Tadeo
            </h4>
            <p>IT professor, algorythms and C develompent.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            dateClassName="timeline-date"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          />
        </VerticalTimeline>
      </FlexContainerColumn>
    </>
  )
}
export default Experience

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
  }
`

const Image = styled.img`
  width: 90%;
  height: 90%;
`
const Link = styled.a`
  font-weight: bold;
  color: white;
`
