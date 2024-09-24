import styled from "styled-components";
import linkedinImg from "../assets/img/cv.png";

const DownloadCVButton = () => {
  const handleOpenPDF = () => {
    const fileUrl = "/assets/cv.pdf";
    window.open(fileUrl, "_blank");
  };

  return (
    <StyledButton onClick={handleOpenPDF}>
      <StyledImage src={linkedinImg} alt="My linkedin" />
    </StyledButton>
  );
};

export default DownloadCVButton;

const StyledImage = styled.img`
  width: 30px;
`;

const StyledButton = styled.button`
  border: none;
  box-shadow: 0 0 0 0;
  margin: 0;
  padding: 0;
  background: transparent;
  &:hover {
    cursor: pointer;
  }
`;
