import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';

const Navbar = () => {
  return (
    
    <Grid style={{'background':'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}} className="navbar navbar-inverse bg-dark">
      <div className="container-fluid">
        <div className="col">
          <h2 className="text-light">Sergio Pérez</h2>
        </div>
        <div className="col-left mr-4">
          <button className="btn  text-light mr-2 font-weight-bold">Home</button>
          <button className='btn  text-light mr-2 font-weight-bold'>CV</button>
          <button className='btn  text-light mr-2 font-weight-bold'>Blog</button>
        </div>
      </div>
    </Grid>
  );
};

export default Navbar;
