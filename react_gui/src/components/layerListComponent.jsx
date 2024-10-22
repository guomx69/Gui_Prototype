import React, { useEffect, useRef } from 'react';
import LayerList from "@arcgis/core/widgets/LayerList";

//import "@arcgis/map-components/dist/components/arcgis-layer-list";
//import "@arcgis/map-components/dist/components/layerlist";
//import { LayerList } from "@arcgis/map-components-react";


const LayerListComponent = ({ view }) => {
    const layerListRef = useRef(null);

    useEffect(() => {
        if (view) {
            const layerList = new LayerList({
                view: view,
                listItemCreatedFunction: (event) => {
                    const item = event.item;
                    if (item.layer.type === "feature") {
                      // Add a custom action to feature layers
                      item.actionsSections.push([
                        {
                          title: "Zoom to layer",
                          className: "esri-icon-zoom-out-fixed",
                          id: "zoom-to-layer",
                          onClick: () => {
                            view.extent = item.layer.fullExtent;
                          }
                        }
                      ]);
                    }//if
                  }//listItemCreatedFunction
            });

            layerListRef.current.appendChild(layerList.domNode);
        }
    }, [view]);

    return (
        <div ref={layerListRef}></div>
    );
};

export default LayerListComponent;