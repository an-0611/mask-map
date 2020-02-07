import React, { Component } from 'react';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
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
  "iconSize": [30, 30],
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
    const { geoJson } = this.props;
    const geojsonLayer = L.geoJSON(geoJson, {
      onEachFeature: this.onEachFeature,
      pointToLayer: this.pointTolayer,
      // filter: this.filterFeatures,
    });

    // geojsonLayer.addTo(Map);
    console.log(geojsonLayer);

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
    if (feature.properties) {
      // 點擊該maker出現的光箱
      // assemble the HTML for the markers' popups (Leaflet's bindPopup method doesn't accept React JSX)
      const popupContent = `<h3>'name'</h3>
        <strong>Access to MTA lines: </strong>linestr`;
      // add our popups
      layer.bindPopup(popupContent);
    }
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
    if (selfLoading) return <div>Loading...</div>;
    return (
      <Map
        center={myselfPos}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
        onClick={() => {}}
        onViewportChanged={() => { console.log('change')}}
        // viewport={position}>

      >
        <TileLayer url="https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" />
        <Marker position={myselfPos} icon={L.icon(userIcon)} />
        { geoJson.features.map((pharmacy, i) => (
            <Marker key={i} position={reverse(pharmacy.geometry.coordinates)} icon={L.icon(icon)}>
              <Popup style={{ textAlign: 'center' }}>
                <div>{`名稱：${pharmacy.properties.name}`}</div>
                <div>{`地址：${pharmacy.properties.address}`}</div>
                <div>{`電話：${pharmacy.properties.address}`}</div>
                <div>{`成人口罩剩餘數量：${pharmacy.properties.mask_adult}`}</div>
                <div>{`兒童口罩剩餘數量：${pharmacy.properties.mask_child}`}</div>
                <div>{`資料更新時間：${pharmacy.properties.updated}`}</div>
                <div>{`營業時間：${pharmacy.properties.available}`}</div>
                <div>{`備註：${pharmacy.properties.note}`}</div>
              </Popup>
            </Marker>
          ))
        }
      </Map>
    );
  }
}

export default SearchMap;