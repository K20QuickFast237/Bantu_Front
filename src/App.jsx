import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/projets" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </>
  );
};

export default App
