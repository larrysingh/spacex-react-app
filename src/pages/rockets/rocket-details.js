import * as spacexApi from "../../lib/spacex-api";
import { useState, useEffect } from "react";
import styles from "./rockets.module.css";
import { useParams } from "react-router-dom";
var moment = require("moment");

function RocketDetails() {
  let params = useParams();
  const [rocketData, setRocketData] = useState(null);

  useEffect(() => {
    async function getData() {
      const rocketData = await spacexApi.GetData("rockets", params.id);
      setRocketData(rocketData);
    }
    if (params) {
      getData();
    }
  }, [params]);

  return (
    <div className={styles.contentContainer}>
      {rocketData && (
        <div className={styles.tileLarge}>
          <div className={styles.imageContainer}>
            <img src={rocketData.flickr_images[0]} />
          </div>
          <h1>{rocketData.name}</h1>
          <h2>
            First Flight -{" "}
            {moment(rocketData.first_flight).format("MMM DD, YYYY")}
          </h2>
          <h2>Cost Per Launch - {`$${rocketData.cost_per_launch}`}</h2>
          <h2>Mass - {`${rocketData.mass.lb} pounds`}</h2>
          <h2>Diameter - {`${rocketData.diameter.feet} feet`}</h2>
          <h2>Success Rate - {`${rocketData.success_rate_pct}%`}</h2>
          <p>{rocketData.description}</p>
          <a href={rocketData.wikipedia} target="_blank" class="btn btn-danger">
            Wikipedia
          </a>
        </div>
      )}
    </div>
  );
}

export default RocketDetails;
