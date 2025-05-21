import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Services from './pages/Services';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
};

export default App
