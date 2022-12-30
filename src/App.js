import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './screens/LandingPage/index';
import LoginPage from './screens/LandingPage/Login';
import RegisterationPage from './screens/LandingPage/Register';
import OurBlog from './screens/LandingPage/OurBlog';
import Products from './screens/LandingPage/Products';
import AboutUs from './screens/LandingPage/AboutUs';
import Account from './screens/LandingPage/Account';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Index />} />
        </Route>
        <Route path='/blogs' element={<Navbar />}>
          <Route index element={<OurBlog />} />
        </Route>
        <Route path='/products' element={<Navbar />}>
          <Route index element={<Products />} />
        </Route>
        <Route path='/aboutus' element={<Navbar />}>
          <Route index element={<AboutUs />} />
        </Route>
        <Route path='/login' element={<Navbar />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path='/register' element={<Navbar />}>
          <Route index element={<RegisterationPage />} />
        </Route>
        <Route path='/account' element={<Navbar />}>
          <Route index element={<Account/>} />
        </Route>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
