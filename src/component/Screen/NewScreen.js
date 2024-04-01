import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@mui/material";
import rocks from "../../Assest/rocks.jpeg";
import rock3 from "../../Assest/rock3.jpeg";
import rock2 from "../../Assest/rocks2.jpeg";

const ImageWrapper = styled("div")({
  width: "100%", // Ensure images take up full width
  height: "100%", // Ensure images take up full height
});

export default function NewScreen() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 5, marginBottom: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography
            variant="h4"
            component="h4"
            gutterBottom
            sx={{ color: "black", textAlign: "center" }}
          >
            News on travelling
          </Typography>
          <Typography
            variant="body1" // Changed variant to body1 for better readability
            component="p"
            gutterBottom
            sx={{ color: "black", textAlign: "center" }}
          >
            Editorials of our staff members traveling through the world, share
            your experience and be part of our news portal.
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          md={4}
          sx={{ display: "flex", justifyContent: "center" ,padding:10 }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#FFC72C", color: "black" }}
          >
            More News
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 400, margin: "auto" }}>
            <ImageWrapper>
              <CardMedia component="img" image={rock3} alt="Rocks" />
            </ImageWrapper>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 400, margin: "auto" }}>
            <ImageWrapper>
              <CardMedia component="img" image={rocks} alt="Rocks" />
            </ImageWrapper>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 400, margin: "auto" }}>
            <ImageWrapper>
              <CardMedia component="img" image={rock2} alt="Rocks" />
            </ImageWrapper>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
