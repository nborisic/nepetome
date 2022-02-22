// import Logo from './logo.svg';
// import './App.scss';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/layout';
import Homepage from './pages/homepage';

function App() {
  const token = process.env.REACT_APP_STRAPI_ACC_TOKEN;
  useEffect(async () => {
    const { data } = await axios.get('http://localhost:1337/api/homepage', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Layout>
  );
}

export default App;
