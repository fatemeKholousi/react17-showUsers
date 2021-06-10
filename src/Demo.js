import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 150,
    marginBottom: 50,
  },
  media: {
    height: 100,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <span style={{ marginBottom: "500px", paddingBottom: "50px" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.profileImage}
            title="profile image"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h7"
              component="h6"
              onClick={props.handleClickToShow}
            >
              {props.useName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </span>
  );
}
