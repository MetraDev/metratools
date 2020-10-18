
import React from 'react'; 
import Particles from 'react-particles-js'; 

const ParticlesCustom = () => {
    return <div className=""> 
    <Particles 
      params={{ 
        particles: { 
          number: { 
            value: 200, 
            density: { 
              enable: true, 
              value_area: 1000, 
            } 
          }, 
        }, 
      }} 
    /> 
 
  </div> 
  };

  export default ParticlesCustom; 