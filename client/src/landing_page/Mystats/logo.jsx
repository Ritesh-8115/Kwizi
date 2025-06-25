import React from 'react';
import Timeline from "../../assets/categories/image--timeline.svg";
function logo() {
    return ( 
        <div
          class="card"
          style={{
            width: "63%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "10px",
            borderRadius: "8px",
            marginLeft:"20%",
            height:"50%",
            marginBottom:"1%",
            marginTop:"1%"
          
          }}
        >
          <img
            src={Timeline}
            class="card-img-top"
            alt="image unavailable"
            style={{ width: "20%", marginLeft: "40%" }}
          />
          
        </div>
     );
}

export default logo;