import React from 'react';
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
`;

// const 

export const Sidebar = () => {
  return (
    <SideNav>

    </SideNav>
  );
};