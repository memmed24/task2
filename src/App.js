import React, { Component } from "react";
import "./App.css";
import Users from "./components/users";
import { Container, Grid } from "semantic-ui-react";
import Posts from "./components/posts";

class App extends Component {
  render() {
    return (
      <Container>
        <Grid.Row>
          <Users />
        </Grid.Row>
        <Grid.Row>
          <Posts />
        </Grid.Row>
      </Container>
    );
  }
}

export default App;
