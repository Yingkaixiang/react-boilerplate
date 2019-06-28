import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

import { MyRouteConfig } from "../../routes";

interface NavigatorProps {
  routes: MyRouteConfig[];
}

const { SubMenu } = Menu;

const Navigator: React.FC<NavigatorProps> = ({ routes }) => {
  function renderRoot(list: MyRouteConfig[] | undefined) {
    if (list && list.length) {
      return renderMenu(list[0].routes || []);
    }
    return null;
  }

  function renderMenu(list: MyRouteConfig[]): any {
    return list.map((item: MyRouteConfig) => {
      if (item.routes) {
        return item.isShow ? (
          <SubMenu
            key={item.key}
            title={
              <span>
                {item.icon ? <Icon type={item.icon} /> : null}
                <span>{item.name}</span>
              </span>
            }
          >
            {renderMenu(item.routes)}
          </SubMenu>
        ) : null;
      }
      return item.isShow ? (
        <Menu.Item key={item.key}>
          {item.icon ? <Icon type={item.icon} /> : null}
          <Link to={item.path || "/"}>{item.name}</Link>
        </Menu.Item>
      ) : null;
    });
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["4"]}
    >
      {renderRoot(routes)}
    </Menu>
  );
};

export default Navigator;
