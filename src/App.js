import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
// import Blog from './pages/Blog';
import Books from './pages/Books';


function App() {

  return (
    <div>

      {/* NavBar */}
      
      <Navbar />


      {/* Display Pages */}

      
        <Routes>
          <Route path="/" element={<HomeScreen />} /> 
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/books" element={<Books />} /> 
          <Route path="/contact" element={<Contact />} /> 
          {/* <Route path="/blog" element={<Blog />} />  */}
        </Routes>
    

    </div>
  );
};


export default App;
 