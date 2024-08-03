import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          
        //Private components//
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<h1>Product Listing Component</h1>} />
        <Route path="/Add" element={<h1>Add Product Component</h1>} />
        <Route path="/Update" element={<h1>Update Product Component</h1>} />
        <Route path="/Log-out" element={<h1>Product Log-out Component</h1>} />
        <Route path="/Profile" element={<h1>Profile Component</h1>} />
        </Route>

      
        <Route path='/SignUp' element={<SignUp/>}/>

        </Routes>
        
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
