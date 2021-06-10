import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";

const Hello = ({ name }) =>
<div>
    <h1>
    ...لطفا شکیبا باشید {name}
  </h1>;
  <CircularProgress/>
</div>


// Take in a component as argument WrappedComponent
function withNameReact(WrappedComponent) {
  // And return a new anonymous component
  return class extends React.Component {
    render() {
      return <WrappedComponent name="کاربر عزیز" {...this.props} />;
    }
  };
}

const NewComponent = withNameReact(Hello);

const LoadingComponent = () =>
  <div>
    <NewComponent />
  </div>;
export default LoadingComponent