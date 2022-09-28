import { useCallback } from "react";
import Particles from "react-particles";
import styled from "styled-components";
import contact from "../assets/img/contact.jpeg";
import gmail from "../assets/img/social/gmail.png";
import instagram from "../assets/img/social/instagram.png";
import linkedin from "../assets/img/social/linkedin.png";
import aboutme from "../assets/img/social/me.png";
import { ThemeProps } from "../commons/ThemeProps";
import { Title } from "./Styles";

import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
export const Contact = ({ theme }: ThemeProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    <>
      <FlexContainerColumn id="contact">
        <Particles
          canvasClassName="asd"
          id="tsparticles"
          init={particlesInit}
          style={{ position: "absolute" }}
          options={{
            fullScreen: {
              zIndex: 0,
            },
            emitters: [
              {
                position: {
                  x: 0,
                  y: 20,
                },
                rate: {
                  quantity: 1,
                  delay: 0,
                },
                particles: {
                  move: {
                    direction: "top-right",
                    outModes: {
                      top: "none",
                      left: "none",
                      default: "destroy",
                    },
                  },
                },
              },
              {
                position: {
                  x: 100,
                  y: 30,
                },
                rate: {
                  quantity: 1,
                  delay: 0,
                },
                particles: {
                  move: {
                    direction: "top-left",
                    outModes: {
                      top: "none",
                      right: "none",
                      default: "destroy",
                    },
                  },
                },
              },
            ],
            particles: {
              color: {
                value: ["#ffffff"],
              },
              move: {
                decay: 0.1,
                direction: "top",
                enable: true,
                gravity: {
                  enable: true,
                },
                outModes: {
                  top: "none",
                  default: "destroy",
                },
                speed: {
                  min: 1,
                  max: 100,
                },
              },
              number: {
                value: 0,
              },
              opacity: {
                value: 1,
              },
              rotate: {
                value: {
                  min: 0,
                  max: 360,
                },
                direction: "random",
                animation: {
                  enable: true,
                  speed: 30,
                },
              },
              tilt: {
                direction: "random",
                enable: true,
                value: {
                  min: 0,
                  max: 360,
                },
                animation: {
                  enable: true,
                  speed: 30,
                },
              },
              size: {
                value: {
                  min: 0,
                  max: 2,
                },
                animation: {
                  enable: true,
                  startValue: "min",
                  count: 1,
                  speed: 16,
                  sync: true,
                },
              },
              roll: {
                darken: {
                  enable: true,
                  value: 25,
                },
                enable: true,
                speed: {
                  min: 5,
                  max: 15,
                },
              },
              wobble: {
                distance: 30,
                enable: true,
                speed: {
                  min: -7,
                  max: 7,
                },
              },
              shape: {
                type: ["circle", "square"],
                options: {},
              },
            },
          }}
        />
        <Title className={`title-${theme}`}>How to contact me?</Title>
        <FlexContainerRow>
          <Image
            src={contact}
            alt="I will leave an easter egg, or I did it already?"
          />
          <Card className={theme}>
            <InfoContainer>
              <Logo src={gmail} />
              <Link href="mailto:nicolas.lucero1@gmail.com">
                nicolas.lucero1@gmail.com
              </Link>
            </InfoContainer>
            <InfoContainer>
              <Logo src={aboutme} />
              <Link target="_blank" href="https://about.me/nicolaslucero">
                About me
              </Link>
            </InfoContainer>
            <InfoContainer>
              <Logo src={linkedin} />
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/nicolaslucero1/"
              >
                Linkedin
              </Link>
            </InfoContainer>
            <InfoContainer>
              <Logo src={instagram} />
              <Link target="_blank" href="https://instagram.com/nicolaslucerox">
                Instagram
              </Link>
            </InfoContainer>
          </Card>
        </FlexContainerRow>
      </FlexContainerColumn>
    </>
  );
};

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  padding: 1em;
  position: relative;
  box-sizing: border-box;
  transition: 0.5s;

  &:hover {
    background-color: #eaeaea73;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  text-align: start;
  flex-grow: 1;
  text-align: start;
  justify-content: flex-start;
  margin: 0 1em;

  &:hover {
    text-decoration: underline;
  }
`;

const FlexContainerRow = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  object-fit: cover;
  position: relative;
  width: 43%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 5em auto;
  position: relative;
  .asd {
    position: absolute !important;
  }
  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
  }
`;

const Card = styled.div`
  z-index: 1;
  position: relative;
  background: #ffffff63;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  flex-direction: column;
  position: relative;
  flex-grow: 0;
  box-sizing: border-box;
  align-items: center;
  box-shadow: 3px 3px 5px 0px #00000054;
  border-radius: 0 10px 10px 0;
  transition: 0.5s;

  &.dark {
    a {
      color: white;
    }
  }
  &.light {
    a {
      color: black;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    border-radius: 10px 10px 0 0;
  }
`;

const Logo = styled.img`
  width: 10%;
`;

const Image = styled.img`
  z-index: 3;
  width: 60%;
  position: relative;
  object-fit: contain;
  border-radius: 10px 0 0 10px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 10px 10px;
  }
`;
