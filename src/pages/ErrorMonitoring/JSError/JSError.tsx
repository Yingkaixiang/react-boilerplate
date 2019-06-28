import React from "react";
import { connect } from "react-redux";

const JSError: React.FC = () => {
  return <div>js error</div>;
};

function mapStateToProps(store: any) {
  console.dir(store);
  return {};
}

export default connect(mapStateToProps)(JSError);
