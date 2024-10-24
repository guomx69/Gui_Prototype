import React, { useState } from 'react';
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action-group";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-button";

import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteActionGroup,
  CalciteAction,
  CalcitePanel,
  CalciteButton,
  CalciteShellCenterRow
} from "@esri/calcite-components-react";

import TestMapComp from './TestMapComp';

const TestCalcite = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <CalciteShell>
      <CalciteShellPanel slot="panel-start" position="start" collapsed={!sidebarExpanded}>
        <CalciteActionBar slot="action-bar">
          <CalciteActionGroup>
            <CalciteAction
              icon="home"
              text="Home"
              active={activeTab === 'home'}
              onClick={() => setActiveTab('home')}
            />
            <CalciteAction
              icon="table"
              text="Data"
              active={activeTab === 'data'}
              onClick={() => setActiveTab('data')}
            />
            <CalciteAction
              icon="user"
              text="Profile"
              active={activeTab === 'profile'}
              onClick={() => setActiveTab('profile')}
            />
            <CalciteAction
              icon="map"
              text="Map"
              active={activeTab === 'map'}
              onClick={() => setActiveTab('map')}
            />
          </CalciteActionGroup>
        </CalciteActionBar>
      </CalciteShellPanel>

      <CalciteShellPanel slot="panel-end" position="end" collapsed={!sidebarExpanded}>
        <CalcitePanel heading="Details">
          <p>Additional information can be displayed here.</p>
        </CalcitePanel>
      </CalciteShellPanel>

      <CalcitePanel slot="header">
        <h2 slot="heading">Test Calcite Layout</h2>
        <CalciteButton
          slot="actions-end"
          iconStart={sidebarExpanded ? "chevronContract" : "chevronExpand"}
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
        >
          {sidebarExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
        </CalciteButton>
      </CalcitePanel>

      <CalcitePanel slot="footer">
        <span slot="content">© 2023 Your Company Name</span>
      </CalcitePanel>

      <CalciteShellCenterRow height-scale="l">
        <CalcitePanel heading={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Content`}>
          {activeTab === 'home' && <p>Welcome to the home page!</p>}
          {activeTab === 'data' && <p>Here you can view and manage your data.</p>}
          {activeTab === 'profile' && <p>This is your user profile page.</p>}
          {activeTab === 'map' && <TestMapComp />}
        </CalcitePanel>
      </CalciteShellCenterRow>
    </CalciteShell>
  );
};

export default TestCalcite;
