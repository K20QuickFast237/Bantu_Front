import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';


const Acceuil = lazy(() => import('./pages/Acceuil'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const Join_us = lazy(() => import('./pages/Join_us'));
const BlogDetail = lazy(() => import('../src/components/BlogDetail'));


function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/projets" element={<Projects />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/join_us" element={<Join_us/>}/>
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/Acceuil" element={<Acceuil />}/>
        <Route path="/" element={<Acceuil />}/>
      </Routes>
    </Suspense>
  );
}

export default App;