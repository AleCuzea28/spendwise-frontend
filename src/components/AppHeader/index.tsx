import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import "./AppHeader.css";

export const AppHeader: FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters className={"menu-container"}>
          <Button className={"menu-button-text"} variant="contained" href="/">
            <Typography>Home</Typography>
          </Button>
          <Button
            className={"menu-button-text"}
            variant="contained"
            href="/categories"
          >
            <Typography>Categories</Typography>
          </Button>
          <Button
            className={"menu-button-text"}
            variant="contained"
            href="/upload-receipt"
          >
            <Typography>Upload Receipt</Typography>
          </Button>
          <Button
            className={"menu-button-text"}
            variant="contained"
            href="/statistics"
          >
            <Typography>Statistics</Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
