import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../actions";
import { Grid, Segment, Button } from "semantic-ui-react";
import LoaderComponent from "../shared/loader";
import { Link } from "react-router-dom";

class SinglePost extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  renderContent() {
    return this.props.isPostLoading ? (
      <LoaderComponent />
    ) : (
      <>
        <Segment>{this.props.post.body}</Segment>
      </>
    );
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={14}><h1>Single Post</h1></Grid.Column>
          <Grid.Column width={2}>
            <Link to={"/posts"} >
              <Button color="green">Go to posts list</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>{this.renderContent()}</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return { isPostLoading: state.posts.isPostLoading, post: state.posts.post };
};

export default connect(
  mapStateToProps,
  {
    fetchPost
  }
)(SinglePost);
