
import Search from 'antd/es/input/Search';
import './App.css';
import ProductContext from './components/context/ProductContext';
import Csenter from './components/navbar/Csenter';
import FormCenter from './components/navbar/FormCenter';
import Header from "./components/navbar/Header"
// import AddProductForm from './components/product/AddProduct';
// import EditProduct from './components/product/EditProduct';
import ListProduct from './components/product/ListProduct';



function App() {
  return (
    <div className="App">
      <ProductContext>
        <Header/>
        <Csenter/>
       <FormCenter/>
     <ListProduct/>
    
    

     
   
   


        
      
        

       
      </ProductContext>
    
     
    </div>
  );
}

export default App;
