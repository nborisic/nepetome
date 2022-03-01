import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Homepage from './pages/homepage';
import Gallery from './pages/gallery';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Layout>
  );
}

export default App;
