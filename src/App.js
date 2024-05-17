import logo from './logo.svg';
import './App.css';

//Bootstrap imported
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './Components/Landingpage/Landingpage';
import Management from './Components/Managements/Management';
import Brands from './Components/Brands/Brands';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import FindPricing from './Components/FindPricing/FindPricing';
import Partners from './Components/Partners/Partners';
import Success from './Components/Success/Success';
import Engage from './Components/Engage/Engage'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={[<Landingpage/>,<Management/>,<Brands/>,<Success/>,<Engage/>,<Partners/>,<FindPricing/>,<ContactUs/>,<Footer/>]}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
