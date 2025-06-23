import React from 'react';
import logo from './categories/logo--quizzer.svg'
function Navbar() {
    return ( 
<nav class="navbar navbar-expand-lg  border-bottom "  style={{backgroundColor: "#e3f2fd"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:"#60a8eb" , textAlign:"center"}}  >
      <img src={logo} alt='logo' style={{width:"9%"}}/> <b>Kwizi</b>
    </a>


    <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style={{marginLeft:"8%"}}>
      <div class="navbar-nav">
        <div style={{border:"solid #60a8eb 2px",borderRadius:"10%", height:"7vh"}} ><a class="nav-link active " aria-current="page" href="#" style={{color:"#60a8eb" , textAlign:"center"}}><i  class="fa-solid fa-house "></i> Home</a></div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a class="nav-link ml-50" href="#" style={{color:"#60a8eb" }}><i class="fa-solid fa-chart-simple"></i> MY STATS</a>
        
        
      </div>
    </div>
    <a class="nav-link" href="/login" style={{color:"#60a8eb",marginRight:"20%" }}> <button className='btn btn-primary' style={{backgroundColor:"#60a8eb",border:"solid #60a8eb 1px" ,borderRadius:"5px", color:"white" , marginRight:"0%"}}><i class="fa-solid fa-right-to-bracket"></i> Login </button></a>
   
  </div>
</nav>
     );
}

export default Navbar;