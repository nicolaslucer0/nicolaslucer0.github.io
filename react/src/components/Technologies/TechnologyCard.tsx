import styled from "styled-components";
type TechnologyCardProps = {
  image: string;
  tooltip: string;
};
export const TechnologyCard = ({ image, tooltip }: TechnologyCardProps) => (
  <Card>
    <Image src={image} />
    <Tooltip className="tooltip">{tooltip}</Tooltip>
  </Card>
);

const Card = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  margin: 60px 0;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  padding: 10px;
  transition: 0.5s;
  &:hover {
    .tooltip {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  background: #000000c1;
  color: white;
  padding: 10px;
  border-radius: 5px;
  top: -50px;
  width: 70%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  transition: 0.2s;
  font-weight: 100;
  text-align: center;
  opacity: 0;
  transform: scale(0.5) translateY(60px);
`;

const Image = styled.img`
  width: 100%;
  transition: 0.5s;
`;
