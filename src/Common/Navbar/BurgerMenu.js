import React from "react";
import styled from "styled-components";

const Burgermenu = (props) => {
  function handleChange(event) {
    props.onChange(props.navbarState);
  }

  return (
    <Wrapper onClick={handleChange} className={` ${props.navbarState ? "open" : "" } ${props.scrollClass}`}>
      <div className={` ${props.navbarState ? "open" : "" } ${props.scrollClass}`}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
};

export default Burgermenu;

const Wrapper = styled.div`
  position: relative;
  padding-top: 0.7rem;
  cursor: pointer;
  display: block;
  z-index: 20;
  
  @media (min-width: 768px) {
    display: none;
    &.open {
      display: block;
    }
    &.sticky {
      display: block;
    }
  }

  & span {
    background: white;
    display: block;
    position: relative;
    width: 3.5rem;
    height: 0.4rem;
    margin-bottom: 0.3rem;
    transition: all ease-in-out 0.2s;
  }
  span:nth-child(2) {
    opacity: 0;
  }
  .open:not(.sticky) span:nth-child(1) {
    background: white;
    transform: rotate(-45deg);
    top: 11px;
  }
  .open:not(.sticky) span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
    background: white;
  }

  .sticky:not(.open) span:nth-child(1) {
    background: var(--primary);
  }
  .sticky:not(.open) span:nth-child(3) {
    background: var(--primary);
  }

  .sticky.open span:nth-child(1) {
    background: white;
    transform: rotate(-45deg);
    top: 11px;
  }
  .sticky.open span:nth-child(3) {
    transform: rotate(45deg);
    background: white;
    top: -11px;
  }

  
`;
