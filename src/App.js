import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import AppComponent from "./components/AppComponent";
import GenericRouter from "./components/GenericRouter";
import NotFound from "./components/NotFound";
import Home from "./components/Home";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <AppComponent/>
              <Switch>
                  <Route path="/other_services">
                      <GenericRouter current_path="other_services"/>
                  </Route>
                  <Route path="/gallery">
                      <GenericRouter current_path="gallery"/>
                  </Route>
                  <Route path="/our_clientele">
                      <GenericRouter current_path="our_clientele"/>
                  </Route>
                  <Route path="/research_&_publications">
                      <GenericRouter current_path="research_&_publications"/>
                  </Route>
                  <Route path="/our_achievements">
                      <GenericRouter current_path="our_achievements"/>
                  </Route>
                  <Route path="/outstation_services">
                      <GenericRouter current_path="outstation_services"/>
                  </Route>
                  <Route path="/areas_of_practice">
                      <GenericRouter current_path="areas_of_practice"/>
                  </Route>
                  <Route path="/our_team">
                      <GenericRouter current_path="our_team"/>
                  </Route>
                  <Route path="/about_us">
                      <GenericRouter current_path="about_us"/>
                  </Route>
                  <Route path="/contact_us">
                      <GenericRouter current_path="contact_us"/>
                  </Route>
                  <Route exact path="/">
                      <Home/>
                  </Route>
                  <Route path="/*">
                      <NotFound/>
                  </Route>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
