import React, { Component } from "react";
import "./App.css";
import Users from "./components/users";
import PostCreate from './components/posts/create';
import { Container, Grid } from "semantic-ui-react";
import Posts from "./components/posts";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/shared/header";
import history from "./history";


class App extends Component {
  render() {
    return (
      <Container>
        <Router history={history}>
          <>
            <Header />
            <Grid.Row>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => <Redirect to={"/users"} />}
                />
                <Route
                  path={"/users"}
                  component={Users}
                />
                <Route 
                  path={"/posts"} 
                  render={({match: { url }}) => (
                    <>
                      <Route path={url} exact component={Posts}/>
                      <Route path={`${url}/create`} component={PostCreate} />
                    </>
                  )}
                />
              </Switch>
            </Grid.Row>
          </>
        </Router>
      </Container>
    );
  }
}

export default App;
