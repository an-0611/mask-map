import React from 'react';
import styled from 'styled-components';
import MapContainer from './containers/index';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <MapContainer />
    </AppContainer>
  );
}

export default App;
