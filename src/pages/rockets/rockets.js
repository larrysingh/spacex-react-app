import * as spacexApi from "../../lib/spacex-api";
import { useState, useEffect } from "react";
import styles from "./rockets.module.css";
var moment = require("moment");

function Rockets() {
  const [rocketData, setRocketData] = useState(null);

  useEffect(() => {
    async function getData() {
      const rocketData = await spacexApi.GetData("rockets");
      setRocketData(rocketData);
    }
    getData();
  }, []);

  console.log(rocketData);

  return (
    rocketData && (
      <div className={styles.contentContainer}>
        {rocketData.map((rocket) => (
          <a href={`/rocket-details/${rocket.id}`} className={styles.tileLink}>
            <div className={styles.tile}>
              <div className={styles.imageContainer}>
                <img src={rocket.flickr_images[0]} />
              </div>
              <h1>{rocket.name}</h1>
              <h2>
                First Flight -{" "}
                {moment(rocket.first_flight).format("MMM DD, YYYY")}
              </h2>
            </div>
          </a>
        ))}
      </div>
    )
  );
}

export default Rockets;
