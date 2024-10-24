import React from 'react';
import { defineCustomElements } from '@esri/calcite-components/dist/loader';

defineCustomElements(window);

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <calcite-panel heading="Welcome to the Home Page!">
        <p>
          This is a simple hero unit, a simple panel-style component for calling extra attention to featured content or information.
        </p>
        <calcite-button appearance="solid" color="blue" href="#learn-more">
          Learn more
        </calcite-button>
      </calcite-panel>
    </div>
  );
};

export default Home;
