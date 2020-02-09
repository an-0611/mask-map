import React, { Component } from 'react';
import L from 'leaflet';
import { Map, Marker, TileLayer, Tooltip } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';

import 'leaflet/dist/leaflet.css';
import cross from '../cross.png';
import user from '../user.png';

const icon = {
  "iconUrl": cross,
  "iconSize": [16, 16],
  "iconAnchor": [12, 41],
  "popupAnchor": [1, -34],
  "shadowSize": [41, 41]
}

const userIcon = {
  "iconUrl": user,
  "iconSize": [22, 22],
  "iconAnchor": [12, 41],
  "popupAnchor": [1, -34],
  "shadowSize": [41, 41]
}

const reverse = (position) => {
  if (!position instanceof Array) return;
  if (position.length !== 2) return;
  return [position[1], position[0]];
}

class SearchMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myselfPos: [],
      selfLoading: true,
    };
  }

  componentDidMount() {
    // console.log(MarkerClusterGroup)
    const { geoJson } = this.props;
    L.geoJSON(geoJson, {
      onEachFeature: this.onEachFeature,
      // pointToLayer: this.pointTolayer,
      // filter: this.filterFeatures,
    });

    // console.log(geojsonLayer);

    // getmyselfposition to state
    this.getMyselfPosition().then(res => {
      if (this.state.myselfPos.length !== 0) return;
      this.setState({
        myselfPos: [res.coords.latitude, res.coords.longitude],
        selfLoading: false,
      });
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState)
  //   // 調用組件的處理程序時，它將根據其支持的動態屬性更新其Leaflet實例。
  // }

  getMyselfPosition = () => {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    });
  }

  onEachFeature = (feature, layer) => {
    // if (feature.properties) {
    //   // 點擊該maker出現的光箱
    //   // assemble the HTML for the markers' popups (Leaflet's bindPopup method doesn't accept React JSX)
    //   const popupContent = `<h3>'name'</h3>
    //     <strong>Access to MTA lines: </strong>linestr`;
    //   // add our popups
    //   layer.bindPopup(popupContent);
    // }
  }

  pointTolayer = (feature, latlng) => {
    // 圖標渲染該點
    // var markerParams = {
    //   radius: 4,
    //   fillColor: 'orange',
    //   color: '#fff',
    //   weight: 1,
    //   opacity: 0.5,
    //   fillOpacity: 0.8
    // };
    // return L.circleMarker(latlng, markerParams);
  }

  filterFeatures = (feature, layer) => {
    //  根據當前索引過濾地圖
    // const test = feature.properties.LINE.split('-').indexOf(this.state.subwayLinesFilter);
    // if (this.state.subwayLinesFilter === '*' || test !== -1) {
    //   return true;
    // }
  }

  componentWillUnmount() {
    // 調用組件的處理程序時，如果相關，它將從地圖中刪除其圖層。
  }

  render() {
    const { geoJson } = this.props;
    const { selfLoading, myselfPos } = this.state;
    if (!navigator.geolocation) return;
    if (selfLoading) return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', float: 'right' }}>
        <div>Loading...</div>
      </div>
    );

    return (
      <Map
        center={myselfPos}
        zoom={14}
        minZoom={13}
        maxZoom={18}
        style={{ width: '100%', height: '100%' }}
        // onClick={() => {}}
        // onViewportChanged={() => { console.log('change')}}
        // viewport={position}>
      >
        <TileLayer url="https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" />
        <Marker position={myselfPos} icon={L.icon(userIcon)} draggable={false} opacity={1}>
          <Tooltip permanent offset={[0, -36]}>
            <div>現在位置</div>
          </Tooltip>
        </Marker>

        <MarkerClusterGroup disableClusteringAtZoom={16}>
        { geoJson.features.map((pharmacy, i) => (
              <Marker key={i} position={reverse(pharmacy.geometry.coordinates)} icon={L.icon(icon)}>
                <Tooltip offset={[0, -36]}>
                  <div>{pharmacy.properties.name}</div>
                  <div>{`電話：${pharmacy.properties.phone ? pharmacy.properties.phone : '無' }`}</div>
                  <div>{`地址：${pharmacy.properties.address ? pharmacy.properties.address : '無' }`}</div>
                  <div>{`成人口罩數量：${pharmacy.properties.mask_adult ? pharmacy.properties.mask_adult : '確認中'}`}</div>
                  <div>{`兒童口罩數量：${pharmacy.properties.mask_child ? pharmacy.properties.mask_child : '確認中'}`}</div>
                  <div>{`更新時間：${pharmacy.properties.updated ? pharmacy.properties.updated : '確認中'}`}</div>
                </Tooltip>
                {/* <Popup>
                  <div>{pharmacy.properties.name}</div>
                  <div>{`電話：${pharmacy.properties.phone ? pharmacy.properties.phone : '無' }`}</div>
                  <div>{`地址：${pharmacy.properties.address ? pharmacy.properties.address : '無' }`}</div>
                  <div>{`成人口罩數量：${pharmacy.properties.mask_adult ? pharmacy.properties.mask_adult : '確認中'}`}</div>
                  <div>{`兒童口罩數量：${pharmacy.properties.mask_child ? pharmacy.properties.mask_child : '確認中'}`}</div>
                  <div>{`更新時間：${pharmacy.properties.updated ? pharmacy.properties.updated : '確認中'}`}</div>
                </Popup> */}
              </Marker>
            ))
          }
        </MarkerClusterGroup>
      </Map>
    );
  }
}

export default SearchMap;