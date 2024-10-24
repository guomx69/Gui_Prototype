import React, { useState } from 'react';

const TestCalcite = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <calcite-shell>
      <calcite-shell-panel slot="panel-start" position="start" collapsed={!sidebarExpanded}>
        <calcite-action-bar slot="action-bar">
          <calcite-action-group>
            <calcite-action
              icon="home"
              text="Home"
              active={activeTab === 'home'}
              onClick={() => setActiveTab('home')}
            ></calcite-action>
            <calcite-action
              icon="table"
              text="Data"
              active={activeTab === 'data'}
              onClick={() => setActiveTab('data')}
            ></calcite-action>
            <calcite-action
              icon="user"
              text="Profile"
              active={activeTab === 'profile'}
              onClick={() => setActiveTab('profile')}
            ></calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
      </calcite-shell-panel>

      <calcite-shell-panel slot="panel-end" position="end" collapsed={!sidebarExpanded}>
        <calcite-panel heading="Details">
          <p>Additional information can be displayed here.</p>
        </calcite-panel>
      </calcite-shell-panel>

      <calcite-header slot="header">
        <h2 slot="heading">Test Calcite Layout</h2>
        <calcite-button
          slot="actions-end"
          icon-start={sidebarExpanded ? "chevron-contract" : "chevron-expand"}
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
        >
          {sidebarExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
        </calcite-button>
      </calcite-header>

      <calcite-footer slot="footer">
        <span slot="content">© 2023 Your Company Name</span>
      </calcite-footer>

      <calcite-shell-center-row height-scale="l">
        <calcite-panel heading={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Content`}>
          {activeTab === 'home' && <p>Welcome to the home page!</p>}
          {activeTab === 'data' && <p>Here you can view and manage your data.</p>}
          {activeTab === 'profile' && <p>This is your user profile page.</p>}
        </calcite-panel>
      </calcite-shell-center-row>
    </calcite-shell>
  );
};

export default TestCalcite;
