import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Join_us from './pages/Join_us';
import BlogDetail from './components/BlogDetail';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/projets" element={<Projects />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/join_us" element={<Join_us/>}/>
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App
