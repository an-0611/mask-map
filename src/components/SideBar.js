import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const SideBarContainer = styled.div`
  min-width: 30vw;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
`

const SideBarToggleBtn = styled.div`
  // position
`

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarToggleBtn>{'<'}</SideBarToggleBtn>
      <SearchBar />
      附近藥局資訊
    </SideBarContainer>
  );
}

export default SideBar;