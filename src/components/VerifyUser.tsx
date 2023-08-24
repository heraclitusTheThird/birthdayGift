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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Snackbar, SnackbarContent } from "@mui/material";
import { Error as ErrorIcon } from "@mui/icons-material";

const VerifyUser: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Array<number>>([]);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState<string>();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const questions = [
    "If your boyfriend bites you while making out, your reaction is:",
    "How would you express the desire to eat a cheesecake?",
    "When you are extremely sleepy you ...",
    "Which words would you end your perfect day with",
    "You see a cute dog during your day, your reaction is:",
    "On a scale of 0-100%, how hot would you consider yourself to be?",
  ];

  const options = [
    ["Smile", "Ignore it", `"Ahhhh Stawwp" **slap`, "Tell him to stop"],
    [
      "Express politely",
      "Show a picture",
      "Imply it during conversation",
      `"Ooooo cheesecake"`,
    ],
    ["Go to sleep", "Laugh hysterically", "Eat", "Watch a movie"],
    [
      `"Today was good"`,
      `"Perfect"`,
      `"What a day!"`,
      `"Today was such a productive day"`,
    ],
    [
      `"That's cute"`,
      `"SOOOO CUTEEEE"`,
      `"What an extravagant species"`,
      `"A cute dog, indeed"`,
    ],
    ["0%", "50%", "75%", "100%"],
  ];

  const correctAnswers = [2, 3, 1, 3, 1, 3];
  const [completedQuestions, setCompletedQuestions] = useState<Array<boolean>>(
    new Array(questions.length).fill(false)
  );
  const handleOptionChange = (questionIndex: number, optionIndex: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);

    const updatedCompletedQuestions = [...completedQuestions];
    updatedCompletedQuestions[questionIndex] = true;
    setCompletedQuestions(updatedCompletedQuestions);
  };

  const isQuizCompleted = completedQuestions.every((completed) => completed);

  const handleNextPage = () => {
    if (!isQuizCompleted) {
      setError((prev) => !prev);
      setShowAlert("Please answer all questions before proceeding.");
    } else {
      setShowAlert(undefined);
      const isAnyAnswerIncorrect = selectedAnswers.some(
        (answer, index) => answer !== correctAnswers[index]
      );

      if (isAnyAnswerIncorrect) {
        setError((prev) => !prev);

        setShowAlert(
          "At least one of your answers is incorrect. Please review your answers."
        );
      } else {
        setShowAlert(undefined);
        navigate("/TermsAndConditions");
      }
    }
  };

  const handleOpenSnackbar = () => {
    setOpen(true);
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (showAlert) handleOpenSnackbar();
  }, [error]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginTop="30px"
      marginBottom="30px"
    >
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          border: "1px solid #ccc",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4">Please Verify your identity</Typography>

        {questions.map((question, index) => (
          <Card key={index} style={{ marginBottom: "20px", marginTop: "20px" }}>
            <CardContent>
              <Typography variant="h6">{question}</Typography>
              <FormControl component="fieldset" required>
                <RadioGroup
                  value={selectedAnswers[index]}
                  onChange={(e) =>
                    handleOptionChange(index, parseInt(e.target.value, 10))
                  }
                >
                  {options[index].map((option, optionIndex) => (
                    <FormControlLabel
                      key={optionIndex}
                      value={optionIndex.toString()}
                      control={<Radio />}
                      label={
                        <Typography
                          variant="body2"
                          style={{ fontSize: "14px" }}
                        >
                          {option}
                        </Typography>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
        ))}
        <Card style={{ marginBottom: "20px", marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h6">You are extremely pretty</Typography>
            <Typography variant="body1">
              This is a fact not a question!
            </Typography>
          </CardContent>
        </Card>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "red",
            fontWeight: "900",
            marginBottom: "30px",
          }}
          onClick={handleNextPage}
        >
          Next Page
        </Button>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <SnackbarContent
          message={
            <span style={{ display: "flex", alignItems: "center" }}>
              <ErrorIcon style={{ marginRight: "8px" }} />
              {showAlert}
            </span>
          }
          style={{
            backgroundColor: "#f44336",
          }}
        />
      </Snackbar>
    </Box>
  );
};

export default VerifyUser;
