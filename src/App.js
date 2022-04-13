import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './NotFound';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ServicesDetails from './Pages/ServiceDetail/ServicesDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServicesDetails></ServicesDetails>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
