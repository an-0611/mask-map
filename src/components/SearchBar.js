import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  color: rgb(236, 70, 70);
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
  padding: 12px 24px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
`

function SearchBar() {
  return (
    <SearchBarContainer>
      <div>搜尋條件</div>

      <div>
        <input id="adult" type="checkbox" />成人口罩
        數量
        <select>
          <option>1~10</option>
          <option>11~20</option>
          <option>21~30</option>
          <option>31個以上</option>
        </select>
      </div>

      <div>
        <input id="child" type="checkbox" />兒童口罩
        數量
        <select>
          <option>1~10</option>
          <option>11~20</option>
          <option>21~30</option>
          <option>31個以上</option>
        </select>
      </div>
    </SearchBarContainer>
  );
}

export default SearchBar;