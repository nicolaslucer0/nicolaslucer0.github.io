import React from "react";
import styled from "styled-components";
import img from "../Assets/img/me.jpg";
import imgMobile from "../Assets/img/me_mobile.jpg";
import imgwheel from "../Assets/img/wheel-min.png";
const AboutMe = () => {
  return (
    <>
      <FlexContainerRow id="about-me">
        <Image />
        <FlexContainerColumn>
          <Title>Sobre mí</Title>
          <Text>
            Mi nombre es <Name>Nicolás</Name>, soy de Buenos Aires, Argentina. Soy
            desarrollador fullstack, me encanta crear y diseñar cosas nuevas.
            Actualmente estoy trabajando en redbee y también hago trabajos
            Freelance. 
          </Text>
          <Text>
            Ademas soy profesor y ejercí 5 años en el área de la educación.
          </Text>
          <Text>
            Amante de la música y de{" "}
              patinar.
          </Text>
              <Wheel className="first" src={imgwheel} />
        </FlexContainerColumn>
      </FlexContainerRow>
    </>
  );
};
export default AboutMe;

const FlexContainerRow = styled.div`
   {
    display: flex;
    height: 90vh;
    @media (max-width: 768px) {
      flex-direction: column;
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
      width: 90%;
      padding: 0;
    }
  }
`;

const Image = styled.div`
   {
    width: 30%;
    height: 90vh;
    object-fit: cover;
    background-size: cover;
    background-image: url(${img});
    @media (max-width: 768px) {
      background-image: url(${imgMobile});
      width: 100%;
      padding: 0;
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
        from { -moz-transform: rotate(0deg); }
        to { -moz-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
        from { -webkit-transform: rotate(0deg); }
        to { -webkit-transform: rotate(360deg); }
    }
    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
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
