import NavigationBar from './assets/components/NavigationBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AllProjects from './assets/pages/AllProjects.jsx'
import Home from './assets/pages/Home.jsx';
import Footer from './assets/components/Footer.jsx';
import ScrollToTopButton from './assets/utils/ScrollToTopButton.jsx';
import Blogs from './assets/pages/Blogs.jsx';
import Resume from './assets/pages/Resume.jsx';

function App() {


  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-projects' element={<AllProjects />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App
