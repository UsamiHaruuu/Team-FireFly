import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Button } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import { collectWrapper } from "./collectorHelper";

const HomeButton = () => {
  return (
    <Button component={Link} to={"./"}>
      <div class="NavFont">
        <strong>FanBase</strong>
      </div>
    </Button>
  );
};
const Navigation = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to={"/fans"}
          >
            <img src="logo192.png" width="25%" height="25%" />
            <div class="NavFont">fans</div>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to={"./supporters"}
          >
            <img src="logo192.png" width="25%" height="25%" />
            <div class="NavFont">supporters</div>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to={"./collectors"}
          >
            <img src="logo192.png" width="25%" height="25%" />
            <div class="NavFont">collectors</div>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to={"./supporters"}
          >
            <img src="logo192.png" width="25%" height="25%" />
            <div class="NavFont">collaborators</div>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Navigation, MainPage, HomeButton };
