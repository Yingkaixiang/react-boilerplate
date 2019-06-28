import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

import { MyRouteConfig } from "../../routes";

interface MyBreadcrumbProps {
  path: MyRouteConfig[];
}

const MyBreadcrumb: React.FC<MyBreadcrumbProps> = ({ path }) => {
  return (
    <Breadcrumb>
      {path.map((item: MyRouteConfig) => {
        return (
          <Breadcrumb.Item key={item.key}>
            <Link to={item.path || "/"}>{item.name}</Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default MyBreadcrumb;
