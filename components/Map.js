import React from "react";
import ReactMapGL from "react-map-gl";

const location = {
  address: "Agiou Nektariou 31 Chania",
  lat: 35.49741,
  lng: 24.01129,
};

function Map() {
  const [viewport, setViewport] = React.useState({
    latitude: 35.49741,
    longitude: 24.01129,
    zoom: 12,
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken="pk.eyJ1IjoidGhhbm9zb25jb2RlIiwiYSI6ImNrcGN5emt6bTFlYW4yb3Q3ZGN1dnprazAifQ.Xv_1gFfjFYFkSYZkS49KpA"
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
}

export default Map;
