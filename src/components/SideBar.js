import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';
import SearchBar from './SearchBar';
// https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json

const SideBarContainer = styled.div`
  min-width: 30vw;
  height: 100%;
  position: relative;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
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
  position: absolute;
  top: 50%;
  right: -21px;
  border: 1px solid black;
  border-radius: 50%;
  z-index: 999999999999999;
`

const Shops = styled.div`
  border: 1px solid black;
  margin: 10px 0;
`

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReduce: false,
      data: props.geoJson.features,
    };
  }

  handleToggle = () => {
    const { isReduce } = this.state;
    this.setState({ isReduce: !isReduce });
  }

  render() {
    const { isReduce, data } = this.state;
    return (
      <SideBarContainer primary={isReduce} >
        <SideBarToggleBtn onClick={this.handleToggle}>{ isReduce ? '>' : '<'}</SideBarToggleBtn>
        { !isReduce &&
          <Fragment>
            <div>提醒您，目前部分藥局採用抽號領取，實際數量需電話聯繫店家查詢</div>
            <SearchBar />
            <div>附近藥局列表</div>
            <div style={{ width: '100%', height: '80vh', overflow: 'scroll' }}>
              { data.length > 0 &&
                data.map((item, i) => (
                  <Shops key={i}>
                    <div>{`名稱: ${item.properties.name}`}</div>
                    <div>{`地址: ${item.properties.address}`}</div>
                    <div>{`上次更新時間： ${item.properties.updated}`}</div>
                    <div>口罩剩餘數量</div>
                    <div>{`成人口罩: ${item.properties.mask_adult}`}</div>
                    <div>{`兒童口罩: ${item.properties.mask_child}`}</div>
                    {/* <div>{`距離您的位置：${}`}</div> */}
                    {/* <div>{`預估領完時間：${}`}</div> */}
                    {/* <div>計算開店時間至現在時間每個小時的領取數量</div> */}
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