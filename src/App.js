import React from 'react';
import styled from 'styled-components';
import MapContainer from './containers/index';

const AppContainer = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function App() {
  return (
    <AppContainer>
      <MapContainer />
    </AppContainer>
  );
}

export default App;
