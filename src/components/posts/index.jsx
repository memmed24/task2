import React, { Component } from "react";
import { Table, Header } from "semantic-ui-react";
import { fetchPosts } from "../../actions";
import { connect } from "react-redux";
import LoaderComponent from "../shared/loader";

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
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.posts.map(({ id, userId, title, body }) => (
            <Table.Row key={id}>
              <Table.Cell>{userId}</Table.Cell>
              <Table.Cell>{title}</Table.Cell>
              <Table.Cell>{body}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  };

  render() {
    return (
      <div className="table-container">
        <Header as="h1">Posts</Header>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToParams = state => {
  return { posts: state.posts.posts, isLoading: state.posts.isLoading };
};

export default connect(
  mapStateToParams,
  { fetchPosts }
)(Posts);
