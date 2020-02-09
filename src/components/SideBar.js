import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';
import L from 'leaflet';
import SearchBar from './SearchBar';

const SideBarContainer = styled.div`
  max-width: 25vw;
  height: 100%;
  position: fixed;
  background: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  z-index: 99999999999;
  ${props =>
    props.primary &&
    css`
      min-width: 0vw;
      padding: 0;
    `};
`

const SideBarToggleBtn = styled.div`
  width: 35px;
  height: 35px;
  line-height: 32px;
  font-size: 22px;
  color: black;
  position: fixed;
  top: 50%;
  left: 26.7%;
  text-align: center;
  border: 1px solid black;
  border-radius: 50%;
  z-index: 999999999999999;
  cursor: pointer;
  ${props =>
    props.primary &&
    css`
      left: -1.2%;
    `};
`

const Shops = styled.div`
  border: 1px solid black;
  margin: 10px 0;
`

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.geoJson.features,
    };
  }

  render() {
    const { data } = this.state;
    const { isReduce, handleToggle } = this.props;
    return (
      <SideBarContainer primary={isReduce} >
        <SideBarToggleBtn primary={isReduce} onClick={handleToggle}>{ isReduce ? '>' : '<'}</SideBarToggleBtn>
        { !isReduce &&
          <Fragment>
            <div>提醒您，目前部分藥局採用抽號領取，實際數量需電話聯繫店家查詢</div>
            <SearchBar />
            <div>附近藥局列表</div>
            <div style={{ width: '100%', height: '80vh', overflow: 'scroll' }}>
              { data.length > 0 &&
                data.map((item, i) => (
                  <Shops key={i} onClick={() => { console.log(L); L.point(item.geometry.coordinates[1], item.geometry.coordinates[0]);console.log(item.geometry.coordinates) }}>
                    <div>{`名稱: ${item.properties.name}`}</div>
                    <div>{`地址: ${item.properties.address}`}</div>
                    <div>{`上次更新時間： ${item.properties.updated}`}</div>
                    <div>口罩剩餘數量</div>
                    <div>{`成人口罩: ${item.properties.mask_adult}`}</div>
                    <div>{`兒童口罩: ${item.properties.mask_child}`}</div>
                    <div></div>
                    <div></div>
                  </Shops>
                ))
              }
            </div>
          </Fragment>
        }
      </SideBarContainer>
    );
  }
}

export default SideBar;