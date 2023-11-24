import React, { useState } from 'react';



let DOTA = require('./image/pngegg (2).png');

let Fire = require('./image/pngegg (3).png');


const Csenter = () => {
  return (
    <div style={{ height: "600px"}}>
      <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <div>
            <h1></h1>
          </div>
          <div> 
            <img style={{width: "650px", position: ""}} src={DOTA} alt="" />
            {/* <img style={{width: "700px"}} src={Fire} alt="" /> */}
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Csenter;