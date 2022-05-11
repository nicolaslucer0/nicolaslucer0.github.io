import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <FooterNode></FooterNode>;
};
export default Footer;

const FooterNode = styled.footer`
  padding: 3em 9em;
  border-top: 1px solid #ddd;
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
