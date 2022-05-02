import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  CardHeader
} from "@material-ui/core";
import './ProjectCard.styles.scss'

import { useInView } from 'react-intersection-observer';

function ProjectCard(props) {

  const { ref, inView} = useInView({
        threshold: .5,
        triggerOnce: true,
      });

  return (
    <Grid item xs={12} lg={4} md={6}>
      <Card ref={ref} sx={{ borderRadius: 10 }} className={`portfolio-card ${inView ? 'animate-portfolio-card' : null}` }>
        <CardHeader title={props.title}></CardHeader>
        <CardActionArea href={props.webLink} target="_blank" rel="noopener noreferrer">
          <CardMedia className="animate-card-media" component="img" image={props.image} height="250" />
        </CardActionArea>
        <CardContent>
          <p>{props.blurb} </p>
          <p>{props.writtenWith}</p>
          {props.noCode ?
            <p>No code available for this project</p> :
            <p>
            Check out the <a href={props.githubLink}>code</a> on GitHub
            </p>
          }

        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProjectCard;
