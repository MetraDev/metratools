import React from "react";
import Header from "../components/header/Header";
import Photo from "../components/blog/photo";
import Grid from "@material-ui/core/Grid";
import PresentationCard from "../components/blog/presentation/card";
import Carousel from "../components/blog/carousel/Carousel";

const BlogPage = () => {
  return (
    <Grid container>
      <Grid xs={12}>
        <Header />
      </Grid>
      <Grid xs={3}>
        <Photo carousel={<Carousel/>}/>
      </Grid>
      <Grid xs={9}>
        <PresentationCard />
        <PresentationCard />
        <PresentationCard />
      </Grid>
    </Grid>
  );
};

export default BlogPage;
