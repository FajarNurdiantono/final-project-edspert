import './App.css';
import Halaman1 from './pages/Halaman1';
import Halaman2 from './pages/Halaman2';
import Halaman3 from './pages/Halaman3';
import Halaman4 from './pages/Halaman4';
import Halaman5 from './pages/Halaman5';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Halaman1 />} />
          <Route path="/Halaman2" element={<Halaman2 />} />
          <Route path="/Halaman3" element={<Halaman3 />} />
          <Route path="/Halaman4" element={<Halaman4 />} />
          <Route path="/Halaman5" element={<Halaman5 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
