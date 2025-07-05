import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContextProvider, useTheme } from './contexts/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Guests from './components/Guests';
import Faculty from './components/Faculty';
import Team from './components/Team';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import EventDetail from './components/EventDetail';

const HomePage = () => (
  <>
    <Navigation />
    <Hero />
    <About />
    <Events />
    <Schedule />
    <Sponsors />
    <Faculty />
    <Guests />
    <Team />
    <Gallery />
    <Footer />
  </>
);

// Inner component that uses the theme context
const AppContent = () => {
  const { theme } = useTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/events/:id" 
            element={
              <>
                <Navigation />
                <EventDetail />
              </>
            } 
          />
          {/* Redirect /industrial-techathon to /events/industrial-techathon */}
          <Route 
            path="/industrial-techathon" 
            element={<Navigate to="/events/industrial-techathon" replace />} 
          />
          {/* Redirect /technical-seminar to /events/technical-seminar */}
          <Route 
            path="/technical-seminar" 
            element={<Navigate to="/events/technical-seminar" replace />} 
          />
          {/* Redirect /job-placement to /events/job-placement */}
          <Route 
            path="/job-placement" 
            element={<Navigate to="/events/job-placement" replace />} 
          />
          {/* Catch all unknown routes and redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App; 