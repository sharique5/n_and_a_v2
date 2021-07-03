import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import AppComponent from "./components/AppComponent";
import GenericRouter from "./components/GenericRouter";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Switch>
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
                      <AppComponent/>
                  </Route>
                  <Route path="/*">
                      <GenericRouter current_path="not_found"/>
                  </Route>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
