import { Link } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddProductForm from '../product/AddProduct'; 
import EditProduct from '../product/EditProduct';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Register from '../authentcation/Register'; 
import { useAuthContext } from '../context/AuthContext';
import FaceIcon from '@mui/icons-material/Face';

import { Avatar } from 'antd';


const Header = () => {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [showEditProductForm, setShowEditProductForm] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleAddProductForm = () => {
    setShowAddProductForm(!showAddProductForm);
  };

  const {user, logOut } = useAuthContext()
  console.log(user);

  function handleLogOut() {
    console.log("Logging out...");
    logOut();
}
  
  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div>
      <section id='comand'>
        <div className="row">
        
          <div className="container">
            <div className='comand'>
             
            <div  style={{ marginRight: "60px", display: "flex" }}>
                <Button className='btnopen' variant="contained" onClick={toggleAddProductForm}>
                  {showAddProductForm ? 'Закрыть' : 'Добавить'}
                </Button>
                
              
                
              </div>
              

              <Link to="/"><RestartAltIcon style={{fontSize: "30px", display: ""}}/></Link>
              <h1 style={{position: "absolute", fontSize: "50px", textDecoration: "undeline", color: "white"}}>GAME <span style={{color: "red"}}> MARKET </span></h1>
              <div className='Avatar'>
              {
  user ? (
    <div style={{
      background: "black",
      marginLeft: "800px",
       width: "90px",
        height: "90px",
         borderRadius: "60px",
          display: "flex",
           alignItems: "center",
           justifyContent: "center"

        }} 
         onClick={toggleRegister}>
          
          <Avatar src={user.photoURL} alt={user.displayName} style={{
             position: "absolute",
            width: "80px",
             height: "80px",
              borderRadius: "60px"
                }} />
                 </div>
                     ) : (
                      
                      <div style={{
                        marginLeft: "800px",
                         width: "90px",
                          height: "90px",
                           borderRadius: "60px",
                            display: "flex",
                             alignItems: "center",
                             justifyContent: "center"
                             }} 
                                 onClick={toggleRegister}>
                                    <FaceIcon style={{ fontSize: "80px"}}/>
                                        </div> )}
                                         </div>
            <button style={{
                border: "none",
                color: "#fff",
                display: "flex",
                paddingLeft: "50px",
                alignItems: "center",
                justifyContent: "center",
               }} onClick={handleLogOut}>Выйти</button>
          
          </div>
        </div>
        </div>
      </section>

      {showAddProductForm && <AddProductForm />}
      {showEditProductForm && <EditProduct />}
      {showRegister && <Register />}

    </div>
  );
};

export default Header;
