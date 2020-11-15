import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography as Text,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 400,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Box marginTop={5} />
      <Container>
        <Grid container spacing={3}>
          {[1, 2, 3].map((val) => (
            <Grid item lg={4} key={val}>
              <Card>
                <CardMedia
                  className={classes.media}
                  image="https://media.kitsu.io/manga/poster_images/26004/original.jpg?1541845511"
                  title="Boku no Hero Academia"
                />
                <CardContent>
                  <Text gutterBottom variant="h5" component="h2">
                    Boku no Hero Academia
                  </Text>
                  <Text variant="body2" color="textSecondary" component="p">
                    What would the world be like if 80 percent of the population
                    manifested superpowers called “Quirks” at age four? Heroes and
                    villains would be battling it out everywhere! Being a hero
                    would mean learning to use your power
                  </Text>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
