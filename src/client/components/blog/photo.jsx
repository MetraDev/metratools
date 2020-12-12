import React from "react";
import Grid from "@material-ui/core/Grid";
import PresentationCard from "./presentation/card";
import Carousel from "./carousel/Carousel";
const ShowPhoto = ({carousel}) => {
  return (
      <Grid
        style={{ "margin-top": "12px" }}
        className="container zindex-fixed"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1325247524815429633/dh3G5c-u_400x400.jpg"
          class="img-thumbnail"
          alt="Responsive image"
        />
        {carousel && carousel}
      </Grid>
  );
};

export default ShowPhoto;
