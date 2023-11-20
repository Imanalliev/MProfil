
import './App.css';
import ProductContext from './components/context/ProductContext';
import Csenter from './components/navbar/Csenter';
import FormCenter from './components/navbar/FormCenter';
import Header from "./components/navbar/Header"
import AddProductForm from './components/product/AddProduct';
import ListProduct from './components/product/ListProduct';
// import ProductCard from './components/product/ProductCard';


function App() {
  return (
    <div className="App">
      <ProductContext>
        <Header/>
        <Csenter/>
       <FormCenter/>
       {/* <FormCenter/> */}
        <AddProductForm/>
     <ListProduct/>
    
    

     
   
   


        
      
        

       
      </ProductContext>
    
     
    </div>
  );
}

export default App;
