import * as React from 'react'; 
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
 
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'toastr/build/toastr.min.css'; 
import Menu from './components/superiorMenu.component';
import Home from './components/home.component';

import ClienteIndex from './pages/cliente/index';

const App: React.FC = () => {
  return (
      <Router>
          <div className="container">
              <Menu />
              <br/>
         
              <Switch>
                  <Route exact path='/cliente' component={ClienteIndex} />
                  <Route path='/' component={ Home } />
              </Switch>
          </div>
      </Router>
  );
}

export default App;
