(this["webpackJsonpmask-map"]=this["webpackJsonpmask-map"]||[]).push([[0],{32:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAACmAAAApgHdff84AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAxQTFRF////71pa71lZ71lZ4STJlQAAAAN0Uk5TAIDAWpGeJQAAACJJREFUCJljYGD8/9+BgYF4KjTs//+poQz/wYB0CqqdVGsBVoRWaQ5O6ccAAAAASUVORK5CYII="},33:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF4SURBVEiJ7ZK9S0JRGIef1ytGEUQYCC1F0NQSNARNzQVNomRz/0AEkRIR4QfUHyBIQ0GlQgRBrS1tjVFbS0MQFCH0gZX3NKjgVTvnqkFLv/E9932e8577ilIKY9aCo5SsBDBVqVxgSZTN7K2pVYyC6Pwk2OdAd93JG0qmSWYvde0evV4EZe82gQP0IGpHfzvTBKvBEcTSP4Othkjl7346NkzgCejvB3g9g7pjvcDmBtD9pBJF31X7glS+gEhG80Warb3X9gUAH74lhOOGunDEZ9eKqd28ptXEQhEUsyAKxSnJ3KGbNsMWLfTD1zYe5lAMODt5xOYEvMsk959bF0TDM0AG0G4JcA8sksiduRfEwiEUOQO4jkSYeC5vFsQiAVTpGvC3JIAnxBojfvBQW2zcIlVKtwEH8Fd6HXFOsBHqpSiFpmJ3selSfaznX6oFJ+id8Q7gZV6ZUVOojcVEB/CmDKdAyXDHgjpGvUB+QeBgdPLervIv+HvBNzwSdktpTcNGAAAAAElFTkSuQmCC"},39:function(e,t,n){e.exports=n(51)},44:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(15),r=n.n(i),c=(n(44),n(30)),s=n(34),l=n(18),A=n(11),u=n(21),p=n(19),m=n(22),d=n(2),g=n.n(d),h=n(25),f=n(27),v=n(26),E=n(28),y=n(31),B=n.n(y),k=(n(48),n(49),n(32)),S=n.n(k),j=n(33),w=n.n(j),b={iconUrl:S.a,iconSize:[24,24],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},C={iconUrl:w.a,iconSize:[25,25],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},F=function(e){if(!(!e instanceof Array)&&2===e.length)return[e[1],e[0]]},I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).getMyselfPosition=function(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}))},n.onEachFeature=function(e,t){},n.pointTolayer=function(e,t){},n.filterFeatures=function(e,t){},n.state={myselfPos:[],selfLoading:!0},n}return Object(m.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.geoJson;g.a.geoJSON(t,{onEachFeature:this.onEachFeature}),this.getMyselfPosition().then((function(t){0===e.state.myselfPos.length&&e.setState({myselfPos:[t.coords.latitude,t.coords.longitude],selfLoading:!1})}))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.geoJson,t=this.state,n=t.selfLoading,a=t.myselfPos;if(navigator.geolocation)return n?o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",float:"right"}},o.a.createElement("div",null,"Loading...")):o.a.createElement(h.a,{center:a,zoom:14,minZoom:13,maxZoom:18,style:{width:"100%",height:"100%",marginTop:"20px"},ZoomControl:!1},o.a.createElement(f.a,{url:"https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"}),o.a.createElement(v.a,{position:a,icon:g.a.icon(C),draggable:!1,opacity:1},o.a.createElement(E.a,{permanent:!0,offset:[0,-36]},o.a.createElement("div",null,"\u73fe\u5728\u4f4d\u7f6e"))),o.a.createElement(B.a,{disableClusteringAtZoom:16},e.features.map((function(e,t){return o.a.createElement(v.a,{key:t,position:F(e.geometry.coordinates),icon:g.a.icon(b)},o.a.createElement(E.a,{offset:[0,-36]},o.a.createElement("div",null,e.properties.name),e.properties.phone?o.a.createElement("div",null,"\u96fb\u8a71: ",o.a.createElement("a",{href:"tel:".concat(e.properties.phone)},e.properties.phone)):o.a.createElement("div",null,"\u96fb\u8a71: '\u7121' }"),o.a.createElement("div",null,"\u5730\u5740\uff1a".concat(e.properties.address?e.properties.address:"\u7121")),o.a.createElement("div",null,"\u6210\u4eba\u53e3\u7f69\u6578\u91cf\uff1a".concat(e.properties.mask_adult?e.properties.mask_adult:"\u78ba\u8a8d\u4e2d")),o.a.createElement("div",null,"\u5152\u7ae5\u53e3\u7f69\u6578\u91cf\uff1a".concat(e.properties.mask_child?e.properties.mask_child:"\u78ba\u8a8d\u4e2d")),o.a.createElement("div",null,"\u66f4\u65b0\u6642\u9593\uff1a".concat(e.properties.updated?e.properties.updated:"\u78ba\u8a8d\u4e2d"))))}))))}}]),t}(a.Component),J=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={geoJson:{},fetchDataLoading:!0},n}return Object(m.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json").then((function(e){return e.json()})).then((function(t){e.setState({geoJson:t,fetchDataLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.fetchDataLoading,n=e.geoJson;if(t)return o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",float:"right"}},o.a.createElement("div",null,"Loading..."));return o.a.createElement(a.Fragment,null,o.a.createElement("div",{style:{width:"100%",textAlign:"center",position:"fixed",top:"0",right:"0",background:"white",zIndex:"999999999999"}},"\u63d0\u9192\u60a8\uff0c\u76ee\u524d\u90e8\u5206\u85e5\u5c40\u63a1\u7528\u62bd\u865f\u9818\u53d6\uff0c\u5be6\u969b\u6578\u91cf\u9700\u96fb\u8a71\u806f\u7e6b\u5e97\u5bb6\u67e5\u8a62"),o.a.createElement(I,{geoJson:n}))}}]),t}(a.Component);function O(){var e=Object(c.a)(["\n  width: 100vw;\n  height: 100vh;\n"]);return O=function(){return e},e}var Q=s.a.div(O());var G=function(){return o.a.createElement(Q,null,o.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.99eb1c34.chunk.js.map