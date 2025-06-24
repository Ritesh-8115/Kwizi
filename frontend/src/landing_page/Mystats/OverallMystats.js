import React from 'react';
import Logo from './logo'
import Overview from './overview'
import GraphPage from './graphPage';
import CategoryStats from './categoryStats';
function OverallMystats() {
    return ( 
      <>
           
           <Logo/> 
           <Overview/>
           <GraphPage/>
           <CategoryStats/>

      </>
        
     );
}

export default OverallMystats;