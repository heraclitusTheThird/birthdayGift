import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from "react-router-dom";
import { Snackbar, SnackbarContent } from "@mui/material";
import { Error as ErrorIcon } from "@mui/icons-material";

// Define a custom theme with non-primary color
const theme = createTheme({});

const SignIn = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpenSnackbar = () => {
    setOpen(true);
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  function handleNoClick() {
    setError(true);
    setOpen(true);
  }

  function handleYesClick() {
    navigate("/VerifyUser");
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <SnackbarContent
            message={
              <span style={{ display: "flex", alignItems: "center" }}>
                <ErrorIcon style={{ marginRight: "8px" }} />
                Wrong answer, let's try that again
              </span>
            }
            style={{
              backgroundColor: "#f44336",
            }}
          />
        </Snackbar>

        <Typography variant="h5" gutterBottom>
          Are you Ayşe Akimsar?
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleNoClick}
            size="small"
          >
            No
          </Button>
          <Button
            variant="contained"
            onClick={handleYesClick}
            endIcon={<LocalFloristIcon />}
            sx={{
              backgroundColor: "red",
              fontWeight: "900",
            }}
          >
            Yes
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default SignIn;
