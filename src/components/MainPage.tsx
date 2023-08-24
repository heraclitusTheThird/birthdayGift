import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import Confetti from "react-confetti";
import Conditions from "./Conditions";

const MainPage: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [openArticlePopup, setOpenArticlePopup] = useState(false);

  const [cards, setCards] = useState(2);
  const [article, showArticle] = useState(false);

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  function handleRefundClick() {
    showArticle(true);
    setOpenArticlePopup(true);
  }

  const handleClaim = (cardNumber: number) => {
    if (cards === 2) setCards(cardNumber);
    else {
      setCards(-1);
    }
    setShowConfetti(true);
  };

  const handleConfettiComplete = () => {
    setShowConfetti(false);
  };

  const handleClosePopup = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason === "backdropClick") {
    } else {
      setOpenPopup(false);
    }
  };

  useEffect(() => {
    handleOpenPopup();
    setShowConfetti(true);

    const timeoutId = setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  }, []);

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      {showConfetti && (
        <Confetti
          style={{ zIndex: "9999" }}
          onConfettiComplete={handleConfettiComplete}
          tweenDuration={10}
          numberOfPieces={500}
        />
      )}
      <Dialog open={openPopup} onClose={handleClosePopup} disableEscapeKeyDown>
        <DialogContent sx={{ overflowX: "hidden" }}>
          <Typography variant="h5" gutterBottom>
            {cards === -1
              ? "Happy Birthday, I love you!"
              : "Congratulations, Ayşe!"}
          </Typography>
          <Typography paragraph>
            {!(cards === -1) &&
              "You are our millionth customer. As a token of appreciation, we have a special offer for you!"}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {(cards === 2 || cards === 0) && (
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Mad Parfum Gift Coupon
                    </Typography>
                    <Typography paragraph>
                      This is a coupon for a gift perfume at MAD. You can claim
                      one free fragrance that your bf picks out for you!
                    </Typography>
                    <Typography variant="subtitle2">
                      This offer is only valid on 27/08/2023.
                    </Typography>
                    <DialogActions>
                      <Button color="primary" onClick={handleRefundClick}>
                        Refund
                      </Button>
                      <Button
                        color="primary"
                        variant="contained"
                        sx={{
                          backgroundColor: "red",
                          fontWeight: "900",
                        }}
                        onClick={() => handleClaim(1)}
                      >
                        Claim
                      </Button>
                    </DialogActions>
                  </CardContent>
                </Card>
              )}
            </Grid>
            <Grid item xs={12}>
              {(cards === 2 || cards === 1) && (
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Complete Outfit Gift Coupon
                    </Typography>
                    <Typography paragraph>
                      This is a coupon for a complete outfit. You can claim a
                      pair of clothes that your bf picks out for you!
                    </Typography>
                    <Typography variant="subtitle2">
                      This offer is only valid on 27/08/2023 and is eligible for
                      use in different brands.
                    </Typography>
                    <DialogActions>
                      <Button color="primary" onClick={handleRefundClick}>
                        Refund
                      </Button>
                      <Button
                        color="primary"
                        variant="contained"
                        sx={{
                          backgroundColor: "red",
                          fontWeight: "900",
                        }}
                        onClick={() => handleClaim(0)}
                      >
                        Claim
                      </Button>
                    </DialogActions>
                  </CardContent>
                </Card>
              )}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Dialog open={openArticlePopup} onClose={handleClosePopup}>
        {article && (
          <Conditions scroll={true} setOpenArticlePopup={setOpenArticlePopup} />
        )}
      </Dialog>
    </Container>
  );
};

export default MainPage;
