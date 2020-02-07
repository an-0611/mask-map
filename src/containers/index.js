import React, { Component, Fragment } from 'react';
import SideBar from '../components/SideBar';
import SearchMap from '../components/SearchMap';
// import ShopInfo from '../components/ShopInfo';

const geoJson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "id": "5901103272",
                "name": "長安藥局",
                "phone": "02 -27772740",
                "address": "台北市中山區長安東路2段171－3號",
                "mask_adult": 70,
                "mask_child": 46,
                "updated": "2020\n/02\n/07 16:23:35",
                "available": "星期一上午看診、星期二上午看診、星期三上午看診、星期四上午看診、星期五上午看診、星期六上午看診、星期日上午休診、星期一下午看診、星期二下午看診、星期三下午看診、星期四下午看診、星期五下午看診、星期六下午看診、星期日下午休診、星期一晚上看診、星期二晚上看診、星期三晚上看診、星期四晚上看診、星期五晚上看診、星期六晚上看診、星期日晚上休診",
                "note": "上午9:30-晚上10:30",
                "custom_note": "",
                "website": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    121.541786,
                    25.048401
                ]
            }
        },
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

class MapContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          geoJson: {},
          fetchDataLoading: true,
      };
    }
    
    componentDidMount() {
        const a = fetch('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json').then(res => res.json());
        a.then(geoJson => {
            this.setState({
                geoJson,
                fetchDataLoading: false,
            });
        });
    }

    render() {
        // const { fetchDataLoading, geoJson } = this.state;
        // if (fetchDataLoading) return <div>Loading...</div>;
        return (
            <Fragment>
                <SideBar geoJson={geoJson} />
                <SearchMap geoJson={geoJson} />
                {/* <ShopInfo /> */}
            </Fragment>
        );
    }
}

export default MapContainer;
