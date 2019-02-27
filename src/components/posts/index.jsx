import React, { Component } from "react";
import { Table, Header, Grid, Button } from "semantic-ui-react";
import { fetchPosts } from "../../actions";
import { connect } from "react-redux";
import LoaderComponent from "../shared/loader";
import { Link } from "react-router-dom";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderContent = () => {
    return this.props.isLoading ? (
      <LoaderComponent />
    ) : (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User id</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Body</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.posts.map(({ id, userId, title, body }) => (
            <Table.Row key={id}>
              <Table.Cell>{userId}</Table.Cell>
              <Table.Cell>{title}</Table.Cell>
              <Table.Cell>{body}</Table.Cell>
              <Table.Cell>
                <Link to={`/posts/${id}`}>
                  <Button color="instagram">See</Button>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  };

  render() {
    return (
      <div className="table-container">
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header as="h1">Posts</Header>
            </Grid.Column>
            <Grid.Column width={2} floated="right">
              <Link to={"/posts/create"}>
                <Button color="green">New post</Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToParams = state => {
  return { posts: state.posts.posts, isLoading: state.posts.isPostsLoading };
};

export default connect(
  mapStateToParams,
  { fetchPosts }
)(Posts);
