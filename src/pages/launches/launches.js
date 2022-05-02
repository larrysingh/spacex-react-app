import * as spacexApi from "../../lib/spacex-api";
import { useState, useEffect } from "react";
import styles from "./launches.module.css";
var moment = require("moment");

function Launches() {
  const [launchData, setLaunchData] = useState(null);

  useEffect(() => {
    async function getData() {
      const launchData = await spacexApi.GetData("launches");
      setLaunchData(launchData);
    }
    getData();
  }, []);

  return (
    launchData && (
      <div className={styles.contentContainer}>
        {launchData.map((launch) => (
          <a href={`/launch-details/${launch.id}`} className={styles.tileLink}>
            <div className={styles.tile}>
              <span
                className={
                  launch.success === true
                    ? styles.launchStatusSuccess
                    : launch.success === false
                    ? styles.launchStatusFailed
                    : styles.launchStatusTbd
                }
              >
                {launch.success === true
                  ? "Successful"
                  : launch.success === false
                  ? "Failed"
                  : "TBD"}
              </span>
              <div className={styles.imageContainer}>
                <img src={launch.links.patch.small} />
              </div>
              <h1>{launch.name}</h1>
              <h2>{moment(launch.date_utc).format("LLLL")} UTC</h2>
            </div>
          </a>
        ))}
      </div>
    )
  );
}

export default Launches;
