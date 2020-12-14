import React from "react";

function Wrapper(props) {
  return <div className="wrapper" id="everythingDiv">{props.children}</div>;
}

export default Wrapper;