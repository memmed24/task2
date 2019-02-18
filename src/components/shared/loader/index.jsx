import React from "react";
import { Segment, Dimmer, Loader, Image } from "semantic-ui-react";

const LoaderComponent = () => {
  return (
    <Segment>
      <Dimmer active>
        <Loader content="Loading" />
      </Dimmer>
      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
  );
};

export default LoaderComponent;
