import * as spacexApi from "../../lib/spacex-api";
import { useState, useEffect } from "react";
import styles from "./crews.module.css";
import { useParams } from "react-router-dom";
var moment = require("moment");

function CrewDetails() {
  let params = useParams();
  const [crewMemberData, setCrewMemberData] = useState(null);
  const [launchDetails, setLaunchDetails] = useState(null);

  useEffect(() => {
    async function getData() {
      const crewData = await spacexApi.GetData("crew", params.id);
      setCrewMemberData(crewData);
      getLaunchDetails(crewData.launches);
    }

    async function getLaunchDetails(launchIds) {
      var launchDetails = [];
      for (let i = 0; i < launchIds.length; i++) {
        var data = await spacexApi.GetData("launches", launchIds[i]);
        launchDetails.push(data);
      }
      setLaunchDetails(launchDetails);
    }

    if (params) {
      getData();
    }
  }, [params]);

  return (
    <div className={styles.contentContainer}>
      {crewMemberData && (
        <div>
          <div className={styles.tile}>
            <div className={styles.imageContainer}>
              <img src={crewMemberData.image} />
            </div>
            <h1>{crewMemberData.name}</h1>
            <h2>{crewMemberData.agency}</h2>
            <a
              href={crewMemberData.wikipedia}
              target="_blank"
              class="btn btn-danger"
            >
              Wikipedia
            </a>
          </div>
          {launchDetails && <h1>Launches</h1>}
          {launchDetails &&
            launchDetails.map((launch) => (
              <a
                href={`/launch-details/${launch.id}`}
                className={styles.tileLink}
              >
                <div className={styles.tile}>
                  <div className={styles.imageContainer}>
                    <img src={launch.links.patch.small} />
                  </div>
                  <h1>{launch.name}</h1>
                  <h2>{moment(launch.date_utc).format("LLLL")} UTC</h2>
                </div>
              </a>
            ))}
        </div>
      )}
    </div>
  );
}

export default CrewDetails;
