import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard'
import ProjectDetails from './Components/Projet/ProjetDetails';
import CreateProject from './Components/Projet/CreateProject';
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import NotFoundRoute from './Components/Dashboard/NotFoundRoute'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Dashboard } />
            <Route path="/project/:id" component={ ProjectDetails } />
            <Route path="/create" component={ CreateProject } />
            <Route path="/signin" component={ SignIn } />
            <Route path="/signup" component={ SignUp } />
            <Route exact path="*" component={ NotFoundRoute } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
