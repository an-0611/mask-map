import React, { Fragment } from 'react';
import SideBar from '../components/SideBar';
import SearchMap from '../components/SearchMap';
import ShopInfo from '../components/ShopInfo';

function MapContainer() {
  return (
    <Fragment>
        <SideBar />
        <SearchMap />
        <ShopInfo />
        <div>notify 你訂閱的店家口罩進貨了</div>
    </Fragment>
  );
}

export default MapContainer;
