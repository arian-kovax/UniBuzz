import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Discussions from "./pages/Discussions";
import Resources from "./pages/Resources";
import AcademicCalendar from "./pages/AcademicCalendar.tsx";
import LibraryDatabase from "./pages/LibraryDatabase";
import CareerPortal from "./pages/CareerPortal";
import MentalHealthResources from "./pages/MentalHealthResources";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/discussions" element={<Discussions />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/calendar" element={<AcademicCalendar />} />
            <Route path="/resources/library" element={<LibraryDatabase />} />
            <Route path="/resources/careers" element={<CareerPortal />} />
            <Route path="/resources/wellness" element={<MentalHealthResources />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
