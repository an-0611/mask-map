import React, { Component } from 'react';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import img from '../cross.png';

class SearchMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    console.log(this.props.data)
    const geojsonLayer = L.geoJSON(this.props.data, {
      onEachFeature: this.onEachFeature, // this.onEachFeature
      pointToLayer: () => {}, // this.pointToLayer,
      filter: () => {}, // this.filterFeatures
    });
    console.log(geojsonLayer)

    // console.log(L)//L.geoJson
    // L.geoJson()
    // L.geoJson(null, {
    //   pointToLayer: function (feature, latlng) {
    //   //根據場地性質給不同marker icon
    //   var icon;
    //   if (feature.properties.surface === "紅土[clay]") icon = img;
    //   else if (feature.properties.surface === "硬地[hard]") icon = img;
    //   else if (feature.properties.surface === "草地[grass]") icon = img;
    //   else icon = img;
  
    //   return L.marker(latlng, {
    //     icon: L.icon({
    //       iconUrl: icon,
    //       iconSize: [24, 24],
    //       iconAnchor: [12, 12],
    //       popupAnchor: [0, -25]
    //     }),
    //     title: feature.properties.name,
    //     riseOnHover: true
    //   });
    //   },

    // fetch('https://dist/assets/data/map.geojson', function (data) {
    // //   pois.addData(data);
    // //   map.addLayer(pois);
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState)
    // 調用組件的處理程序時，它將根據其支持的動態屬性更新其Leaflet實例。
  }

  onEachFeature = (feature, layer) => {
    console.log(feature, layer)
  }

  componentWillUnmount() {
    // 調用組件的處理程序時，如果相關，它將從地圖中刪除其圖層。
  }

  render() {
    const position = [25.0477244, 121.5416863];
    return (
      // <div style={{ width: '100%', height: '100%' }}>
        // {/* <div id="map" style={{ width: '100%', height: '100%' }} /> */}
        // {/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" /> */}
      // </div>
      <Map center={position} zoom={15} style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
          // attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    );
  }
}

export default SearchMap;