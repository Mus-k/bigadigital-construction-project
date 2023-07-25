import React, { useEffect, useState } from "react";
import "./Map.css";
import {default as mapIcon} from "../../assets/icons/map.png"
const Map = () => {
  const [fetchData, setFetchData] = useState(null);
  const [loading, setLoading] = useState(true);


//   the function with async method
  const map = async () => {
    try {
      const response = await fetch(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96105.17756331305!2d28.941896408124347!3d41.17191140911738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409fe02232a852d7%3A0x3a86cad07b1a4ec4!2zU2FyxLF5ZXIvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1690198115518!5m2!1str!2str"
      );
     
      setFetchData(response);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(true);
    }
  };

//   using useEffect to call the function
  useEffect(() => {
    map();
  }, []);
  return (
    <div className="map boxTwo">

        {/* incase map doesnt load from online */}
      {loading ? (
        <div className="mapNotFound"><h4>OOPs live map not found</h4>
        <img src={mapIcon} alt="map" width="70%"/>
        </div>
      ) : (
        // if map load it will display this iframe
        <iframe
          src={fetchData.url}
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          title="google live map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
};

export default Map;
