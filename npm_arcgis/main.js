import "./index.css";

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";

document
  .querySelector("arcgis-map")
  .addEventListener("arcgisViewReadyChange", (event) => {
    /**
     * Get a reference to the `WebMap`
     * from the `event.detail` object.
     */
    const { map } = event.target;
    // Add more functionality here.
    console.log("map",map);
  });