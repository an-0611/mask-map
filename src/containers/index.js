import React, { Component, Fragment } from 'react';
// import SideBar from '../components/SideBar';
import SearchMap from '../components/SearchMap';


class MapContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          geoJson: {},
          fetchDataLoading: true,
        //   isReduce: false,
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

    // handleToggle = () => {
    //     const { isReduce } = this.state;
    //     this.setState({ isReduce: !isReduce });
    // }

    render() {
        // const { isReduce } = this.state;
        const { fetchDataLoading, geoJson } = this.state;
        if (fetchDataLoading) return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', float: 'right' }}>
                <div>Loading...</div>
            </div>
        );
        const csss = {
            width: '100%',
            textAlign: 'center',
            position: 'fixed',
            top: '0',
            right: '0',
            background: 'white',
            zIndex: '999999999999',
        }
        return (
            <Fragment>
                <div style={csss}>提醒您，目前部分藥局採用抽號領取，實際數量需電話聯繫店家查詢</div>
                {/* <SideBar geoJson={geoJson} isReduce={isReduce} handleToggle={this.handleToggle} /> */}
                <SearchMap geoJson={geoJson} />
            </Fragment>
        );
    }
}

export default MapContainer;
