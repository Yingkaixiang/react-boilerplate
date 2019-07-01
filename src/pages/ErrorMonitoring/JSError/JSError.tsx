import React, { useEffect } from "react";
import { connect } from "react-redux";

interface JSErrorProps {
  list?: any;
  getList?: any;
}

const JSError: React.FC<any> = ({ list, getList }) => {
  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    console.dir(list);
  });

  return <div>js error</div>;
};

function mapStateToProps(store: any) {
  return { ...store.jsError };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getList: () => dispatch({ type: "jsError/getList" }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JSError);
