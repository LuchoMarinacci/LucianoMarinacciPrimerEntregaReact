import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <h1>BULKGYMAPP</h1>
      <Header />
      <ItemListContainer greeting={"Bienvenidos a BulkGymApp"}/>
      <Banner />
      <Footer />
      
     
       
        
      
    </div>
  );
}

export default App;
