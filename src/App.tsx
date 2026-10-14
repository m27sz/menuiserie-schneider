import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { Actualites } from './pages/Actualites';
import { Contact } from './pages/Contact';
import { Entreprise } from './pages/Entreprise';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Realisations } from './pages/Realisations';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/entreprise" element={<Entreprise />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
