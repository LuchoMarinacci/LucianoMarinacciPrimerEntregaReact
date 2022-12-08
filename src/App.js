import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import Error404 from './components/Error404';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <h1>BULKGYMAPP</h1>
      <Header />
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
        <Route path={"*"} element={<Error404/>}/>
      </Routes>
      <Banner />
      <Footer />
      
     
       
        
      
    </BrowserRouter>
  );
}

export default App;
