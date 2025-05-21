import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Services from './pages/Services';
import Projects from './pages/Projects';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/projets" element={<Projects />}/>
        </Routes>
      </Router>
    </>
  );
};

export default App
