import React, { Component } from "react";
import { Table, Header, Button, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchUsers, deleteUser } from "../../actions";
import Loader from "../shared/loader";

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderContent = () => {
    return this.props.isLoading ? (
      <Loader />
    ) : (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.users.map(({ id, name, username, email, address }) => (
            <Table.Row key={id}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{username}</Table.Cell>
              <Table.Cell>{email}</Table.Cell>
              <Table.Cell>
                {address.street}
                {address.suite}
                {address.city}
                {address.zipcode}
              </Table.Cell>
              <Table.Cell>
                <Button onClick={() => this.props.deleteUser(id)}>
                  Delete
                </Button>
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
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h1">Users</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToParams = state => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading
  };
};

export default connect(
  mapStateToParams,
  { fetchUsers, deleteUser }
)(Users);
