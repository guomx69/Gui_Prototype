import React from 'react';
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-panel";

import { CalciteButton, CalcitePanel} from "@esri/calcite-components-react";

import { setAssetPath } from "@esri/calcite-components/dist/components";

import "@arcgis/core/assets/esri/themes/light/main.css";

setAssetPath("https://unpkg.com/@esri/calcite-components/dist/calcite/assets");

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <CalcitePanel heading="Welcome to the Home Page!">
        <p>
          This is a simple hero unit, a simple panel-style component for calling extra attention to featured content or information.
        </p>
        <CalciteButton appearance="solid" color="blue" href="#learn-more">
          Learn more
        </CalciteButton>
      </CalcitePanel>
    </div>
  );
};

export default Home;
