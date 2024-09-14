import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
        //Private components//
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>} />
        <Route path="/Add" element={<AddProduct/>} />
        <Route path="/Update/:id" element={<UpdateProduct/>} />
        <Route path="/Log-out" element={<h1>Product Log-out Component</h1>} />
        <Route path="/Profile" element={<h1>Profile Component</h1>} />
        </Route>

      
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/> 
        </Routes>
        
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
