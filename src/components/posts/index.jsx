import React, { Component } from "react";
import jsonPlaceholder from "../../apis/jsonPlaceholder";
import { Table, Header } from "semantic-ui-react";
class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await jsonPlaceholder.get("posts");
    this.setState({
      posts: response.data
    });
  };

  render() {
    return (
      <div className="table-container">
        <Header as="h1">Posts</Header>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>User id</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Body</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.posts.map(({ id, userId, title, body }) => (
              <Table.Row key={id}>
                <Table.Cell>{userId}</Table.Cell>
                <Table.Cell>{title}</Table.Cell>
                <Table.Cell>{body}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default Posts;
