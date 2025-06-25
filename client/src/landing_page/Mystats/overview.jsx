import React from 'react';

function overview() {
    return ( 
        <div className='row' style={{marginLeft:"20%"}}>
            <h5><b>Overview</b></h5>
            <p style={{opacity:"0.5"}}>A summary of your recent activity and performance</p>

            <div className='col-3'style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "10px",
            borderRadius: "8px",
            height:"100px",
            
          }}><b >TheCodeDealer</b><br/>
            <div  style={{opacity:"0.5"}}> Recent Attempt 
             <p>last update date from api</p></div>
          </div>

          <div className='col-3'style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "10px",
            borderRadius: "8px",
            height:"100px",
            marginLeft:"1.5%",
            marginRight:"1.5%"
          }}><b >Total Attempts</b><br/>
            <div  style={{opacity:"0.5"}}> Image
             <p>number from api</p></div>
          </div>

            <div className='col-3'style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "10px",
            borderRadius: "8px",
            height:"100px",
            
          }}><b >Total Completed</b><br/>
            <div  style={{opacity:"0.5"}}> Image 
             <p>number from api</p></div>
          </div>
        </div>
     );
}

export default overview;