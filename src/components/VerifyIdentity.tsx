import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Container,
  Box,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const VerifyIdentity: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [opacity, setOpacity] = useState(0);
  const navigate = useNavigate();

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setProfilePicture(selectedFile);
    }
  };

  const handleNextPage = () => {
    navigate("/TermsAndConditions");
  };

  useEffect(() => {
    const fadeIn = () => {
      let newOpacity = opacity;
      const interval = setInterval(() => {
        newOpacity += 0.02; // Adjust the increment for the desired fading speed
        if (newOpacity >= 1) {
          clearInterval(interval);
        }
        setOpacity(newOpacity);
      }, 500); // Adjust the interval for the desired smoothness
    };

    setTimeout(() => {
      fadeIn();
    }, 30);
  }, []);

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
        maxWidth="sm"
        sx={{
          border: "1px solid #ccc",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <Typography variant="h4">
          Now, please verify your identitites
        </Typography>

        <Card style={{ marginBottom: "20px", marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h6">Upload a picture of your boobs</Typography>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              disabled={profilePicture !== null}
            />
          </CardContent>
        </Card>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
        >
          {opacity !== 0 && (
            <Typography style={{ opacity, color: "red" }}>
              Just kidding!
            </Typography>
          )}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              fontWeight: "900",
              marginBottom: "30px",
            }}
            onClick={handleNextPage}
            disabled={opacity < 0.6}
          >
            Next
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default VerifyIdentity;
