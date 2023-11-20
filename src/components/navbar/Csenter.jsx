import React from 'react';

let gta = require('./image/img1.akspic.ru-grand_theft_auto_v-trevor_filips-playstation_4-xbox_one-planshet-1080x1920.jpg')

const Csenter = () => {
    return (
        <div>
            <section id='twos'>
                <br />
                <div className="container">
                    <h1 style={{color: "white"}}>FREE <span style={{color: "blue"}}> MARKET GAME</span></h1>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>

                    
                    <div>
                        <br />
                        <h1 style={{color: "green"}}>Grand <span style={{color: "red"}}> Theft Auto V </span></h1>
                        <br />
                        <p style={{fontSize: "20px", color: "white", width: "500px"}}>— компьютерная игра в жанре action-adventure
                         с открытым миром, разработанная <br />
                             компанией Rockstar North и изданная компанией Rockstar Games. Изначально игра<br />
                              была выпущена для игровых консолей PlayStation 3 и Xbox 360 в 2013 году, в 2014 <br />
                               году переиздана для PlayStation 4 и Xbox One, в 2015 году для Windows и в 2022 <br />
                                году для PlayStation 5 и Xbox Series X/S. Является пятнадцатой по счёту игрой <br />
                                серии Grand Theft Auto и следующей крупной игрой после Grand Theft Auto IV,<br />
                                 выпущенной в 2008 году[9]. В России и СНГ издателем Grand Theft Auto V выступает <br />
                                  компания 1С-СофтКлаб.</p>
                    </div>
                    <br />
                    <div style={{ marginBottom: "-70px"}}>
                        <img src={gta} style={{width: "350px", height: "450px", borderRadius: "5px"}} />
                    </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Csenter;