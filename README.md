# Gui_Prototype

Tech stacks:<br/>
1)React, Vite and Context<br/>
2)ArcGIS Calcite Design System instead of Bootstrap<br/>
  npm install --save @esri/calcite-components-react
  npm install @arcgis/map-components-react


------RFP Questions-----------
--------------
1)ArcGIS Calcite Design System vs Bootstrap   => too many framework will bloat the app? ArcGIS Calcite Design System  is good enough for the complex app<br/>
2)Need React?   React Components or React state management ?<br/>


---------------New technology: Web Components-----------
--------------
         1)You can use API directly from ArcGIS Maps SDK for Javascript to create a map
         2)You can use Components to create a map; ESRI use Web Components technology to wrap the ArcGIS Map SDK for Javascript,but just availabe in Maps(2D)
         3)You can use Component-React to create a map; ESRI use React to further wrap the above Components.

--------------ESRI encourge to use CDN for Assets-------------
----------
@import "https://js.arcgis.com/4.30/@arcgis/core/assets/esri/themes/dark/main.css";
@import "https://js.arcgis.com/calcite-components/2.11.1/calcite.css";

The SDK's assets include styles, images, web workers, wasm and localization files.
Default assets:
For most use cases when doing local builds, it is recommended to use the SDK's assets from the ArcGIS CDN. They are loaded by default from the following URLs, and no additional configuration is required:

@arcgis/core: https://js.arcgis.com/%jsapi_version%/@arcgis/core/assets/
@arcgis/map-components: https://js.arcgis.com/map-components/%jsapi_version%/assets
@esri/calcite-components: https://js.arcgis.com/calcite-components/%mapComponentsCalciteVersion%/assets

Using the ArcGIS CDN eliminates the need to bundle these assets with your local build. This reduces the on-disk build size, and can improve build times
-------------------


----------not recommmend to load the code from CDN------------------
<!-- Load Map Components from CDN-->
  <link rel="stylesheet" href="https://js.arcgis.com/4.30/esri/themes/light/main.css">
  <script src="https://js.arcgis.com/4.30/"></script>
  <script type="module" src="https://js.arcgis.com/map-components/4.30/arcgis-map-components.esm.js"></script>

<body>

  <arcgis-map item-id="05e015c5f0314db9a487a9b46cb37eca">

    <arcgis-legend position="bottom-right"></arcgis-legend>

  </arcgis-map>

</body>
------------------------ES module way------------------
<!-- CSS from CDN -->
    <link rel="stylesheet" href="https://js.arcgis.com/4.28/@arcgis/core/assets/esri/themes/light/main.css">

<!-- JavaScript from CDN -->
    <script type="module">
        import Map from "https://js.arcgis.com/4.28/@arcgis/core/Map.js";
        import MapView from "https://js.arcgis.com/4.28/@arcgis/core/views/MapView.js";
        import esriConfig from "https://js.arcgis.com/4.28/@arcgis/core/config.js";

        // Set portal URL (optional)
        esriConfig.portalUrl = "https://www.arcgis.com";

        const map = new Map({
            basemap: "topo-vector"
        });

        const view = new MapView({
            container: "viewDiv",
            map: map,
            zoom: 4,
            center: [-98, 35]
        });
    </script>