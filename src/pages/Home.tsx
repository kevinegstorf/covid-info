import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "store/actions";

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

function HompePage(props: any) {
  const classes = useStyles();

  console.log(props);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h6" className={classes.title}>
          Home
          <Button onClick={props.FetchApi}>Click</Button>
          {props.locations.map((location: any) => {
            return (
              <div key={location.id}>
                <div>{location.country}</div>
                <div>{location.latest.confirmed}</div>
                <div>{location.latest.deaths}</div>
                <div>{location.latest.recoverd}</div>
              </div>
            );
          })}
        </Typography>
      </Paper>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return { locations: state.covid };
};

export default connect(mapStateToProps, actions)(HompePage);
