import React from 'react';
import { Link } from 'react-router-dom';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AdminPanel from '../admin/AdminPanel';

const Header = () => {
    return (
        <div>
            <section id='comand'>
                <div className="row">
                    <div className="container">
                        <div className='comand'>
                         
                            <AddTaskIcon  to fontSize="large" />
                           
                            <Link  style={{color: "black", fontSize: "15px"}}  to="/">Home</Link>
                             <Link style={{color: "black", fontSize: "15px"}} to="/src/components/product/AddProduct.jsx">Добавить</Link>
                          
                          
                            <div>
                         


                            <button style={{width: "100px", height: "30px", background: "aqua", borderRadius: "5px"}}>Регистрация</button>
                            
                            <button style={{width: "100px", height: "30px", borderRadius: "5px"}}>Войти</button>
                            </div>
                           

                           
                           
                            {/* Другие ссылки по аналогии */}
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
        
    );
};

export default Header;