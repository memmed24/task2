import React, { Component } from "react";
import {
  Form,
  Button,
  Grid,
  TextArea,
  Input,
  Label,
  Segment,
  Transition,
  Message
} from "semantic-ui-react";
import {
  handlePostInputsChange,
  handlePostInputsBlur,
  handlePostSubmit
} from "../../actions";
import { connect } from "react-redux";
import LoaderComponent from "../shared/loader";

class UserCreate extends Component {
  checkIfFormHasErrors() {
    if (
      this.props.postForm.title.isDirty &&
      this.props.postForm.body.isDirty &&
      this.props.postForm.title.errors.length === 0 &&
      this.props.postForm.body.errors.length === 0
    ) {
      return false;
    }
    return true;
  }

  handleSubmit() {
    if (!this.checkIfFormHasErrors()) {
      const postData = {
        title: this.props.postForm.title.value,
        body: this.props.postForm.body.value
      };
      this.props.handlePostSubmit(postData);
    }
  }

  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8}>
            <Form onSubmit={() => this.handleSubmit()}>
              <Segment>
                <Form.Field>
                  <Label color="blue" ribbon>
                    Title
                  </Label>
                  <Input
                    onBlur={({ target: { name, value } }) => {
                      this.props.handlePostInputsChange(name, value);
                      this.props.handlePostInputsBlur(name);
                    }}
                    name="title"
                    placeholder="Title"
                    autoComplete={"off"}
                    onChange={({ target: { value, name } }) =>
                      this.props.handlePostInputsChange(name, value)
                    }
                    value={this.props.postForm.title.value}
                  />

                  {this.props.postForm.title.errors.length > 0 &&
                  this.props.postForm.title.isTouched
                    ? this.props.postForm.title.errors.map((error, i) => (
                        <Label key={i} basic color="red" pointing>
                          {error}
                        </Label>
                      ))
                    : null}
                </Form.Field>
                <Form.Field>
                  <Label color="blue" ribbon>
                    Body
                  </Label>
                  <TextArea
                    name="body"
                    placeholder="Body"
                    autoComplete={"off"}
                    onBlur={({ target: { name, value } }) => {
                      this.props.handlePostInputsChange(name, value);
                      this.props.handlePostInputsBlur(name);
                    }}
                    onChange={({ target: { value, name } }) =>
                      this.props.handlePostInputsChange(name, value)
                    }
                    value={this.props.postForm.body.value}
                  />
                  {this.props.postForm.body.errors.length > 0 &&
                  this.props.postForm.body.isTouched
                    ? this.props.postForm.body.errors.map((error, i) => (
                        <Label key={i} basic color="red" pointing>
                          {error}
                        </Label>
                      ))
                    : null}
                </Form.Field>
                <Button
                  type="submit"
                  color="orange"
                  disabled={this.checkIfFormHasErrors()}
                >
                  Create
                </Button>
              </Segment>
              {this.props.postForm.isLoading ? (
                <LoaderComponent content="It may take a while" />
              ) : null}
              <Transition
                visible={this.props.postForm.isMessageOpened}
                animation="scale"
                duration={500}
              >
                <Message positive>
                  <Message.Header>{"Success!"}</Message.Header>
                  <p>Your row has been inserted to fake endpoint. :)</p>
                </Message>
              </Transition>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToParams = state => {
  return { postForm: state.postForm };
};

export default connect(
  mapStateToParams,
  {
    handlePostInputsChange,
    handlePostInputsBlur,
    handlePostSubmit
  }
)(UserCreate);
