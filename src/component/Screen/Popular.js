import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"; // Import Typography component
import sea1 from "../../Assest/sea1.jpeg";
import sea2 from "../../Assest/sea2.jpeg";
import sea3 from "../../Assest/sea3.jpeg";
import sea4 from "../../Assest/sea4.jpeg";
import sea5 from "../../Assest/sea5.jpeg";
import sea6 from "../../Assest/sea6.jpeg";
import sea7 from "../../Assest/sea7.jpeg";
import sea8 from "../../Assest/sea8.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.dark,
}));

const ImageWrapper = styled("div")({
  width: "100%",
  height: "400px", // Adjust this height as needed
  overflow: "hidden",
});

const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export default function PopularScreen() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10, marginBottom: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            {/* Heading and paragraph */}
            <Typography variant="h2" gutterBottom>
              Popular Destinations
            </Typography>

            <Typography variant="body1" align="center">
              Places which our agency focuses more on, these are our main
              destinations.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            {/* Image */}
            <ImageWrapper>
              <Image src={sea2} alt="loading" />
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            {/* Image */}
            <ImageWrapper>
              <Image src={sea3} alt="loading" />
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            <ImageWrapper>
              <Image src={sea1} alt="loading" />
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            <ImageWrapper>
              <Image src={sea4} alt="loading" />
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            <ImageWrapper>
              <Image src={sea5} alt="loading" />
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            <ImageWrapper>
              <Image src={sea6} alt="loading" />
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            <ImageWrapper>
              <Image src={sea7} alt="loading" />
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            <ImageWrapper>
              <Image src={sea8} alt="loading" />
            </ImageWrapper>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
