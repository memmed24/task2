import React, { Component } from "react";
import {
  Table,
  Header,
  Segment,
  Dimmer,
  Loader,
  Image
} from "semantic-ui-react";
import jsonPlaceholder from "../../apis/jsonPlaceholder";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    const response = await jsonPlaceholder.get("users");
    this.setState({
      users: response.data,
      isLoading: false
    });
  };

  renderContent = () => {
    return this.state.isLoading ? (
      <Segment>
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    ) : (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.state.users.map(({ id, name, username, email, address }) => (
            <Table.Row key={id}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{username}</Table.Cell>
              <Table.Cell>{email}</Table.Cell>
              <Table.Cell>
                {`
              ${address.street} 
              ${address.suite} 
              ${address.city} 
              ${address.zipcode}
            `}
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
        <Header as="h1">Users</Header>
        {this.renderContent()}
      </div>
    );
  }
}

export default Users;
