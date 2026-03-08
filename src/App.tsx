import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './routes/home/home';
import About from './routes/about/about';
import Portfolio from './routes/portfolio/portfolio';
import Contact from './routes/contact/contact';
import NotFound from './routes/404/404';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
