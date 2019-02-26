import React from "react";
import { Segment, Dimmer, Loader, Image } from "semantic-ui-react";

const LoaderComponent = (props) => {
  let content = props.content || "Loading";
  return (
    <Segment>
      <Dimmer active>
        <Loader content={content} />
      </Dimmer>
      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
  );
};

export default LoaderComponent;
