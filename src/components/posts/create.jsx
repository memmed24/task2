import React, { Component } from "react";
import {
  Form,
  Button,
  Grid,
  TextArea,
  Input,
  Label,
  Segment,
} from "semantic-ui-react";

class UserCreate extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8}>
            <Form>
              <Segment>
                <Form.Field>
                  <Label color="blue" ribbon>
                    Title
                  </Label>
                  <Input placeholder="Title" />
                  <Label basic color="red" pointing>
                    Please enter a value
                  </Label>
                </Form.Field>
                <Form.Field>
                  <Label color="blue" ribbon>
                    Body
                  </Label>
                  <TextArea placeholder="Body" />
                </Form.Field>
                <Button type="submit" color="orange">Submit</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default UserCreate;
