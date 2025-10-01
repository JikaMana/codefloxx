import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";

import Home from "./pages/home";
import Contact from "./pages/contact";

// import Portfolio from './pages/project-case';
// import Services from './pages/services';
// import AboutUs from './pages/about-us';
// import Maintenance from './pages/maintenance';
// import WebApplications from './pages/web-applications-development';
// import MobileApplication from './pages/mobile-application-development';
// import UiDesign from './pages/ui-design';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route
            path="/portfolio"
            element={<Portfolio />}
          /> 
          <Route
            path="/services"
            element={<Services />}
          />
          <Route
            path="/about-us"
            element={<AboutUs />}
          />
         
          <Route
            path="/maintenance"
            element={<Maintenance />}
          />
          <Route
            path="/web-applications-development"
            element={<WebApplications />}
          />
          <Route
            path="/mobile-application-development"
            element={<MobileApplication />}
          />
          <Route
            path="/ui-design"
            element={<UiDesign />}
          />{' '}
          */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
