import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LoadingComponent from "./LoadingComponent";
import EachProfile from "./EachProfile";
const useStyles = makeStyles({
  root: {
    maxWidth: 150,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  media: {
    height: 100,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const [showByUser, setShowByUser] = useState(false);

  return (
    <span>
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
