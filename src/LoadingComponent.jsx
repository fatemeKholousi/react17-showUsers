import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@material-ui/core";

const Hello = ({ name }) =>
<Box display="flex"
 flexDirection="column"
          justifyContent="center"
          alignItems="center">
    <h1>
    ...لطفا شکیبا باشید {name}
  </h1>;
  <img src="https://i.pinimg.com/originals/97/e9/42/97e942ce7fc4e9d4ea6d844a382f251f.gif" alt="" />
</Box>


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
  <div style={{background:'#e3dbdb'}}>
    <NewComponent />
  </div>;
export default LoadingComponent