import React, { useRef } from 'react';
import styled from 'styled-components';

const SideNav = styled.div`
  height: 100%;
  width: 0; 
  position: fixed; 
  z-index: 1; 
  top: 0; 
  left: 0;
  background-color: #111; 
  overflow-x: hidden; 
  padding-top: 60px; 
  transition: 0.5s;

  &:hover {
    color: #f1f1f1;
  }
`;

const OpenBtn = styled.span`
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  padding: 8px;
  transition: color 0.25s;

  &:hover {
    color: #f1f1f1;
  }
`;

const CloseBtn = styled.a`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 20px;
  margin-top: 8px;
  margin-left: 50px;
`;

const SideNavLinks = styled.a`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;

  &:hover {
    color: #f1f1f1;
  }
`;

export const Sidebar = () => {
  const sideNav = useRef();

  return (
    <div>
    <OpenBtn onClick={() => sideNav.current.style.width = '250px'}>Social Links
    </OpenBtn>
      <SideNav ref={sideNav}>
        <CloseBtn
          onClick={() => sideNav.current.style.width = '0'}>close</CloseBtn>
        <SideNavLinks 
          href="https://www.linkedin.com/in/kevinxzhang/"
          target="_blank">linkedin</SideNavLinks>
        <SideNavLinks 
          href="http://kevzh.com/"
          target="_blank">portfolio</SideNavLinks>
        <SideNavLinks 
          href="https://github.com/kxwzhang"
          target="_blank">github</SideNavLinks>
      </SideNav>
    </div>
  );
};