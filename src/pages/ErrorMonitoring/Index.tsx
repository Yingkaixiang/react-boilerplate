import React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";

const JSError: React.FC<RouteConfigComponentProps> = ({ route }) => {
  return (
    <div>
      <div>JSError</div>
      {renderRoutes(route ? route.routes : [])}
    </div>
  );
};

export default JSError;
