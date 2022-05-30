import React from 'react'
import styled from 'styled-components'
import HeaderImage from '../Assets/img/header.jpg'
import HeaderImageMobile from '../Assets/img/header_mobile.jpg'

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <FlexContainer>
          <TextContainer>
            <Subtitle id="title">Nicolás Lucero</Subtitle>
            <Title id="subtitle">
              Software developer <Ampersan>&</Ampersan> designer
            </Title>
          </TextContainer>
        </FlexContainer>
      </HeaderContainer>
    </>
  )
}

export default Header

const HeaderContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  height: 100vh;
  background-image: url(${HeaderImage});
  background-repeat: no-repeat;
  background-position: center;
  background-position: 50% 50%;
  background-size: 120%;
  //background-attachment: fixed;

  @media (max-width: 768px) {
    background-image: url(${HeaderImageMobile}) !important;
  }
`

const Ampersan = styled.span`
  font-size: 2em;
  text-shadow: 4px -1px 0px #4f7dff;
  color: white;
`

const FlexContainer = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

const TextContainer = styled.div`
  color: white;
  display: block;
  font-size: 20px;
  justify-content: center;
  text-align: center;
`
const Title = styled.div`
  font-size: 1.3em;
  margin: 0;
  line-height: 1;
`
const Subtitle = styled.div`
  color: white;
  font-size: 2.4em;
  font-weight: 500;
`
