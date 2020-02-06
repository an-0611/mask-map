import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';
import SearchBar from './SearchBar';
// https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json

const Data = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "id": 5901012203,
                "name": "博荃藥局",
                "phone": "02 -27316736",
                "address": "台北市松山區敦化北路4巷51號",
                "mask_adult": 2,
                "mask_child": 0,
                "updated": "2020\n/02\n/06 18:31:33",
                "available": "星期一上午看診、星期二上午看診、星期三上午看診、星期四上午看診、星期五上午看診、星期六上午看診、星期日上午休診、星期一下午看診、星期二下午看診、星期三下午看診、星期四下午看診、星期五下午看診、星期六下午看診、星期日下午休診、星期一晚上看診、星期二晚上看診、星期三晚上看診、星期四晚上看診、星期五晚上看診、星期六晚上看診、星期日晚上休診",
                "note": "如遇國定連續假期,藥局公休",
                "mark_adult": 1,
                "mark_child": 1,
                "custom_note": "",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    121.544742,
                    25.050063
                ]
            }
        },
        {
          "type": "Feature",
          "properties": {
              "id": 5901012383,
              "name": "德川中西藥局",
              "phone": "02 -27683399",
              "address": "台北市松山區八德路4段96號",
              "mask_adult": 0,
              "mask_child": 0,
              "updated": "",
              "available": "星期一上午看診、星期二上午看診、星期三上午看診、星期四上午看診、星期五上午看診、星期六上午休診、星期日上午休診、星期一下午看診、星期二下午看診、星期三下午看診、星期四下午看診、星期五下午看診、星期六下午休診、星期日下午看診、星期一晚上看診、星期二晚上看診、星期三晚上看診、星期四晚上看診、星期五晚上看診、星期六晚上休診、星期日晚上休診",
              "note": "",
              "mark_adult": 0,
              "mark_child": 0,
              "custom_note": "",
              "website": ""
          },
          "geometry": {
              "type": "Point",
              "coordinates": [
                  121.56066,
                  25.04836
              ]
          }
      },
      {
        "type": "Feature",
        "properties": {
            "id": 5901012383,
            "name": "德川中西藥局",
            "phone": "02 -27683399",
            "address": "台北市松山區八德路4段96號",
            "mask_adult": 0,
            "mask_child": 0,
            "updated": "",
            "available": "星期一上午看診、星期二上午看診、星期三上午看診、星期四上午看診、星期五上午看診、星期六上午休診、星期日上午休診、星期一下午看診、星期二下午看診、星期三下午看診、星期四下午看診、星期五下午看診、星期六下午休診、星期日下午看診、星期一晚上看診、星期二晚上看診、星期三晚上看診、星期四晚上看診、星期五晚上看診、星期六晚上休診、星期日晚上休診",
            "note": "",
            "mark_adult": 0,
            "mark_child": 0,
            "custom_note": "",
            "website": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                121.56066,
                25.04836
            ]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "id": 5901012383,
            "name": "德川中西藥局",
            "phone": "02 -27683399",
            "address": "台北市松山區八德路4段96號",
            "mask_adult": 0,
            "mask_child": 0,
            "updated": "",
            "available": "星期一上午看診、星期二上午看診、星期三上午看診、星期四上午看診、星期五上午看診、星期六上午休診、星期日上午休診、星期一下午看診、星期二下午看診、星期三下午看診、星期四下午看診、星期五下午看診、星期六下午休診、星期日下午看診、星期一晚上看診、星期二晚上看診、星期三晚上看診、星期四晚上看診、星期五晚上看診、星期六晚上休診、星期日晚上休診",
            "note": "",
            "mark_adult": 0,
            "mark_child": 0,
            "custom_note": "",
            "website": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                121.56066,
                25.04836
            ]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "id": 5901012383,
            "name": "德川中西藥局",
            "phone": "02 -27683399",
            "address": "台北市松山區八德路4段96號",
            "mask_adult": 0,
            "mask_child": 0,
            "updated": "",
            "available": "星期一上午看診、星期二上午看診、星期三上午看診、星期四上午看診、星期五上午看診、星期六上午休診、星期日上午休診、星期一下午看診、星期二下午看診、星期三下午看診、星期四下午看診、星期五下午看診、星期六下午休診、星期日下午看診、星期一晚上看診、星期二晚上看診、星期三晚上看診、星期四晚上看診、星期五晚上看診、星期六晚上休診、星期日晚上休診",
            "note": "",
            "mark_adult": 0,
            "mark_child": 0,
            "custom_note": "",
            "website": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                121.56066,
                25.04836
            ]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "id": 5901012383,
            "name": "德川中西藥局",
            "phone": "02 -27683399",
            "address": "台北市松山區八德路4段96號",
            "mask_adult": 0,
            "mask_child": 0,
            "updated": "",
            "available": "星期一上午看診、星期二上午看診、星期三上午看診、星期四上午看診、星期五上午看診、星期六上午休診、星期日上午休診、星期一下午看診、星期二下午看診、星期三下午看診、星期四下午看診、星期五下午看診、星期六下午休診、星期日下午看診、星期一晚上看診、星期二晚上看診、星期三晚上看診、星期四晚上看診、星期五晚上看診、星期六晚上休診、星期日晚上休診",
            "note": "",
            "mark_adult": 0,
            "mark_child": 0,
            "custom_note": "",
            "website": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                121.56066,
                25.04836
            ]
        }
      },

    ]
};

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
      data: Data.features,
    };
  }

  handleToggle = () => {
    const { isReduce } = this.state;
    this.setState({ isReduce: !isReduce });
  }

  render() {
    const { isReduce, data } = this.state;
    // console.log(data[0].properties)
    return (
      <SideBarContainer primary={isReduce} >
        <SideBarToggleBtn onClick={this.handleToggle}>{ isReduce ? '>' : '<'}</SideBarToggleBtn>
        { !isReduce &&
          <Fragment>
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
                    <div>{`成人口罩: ${item.properties.mark_adult}`}</div>
                    <div>{`兒童口罩: ${item.properties.mark_child}`}</div>
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