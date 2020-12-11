import React from "react";
import Grid from "@material-ui/core/Grid";
import PresentationCard from './presentation/PresentationCard'
const Home = () => {
  return (
    <Grid container spacing={1}>
      <Grid
        align="right"
        xs={2}
        style={{ "margin-top": "12px"}}
        className="container zindex-fixed"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1325247524815429633/dh3G5c-u_400x400.jpg"
          class="img-thumbnail"
          alt="Responsive image"
        />
      </Grid>
      <Grid xs={10} style={{ "margin-top": "13px" }}>
        <PresentationCard />
      </Grid>
    </Grid>
  );
};

export default Home;
