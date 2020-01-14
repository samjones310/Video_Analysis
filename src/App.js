import React from 'react';
import './App.css';
import Mainpage from './pages/Mainpage';
import DashboardView from './pages/DashboardView';
import DetailedView from './pages/DetailedView';
import GraphView from './pages/GraphView';
import AppearanceView from './pages/AppearanceView';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { createBrowserHistory as history } from 'history';

function App() {
  return (
    <div >
      <Router history={history}>
        <Route exact path="/" component={Mainpage} />
        <Route exact path={'/dashboard/:id'} component={DashboardView} />
        <Route exact path={"/detailedview/:id/:cid"} component={DetailedView} />
        <Route exact path={"/graphview/:id"} component={GraphView} />
        <Route exact path={"/appearance/:id/:cid"} component={AppearanceView} />
      </Router>
    </div>
  );
}

export default App;