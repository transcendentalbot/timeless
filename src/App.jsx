import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import Unit2APage from './pages/Unit2APage';
import Unit1Page from './pages/Unit1Page';
import Unit2BPage from './pages/Unit2BPage';
import LocationPage from './pages/LocationPage';
import AboutPage from './pages/AboutPage';
import CorporatePage from './pages/CorporatePage';
import ContactPage from './pages/ContactPage';
import TenantPortalPage from './pages/TenantPortalPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="properties" element={<PropertiesPage />} />
          <Route path="properties/unit-2a" element={<Unit2APage />} />
          <Route path="properties/unit-1" element={<Unit1Page />} />
          <Route path="properties/unit-2b" element={<Unit2BPage />} />
          <Route path="location" element={<LocationPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="corporate" element={<CorporatePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="portal" element={<TenantPortalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
