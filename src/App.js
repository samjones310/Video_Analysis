import React from 'react';
import './App.css';
import Mainpage from './pages/Mainpage';
import DashboardView from './pages/DashboardView';
import DetailedView from './pages/DetailedView';
import GraphView_2 from './pages/GraphView_2';
import GraphView_1 from './pages/GraphView_1';
import GraphView from './pages/GraphView';
import AppearanceView from './pages/AppearanceView';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { createBrowserHistory as history } from 'history';

function App() {
  return (
    <div >
      <Router history={history}>
        <Route exact path="/" component={Mainpage} />
        <Route exact path={'/dashboard/'} component={DashboardView} />
        <Route exact path={"/detailedview/:cid"} component={DetailedView} />
        <Route exact path={"/graphview/"} component={GraphView} />
        <Route exact path={"/graphview_1/"} component={GraphView_1} />
        <Route exact path={"/graphview_2/"} component={GraphView_2} />
        <Route exact path={"/appearance/:cid"} component={AppearanceView} />
      </Router>
    </div>
  );
}

export default App;