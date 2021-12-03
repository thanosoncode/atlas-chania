import * as React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { GiWeightLiftingUp } from "react-icons/gi";

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
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker latitude={35.49741} longitude={24.01129}>
        <div>
          <GiWeightLiftingUp fontSize="2rem" color="white" />
        </div>
      </Marker>
      {/* <Marker latitude={35.49741} longitude={24.01129}>
        <IoBarbellSharp />
      </Marker> */}
    </ReactMapGL>
  );
}

export default Map;
