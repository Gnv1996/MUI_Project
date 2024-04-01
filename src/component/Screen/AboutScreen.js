import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import about1 from "../../Assest/about1.jpeg";
import sea8 from "../../Assest/sea8.jpeg";

const ImageWrapper = styled("div")({
  width: "100%",
  height: 400,
  overflow: "hidden",
});

const Image = styled("img")({
  width: "100%",
  height: 400,
  objectFit: "cover",
});

export default function AboutScreen() {
  return (
    <Box sx={{ flexGrow: 1, margin: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {/* Heading and paragraph */}
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
            Navagio, Greece
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
            Chosen as the beach of the year.
          </Typography>
          <Typography variant="body1" align="center" padding={5}>
            Enclosed by cliffs and facing out over azure waters, Navagio Beach
            in Greece is so picturesque it even comes with its own shipwreck.
          </Typography>
          <Typography variant="body1" align="center" padding={5}>
            The strip of beach is accessed only by boat. Regular tours to the
            beach depart from Porto Vromi to the south, and from Agios Nikolaos
            and Cape Skinari to the north-east. Boats also arrive from the
            harbour of Zakynthos city.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Image */}
          <ImageWrapper>
            <Image src={about1} alt="loading" />
          </ImageWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Image */}
          <ImageWrapper>
            <Image src={sea8} alt="loading" />
          </ImageWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Heading and paragraph */}
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
            Magnificent Paris
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
            Our all-time favorite city.
          </Typography>
          <Typography variant="body1" align="center" padding={5}>
            Paris can be seen as the most interesting city of Europe and
            probably even as one of the most amazing city’s worldwide. People
            from all over the world travel to Paris to discover and experience
            this fairy-like city.
          </Typography>
          <Typography variant="body1" align="center" padding={5}>
            Paris is the city of love, inspiration, art, and fashion. The night
            scene, the Eiffel tower and the warm atmosphere will make you feel
            directly at home. Paris has a lot of interesting architecture and
            museums to offer, and is also a Walhalla for shopaholics.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
