import React, { useState, useEffect, useRef } from 'react';
import {ZoomIn, ZoomOut, Move } from 'lucide-react';
import "./mapview.css";
import NioGemsMapView from './mapview';
import LayerListComponent from './layerListComponent';
import LayerList from "@arcgis/core/widgets/LayerList";

const MapLayout = () => {

  const [isDragging, setIsDragging] = useState(false);
  // const [view,setView]=useState();
  const layerWidgetRef = useRef(null);
  const resizeHandleRef = useRef(null);
  const layerListRef = useRef(null);
  
  const updateLayerList=(lView=>{
       console.log("view is ready",lView);
       //setView(lView);
       const layerList = new LayerList({
        view: lView,
        listItemCreatedFunction: (event) => {
          const item = event.item;
          //console.log("listItemCreatedFunction is called",item);
         }
       });
       
      lView.ui.add(layerList); //the reason to call this function to make domNode is available, otherwise it would not work
      console.log("LayerList is created!",layerList);
      layerListRef.current.append(layerList.domNode);
    
  });


  useEffect(() => {
    const layerWidget = layerWidgetRef.current;
    const resizeHandle = resizeHandleRef.current;

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const containerHeight = layerWidget.parentElement.clientHeight;
      const newHeight = e.clientY - layerWidget.offsetTop;
      const heightPercentage = (newHeight / containerHeight) * 100;
      layerWidget.style.height = `${Math.min(Math.max(heightPercentage, 20), 80)}%`;
    };

    resizeHandle.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      resizeHandle.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="d-flex flex-column vh-100">
      {/* Menu Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  File
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#new">New</a></li>
                  <li><a className="dropdown-item" href="#open">Open</a></li>
                  <li><a className="dropdown-item" href="#close">Close</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tools">Tools</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#help">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Top Bar */}
      <div className="bg-light py-2">
        <div className="container-fluid">
          <div className="btn-group" role="group" aria-label="Map controls">
            <button type="button" className="btn btn-outline-secondary btn-sm">
              <ZoomIn size={16} /> Zoom In
            </button>
            <button type="button" className="btn btn-outline-secondary btn-sm">
              <ZoomOut size={16} /> Zoom Out
            </button>
            <button type="button" className="btn btn-outline-secondary btn-sm">
              <Move size={16} /> Pan
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid flex-grow-1">
        <div className="row h-100">
          {/* Left Panel */}
          <div className="col-md-3 d-flex flex-column h-100">
            {/* Layers */}
            <div className="card mb-3 flex-grow-1" ref={layerWidgetRef} style={{height: '50%', minHeight: '20%', maxHeight: '80%'}}>
              <div className="card-header">Layers</div>
              <div className="card-body overflow-auto">
                  {/* <LayerListComponent  view={view}></LayerListComponent> */}
                  <div ref={layerListRef}></div>
              </div>
            </div>
            
            {/* Resize Handle */}
            <div  className='resizeHandle'
              ref={resizeHandleRef}
              style={{
                height: '10px',
                cursor: 'ns-resize',
                backgroundColor: '#f0f0f0',
                borderTop: '1px solid #ccc',
                borderBottom: '1px solid #ccc'
              }}
            ></div>

            {/* Feature Attributes */}
            <div className="card flex-grow-1">
              <div className="card-header">Feature Attributes</div>
              <div className="card-body overflow-auto">
                <p>Display selected feature attributes here</p>
              </div>
            </div>
          </div>

          {/* Right Panel (Map) */}
          <div className="col-md-9">
            <div className="card h-100">
              <div className="card-body d-flex justify-content-center align-items-center">
                <div className="mapDiv">
                   <NioGemsMapView updateLayerList={updateLayerList}></NioGemsMapView>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLayout;