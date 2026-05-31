import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import './App.css';
import AppComponent from "./components/AppComponent";
import GenericRouter from "./components/GenericRouter";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

function RouteTracker() {
  const location = useLocation();
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }
  }, [location]);
  return null;
}

function App() {
  return (
      <HelmetProvider>
          <BrowserRouter>
              <RouteTracker />
              <div className="App">
                  <AppComponent/>
                  <Routes>
                      <Route path="/other_services" element={<GenericRouter current_path="other_services"/>} />
                      <Route path="/gallery" element={<GenericRouter current_path="gallery"/>} />
                      <Route path="/our_clientele" element={<GenericRouter current_path="our_clientele"/>} />
                      <Route path="/research_&_publications" element={<GenericRouter current_path="research_&_publications"/>} />
                      <Route path="/our_achievements" element={<GenericRouter current_path="our_achievements"/>} />
                      <Route path="/outstation_services" element={<GenericRouter current_path="outstation_services"/>} />
                      <Route path="/areas_of_practice" element={<GenericRouter current_path="areas_of_practice"/>} />
                      <Route path="/our_team" element={<GenericRouter current_path="our_team"/>} />
                      <Route path="/about_us" element={<GenericRouter current_path="about_us"/>} />
                      <Route path="/contact_us" element={<GenericRouter current_path="contact_us"/>} />
                      <Route path="/" element={<Home/>} />
                      <Route path="*" element={<NotFound/>} />
                  </Routes>
              </div>
          </BrowserRouter>
      </HelmetProvider>
  );
}

export default App;
