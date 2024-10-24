import React, { useState } from 'react';
import { ArcgisMap } from '@arcgis/map-components-react';
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-notice";
import { CalcitePanel, CalciteNotice } from "@esri/calcite-components-react";

const TestMapComp = () => {
  const [viewReady, setViewReady] = useState(false);

  const handleViewReady = (event) => {
    console.log('Map view is ready:', event.detail.view);
    setViewReady(true);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <CalcitePanel heading="ArcGIS Map Example">
        <ArcgisMap
          style={{ width: '100%', height: '400px' }}
          mapProperties={{
            basemap: 'topo-vector'
          }}
          viewProperties={{
            center: [-118.805, 34.027],
            zoom: 13
          }}
          onArcViewReadyChange={handleViewReady}
        />
        {viewReady && (
          <CalciteNotice kind="success">
            <div slot="message">Map view is ready!</div>
          </CalciteNotice>
        )}
      </CalcitePanel>
    </div>
  );
};

export default TestMapComp;
