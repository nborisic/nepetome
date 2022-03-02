import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Homepage from './pages/homepage';
import Gallery from './pages/gallery';
import News from './pages/news';
import Participants from './pages/participants';
import Publications from './pages/publications';
import AboutProject from './pages/aboutProject';
import { LanguageProvider } from './components/language-selector/index.context';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/about-project" element={<AboutProject />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </Layout>
    </LanguageProvider>
  );
}

export default App;
