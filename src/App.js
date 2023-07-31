
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line to include Bootstrap CSS

import Navbar from './Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Objectives from './pages/Objectives';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BankDetails from './pages/BankDetails';

const containerStyle = {
  background: "linear-gradient(135deg, #28a745, #ffc107)",
  padding: "15px",
  color: "#fff",
};
function App() {
  return (
    <>
      <BrowserRouter>

        <div className="App" style={containerStyle}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Objectives' element={<Objectives />} />
            <Route path='/about' element={<About />} />
            <Route path='/footer' element={<Footer />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/bankDetails' element={<BankDetails />} />
            <Route path='/donate' element={<BankDetails />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
