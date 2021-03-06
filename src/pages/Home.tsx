import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, Typography, Button } from "@material-ui/core";
import { AppTable } from "../components";
import { connect } from "react-redux";
import * as actions from "store/actions";
import { Location, State } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10
    },
    paper: {
      minHeight: 500
    },
    title: {
      flexGrow: 1
    }
  })
);

interface Props {
  locations: Array<Location>;
  FetchApi?: () => void;
}

function HomePage(props: Props): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h6" className={classes.title}>
          Home
          <Button onClick={props.FetchApi}>Click</Button>
          {props.locations ? (
            <AppTable locations={props.locations} />
          ) : (
            <h2>Oeps</h2>
          )}
          {/* <AppTable locations={props.locations} /> */}
          {/* {props.locations.map((location: Location) => {
            return (
              <div key={location.id}>
                <div>{location.country}</div>
                <div>{location.latest.confirmed}</div>
                <div>{location.latest.deaths}</div>
                <div>{location.latest.recovered}</div>
              </div>
            );
          })} */}
        </Typography>
      </Paper>
    </div>
  );
}

const mapStateToProps = (state: State) => {
  return { locations: state.covid };
};

export default connect(mapStateToProps, actions)(HomePage);
