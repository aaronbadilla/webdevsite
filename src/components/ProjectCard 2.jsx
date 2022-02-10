import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  CardHeader
} from "@material-ui/core";

function ProjectCard(props) {
  return (
    <Grid item xs={12} lg={4} md={6}>
      <Card style={{ borderRadius: 10 }}>
        <CardHeader title={props.title}></CardHeader>
        <CardActionArea href={props.webLink} target="_blank" rel="noopener noreferrer">
          <CardMedia component="img" image={props.image} height="250" />
        </CardActionArea>
        <CardContent>
          <p>{props.blurb} </p>
          <p>{props.writtenWith}</p>
          <p>
            Check out the <a href={props.githubLink}>code</a> on GitHub
          </p>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProjectCard;
