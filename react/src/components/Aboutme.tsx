import React from "react";
import styled from "styled-components";
import img from "../Assets/img/me.jpg";
import imgMobile from "../Assets/img/me_mobile.jpg";
import imgwheel from "../Assets/img/wheel-min.png";
import logoRedbee from "../Assets/img/redbee_logo.png";
import bandera from "../Assets/img/bandera.png";
import location from "../Assets/img/location.png";
import user from "../Assets/img/user.png";
import job from "../Assets/img/job.png";
import professor from "../Assets/img/Professor.png";
import hobbies from "../Assets/img/hobbies.png";

export const AboutMe = () => {
  return (
    <>
      <FlexContainerRow id="about-me">
        <Picture>
          <source srcSet={`${imgMobile} 1x`} media="(max-width: 500px)" />
          <Image className="logo__apple" srcSet={`${img} 2x`} alt="Full Logo" />
        </Picture>

        <FlexContainerColumn>
          <Title>
            <div>
              <TitleHi>Hi.</TitleHi>
              <TitleDescription>
                <div>
                  I am <Name>Nicolás</Name>
                </div>
              </TitleDescription>
            </div>
          </Title>

          <FlexContainer>
            <LocationImage src={location} />
            <Text>I'm from Buenos Aires, Argentina</Text>
            <LocationImage src={bandera} />
          </FlexContainer>

          <FlexContainer>
            <LocationImage src={user} />
            <Text>
              I'm fullstack developer, I love to create and design new things.
            </Text>
          </FlexContainer>

          <FlexContainer>
            <LocationImage src={job} />
            <Text>I'm currently working at </Text>
            <Redbee target="_blank" href="https://www.redbee.io/">
              <RedbeeImage src={logoRedbee} />
            </Redbee>
          </FlexContainer>

          <FlexContainer>
            <LocationImage src={professor} />
            <Text>I have 5 years of experience teaching programming.</Text>
          </FlexContainer>

          <FlexContainer>
            <LocationImage src={hobbies} />
            <Text>I love skating and music.</Text>
            <Wheel className="first" src={imgwheel} />
          </FlexContainer>
        </FlexContainerColumn>
      </FlexContainerRow>
    </>
  );
};
export default AboutMe;

const LocationImage = styled.img`
  width: 40px;
  transition: 0.2s;
  margin: 0 10px;
  &:hover {
    transform: scale(1.2);
  }
`;

const RedbeeImage = styled.img`
  width: 90px;
  padding-left: 20px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Redbee = styled.a``;

const TitleHi = styled.div`
  font-size: 3em;
  margin: 0;
  padding: 0;
  line-height: 0.8;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const TitleDescription = styled.div`
  display: flex;
  flex-flow: column;
  div {
    display: flex;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FlexContainerRow = styled.div`
  display: flex;
  height: 90vh;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 2em;
  margin: auto;
  @media (max-width: 768px) {
    width: 80%;
    padding: 0;
    margin: auto;
    height: auto;
  }
`;

const Picture = styled.picture`
  @media (max-width: 768px) {
    width: 100;
  }
`;

const Image = styled.img`
  width: auto;
  object-fit: cover;
  height: 90vh;
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;
const Text = styled.p`
  font-size: 20px;
`;

const Name = styled.span`
  position: relative;
  font-weight: 700;
  transition: 0.3s;
  font-size: 60px;
  text-shadow: 2px -1px 0px #d20000;
  &:hover {
    text-shadow: 2px -1px 0px #4f7dff;
  }
`;
const Wheel = styled.img`
  position: relative;
  font-size: 20px;
  width: 3em;
  margin: 0 0 0 auto;
  animation: spin 4s infinite linear;
  -webkit-animation: spin 4s infinite linear;
  &.first {
    left: 20px;
  }
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Title = styled.h2`
  font-size: 1em;

  display: flex;
  align-items: center;
  margin: 3em 0;
  &:before {
    content: "{  ";
    left: 0;
  }

  &:after {
    content: "  }";
    right: 0;
  }

  &:after,
  &:before {
    top: 0;

    color: #001027;
    color: #001027;
    font-size: 200px;
    font-weight: 100;
    line-height: 40px;

    -webkit-animation-name: opacity;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-name: opacity;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  @media (max-width: 768px) {
    font-size: 2em;
    justify-content: center;
    margin: 4em 0;
    span {
      font-size: 1em;
    }
    &:after,
    &:before {
      font-size: 140px;
    }
  }

  @-webkit-keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @-webkit-keyframes change {
    0%,
    12.66%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    16.66%,
    29.32% {
      transform: translate3d(0, -25%, 0);
    }
    33.32%,
    45.98% {
      transform: translate3d(0, -50%, 0);
    }
    49.98%,
    62.64% {
      transform: translate3d(0, -75%, 0);
    }
    66.64%,
    79.3% {
      transform: translate3d(0, -50%, 0);
    }
    83.3%,
    95.96% {
      transform: translate3d(0, -25%, 0);
    }
  }

  @-o-keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @-o-keyframes change {
    0%,
    12.66%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    16.66%,
    29.32% {
      transform: translate3d(0, -25%, 0);
    }
    33.32%,
    45.98% {
      transform: translate3d(0, -50%, 0);
    }
    49.98%,
    62.64% {
      transform: translate3d(0, -75%, 0);
    }
    66.64%,
    79.3% {
      transform: translate3d(0, -50%, 0);
    }
    83.3%,
    95.96% {
      transform: translate3d(0, -25%, 0);
    }
  }

  @-moz-keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @-moz-keyframes change {
    0%,
    12.66%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    16.66%,
    29.32% {
      transform: translate3d(0, -25%, 0);
    }
    33.32%,
    45.98% {
      transform: translate3d(0, -50%, 0);
    }
    49.98%,
    62.64% {
      transform: translate3d(0, -75%, 0);
    }
    66.64%,
    79.3% {
      transform: translate3d(0, -50%, 0);
    }
    83.3%,
    95.96% {
      transform: translate3d(0, -25%, 0);
    }
  }

  @keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes change {
    0%,
    12.66%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    16.66%,
    29.32% {
      transform: translate3d(0, -25%, 0);
    }
    33.32%,
    45.98% {
      transform: translate3d(0, -50%, 0);
    }
    49.98%,
    62.64% {
      transform: translate3d(0, -75%, 0);
    }
    66.64%,
    79.3% {
      transform: translate3d(0, -50%, 0);
    }
    83.3%,
    95.96% {
      transform: translate3d(0, -25%, 0);
    }
  }
`;
