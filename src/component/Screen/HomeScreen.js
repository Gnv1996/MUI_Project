import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import bg from "../../Assest/balloons.jpeg";
import Features from "./Features";
import AboutScreen from "./AboutScreen";
import ContactForm from "./ContactForm";
import NewScreen from "./NewScreen";
import PopularScreen from "./Popular";


const styles = {
  container: {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    height: "100vh",
  },
  textContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#ffffff",
  },
  button: {
    marginTop: "20px",
    background: "transparent",
    border: "1px solid #fff",
    color: "#fff",
    padding: "10px 30px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
  },
};

export default function HomeScreen() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xxl" sx={styles.container}>
        <Box sx={styles.textContainer}>
          <Typography variant="h6" component="h6" gutterBottom>
            Exploring Greece
          </Typography>
          <Typography variant="h1" component="h1" gutterBottom>
            Santorini,
          </Typography>
          <Typography variant="h2">Cyclades Isalands</Typography>
          <Button variant="contained" sx={styles.button}>
            Views Tours
          </Button>
        </Box>
      </Container>
      <Features />
        <AboutScreen />
        <PopularScreen />
        <ContactForm />
        <NewScreen />
    </React.Fragment>
  );
}
