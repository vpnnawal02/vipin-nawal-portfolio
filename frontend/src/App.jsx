import NavigationBar from './assets/components/NavigationBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AllProjects from './assets/pages/AllProjects.jsx'
import Home from './assets/pages/Home.jsx';
import Footer from './assets/components/Footer.jsx';
import ScrollToTopButton from './assets/utils/ScrollToTopButton.jsx';

function App() {


  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-projects' element={<AllProjects />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App