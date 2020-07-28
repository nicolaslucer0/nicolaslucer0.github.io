import React from "react";
import styled from "styled-components";
import img from "../Assets/img/me.jpg";
import imgMobile from "../Assets/img/me_mobile.jpg";
import imgwheel from "../Assets/img/wheel-min.png";
const AboutMe = () => {
  return (
    <>
      <FlexContainerRow id="about-me">
        <Picture>
          <source srcSet={`${imgMobile} 1x`} media="(max-width: 500px)" />
          <Image className="logo__apple" srcSet={`${img} 2x`} alt="Full Logo" />
        </Picture>

        <FlexContainerColumn>
          <Title>About me</Title>
          <Text>
            My name is <Name>Nicolás</Name>, I'm from Buenos Aires, Argentina.
            I'm fullstack developer, I love to create and design new things. I'm
            currently working at{" "}
            <Redbee target="_blank" href="https://www.redbee.io/">
              redbee
            </Redbee>
            <b>.</b>
          </Text>
          <Text>I worked as a I.T professor for 5 years.</Text>
          <Text>I love skating and music.</Text>
          <Wheel className="first" src={imgwheel} />
        </FlexContainerColumn>
      </FlexContainerRow>
    </>
  );
};
export default AboutMe;

const Redbee = styled.a`
   {
    display: inline;
    color: #e12027;
    font-weight: bold;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const FlexContainerRow = styled.div`
   {
    display: flex;
    height: 90vh;
    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
    }
  }
`;

const FlexContainerColumn = styled.div`
   {
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
  }
`;

const Picture = styled.picture`
   {
    @media (max-width: 768px) {
      width: 100;
    }
  }
`;

const Image = styled.img`
   {
    width: auto;
    object-fit: cover;
    height: 90vh;
    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`;
const Text = styled.p`
   {
    font-size: 20px;
  }
`;

const Name = styled.span`
   {
    position: relative;
    font-size: 20px;
    text-shadow: 2px -1px 0px #4f7dff;
    font-weight: 700;
  }
`;
const Wheel = styled.img`
   {
    position: relative;
    font-size: 20px;
    width: 3em;
    margin: 0 0 0 auto;
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
  }
`;

const Title = styled.h2`
   {
    font-size: 2em;
    &:before {
      content: "[ ";
      left: 0;
    }

    &:after {
      content: " ]";
      right: 0;
    }

    &:after,
    &:before {
      top: 0;

      color: #001027;
      font-size: 42px;
      line-height: 40px;

      -webkit-animation-name: opacity;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      animation-name: opacity;
      animation-duration: 2s;
      animation-iteration-count: infinite;
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
  }
`;
