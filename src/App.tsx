import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Discussions from './pages/Discussions';
import Resources from './pages/Resources';

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
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;