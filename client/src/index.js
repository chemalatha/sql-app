import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddTask from './AddTask';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
const routing = (
  <Router>
    <div>
      <Route path="/" component={App} exact/>
      <Route path="/add" component={AddTask} />
    </div>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
