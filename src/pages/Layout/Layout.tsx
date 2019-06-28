import React from "react";
import { renderRoutes, matchRoutes } from "react-router-config";
import { connect } from "react-redux";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";

import { RouteConfigComponentProps, MatchedRoute } from "react-router-config";
import { RouteComponentProps } from "react-router";

import styles from "./Layout.module.scss";
import Navigator from "./Navigator";
import Breadcrumb from "./Breadcrumb";
import routes from "../../routes";

const { Header, Content, Footer, Sider } = Layout;

type MyLayoutProps = RouteConfigComponentProps & RouteComponentProps;

const MyLayout: React.FC<MyLayoutProps> = ({ route, location, history }) => {
  const matches = matchRoutes(routes, location.pathname);
  matches.shift();
  const path = matches.map((item: MatchedRoute<any>) => item.route);

  function handleLogoClick() {
    history.push("/");
  }

  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className={styles.logo} onClick={handleLogoClick} />
        <Navigator routes={routes} />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Breadcrumb path={path} />
          <div style={{ padding: 24, background: "#fff", textAlign: "center", marginTop: 24 }}>
            {renderRoutes(route ? route.routes : [])}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

function mapStateToProps(store: any) {
  return {};
}

export default connect(mapStateToProps)(withRouter(MyLayout));
