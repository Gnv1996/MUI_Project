import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import bg from "../../Assest/bgwall.jpeg";
import Grid from "@mui/material/Grid";
import { Input, Modal } from "@mui/material";
import Date from "./Date";

const styles = {
  container: {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    minHeight: "100vh",
    maxWidth: "100",
    overflow: "hidden",
  },
  button: {
    marginTop: 5,
    background: "transparent",
    border: "1px solid #fff",
    color: "black",
    fontWeight: "bold",
    padding: "10px 30px",
    backgroundColor: "#FFC72C",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
  },
  formContainer: {
    zIndex: 9999,
    backgroundColor: "#FFC72C",
    padding: 5,
    marginTop: 10,
    borderRadius: 10,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    width: "50%",
    maxHeight: "80vh",
    overflowY: "auto",
    margin: "0 auto",
  },
  textContainer: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#ffffff",
  },
};

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [selectedArrivalDate, setSelectedArrivalDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [event, setEvent] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDateChange = (date) => {
    setSelectedArrivalDate(date);
  };
  const handleEndChange = (date) => {
    setSelectedEndDate(date);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event, selectedArrivalDate, selectedEndDate);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.textContainer}>
          <Typography variant="h2" component="h2" gutterBottom>
            Discover the canals of Amsterdam!
          </Typography>
          <Typography variant="p" component="p" gutterBottom>
            From April to October is the best time to visit Europe.
          </Typography>
          <Typography variant="p" component="p" gutterBottom>
            See our hotel deals below for that time!
          </Typography>
          <Button variant="contained" onClick={handleOpen} sx={styles.button}>
            {open ? "Close Contact Form" : "Open Contact Form"}
          </Button>
        </Box>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...styles.formContainer,
          }}
        >
          <Typography
            variant="h6"
            component="h4"
            gutterBottom
            sx={{ color: "blue", padding: 2 }}
          >
            Find the best deals in Europe...
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Input
                fullWidth
                type="text"
                value={event}
                onChange={(txt) => setEvent(txt.target.value)}
                placeholder="eg. City, region, district or specific Hotel"
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "7px",
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Date
                label={"Arrival Date"}
                value={selectedArrivalDate}
                onDateChange={handleDateChange}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Date
                label={"Leaving Date"}
                value={selectedEndDate}
                onDateChange={handleEndChange}
              />
            </Grid>
            <Grid item xs={9} sm={9}>
              <Button
                variant="contained"
                type="submit"
                onClick={formSubmitHandler}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={3} sm={3}>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{ color: "blue", fontWeight: "bold" }}
              >
                Booking.com
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
