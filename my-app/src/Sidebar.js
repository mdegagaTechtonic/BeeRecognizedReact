import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div id="sidebar" className="bg-white h-25 d-inline-block col-12 col-md-6 col-lg-4 rounded border border-dark mb-2 p-4">
      <nav className="flex-item row-flex navbar-fixed-right">
        <div className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h3 className="mb-1">Recognition Received</h3>
          </div>
        </div>
        <div className="list-group-item list-group-item-action flex-column align-items-start recognition"></div>
      </nav>
    </div>
  );
};

export default Sidebar;
