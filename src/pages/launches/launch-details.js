import * as spacexApi from "../../lib/spacex-api";
import { useState, useEffect } from "react";
import styles from "./launches.module.css";
import { useParams } from "react-router-dom";
var moment = require("moment");

function LaunchDetails() {
  let params = useParams();
  const [launchData, setLaunchData] = useState(null);
  const [crewDetails, setCrewDetails] = useState(null);

  useEffect(() => {
    async function getData() {
      const launchData = await spacexApi.GetData("launches", params.id);
      setLaunchData(launchData);
      getCrewDetails(launchData.crew);
    }

    async function getCrewDetails(crewIds) {
      var crewDetails = [];
      for (let i = 0; i < crewIds.length; i++) {
        var data = await spacexApi.GetData("crew", crewIds[i]);
        crewDetails.push(data);
      }
      setCrewDetails(crewDetails);
    }

    if (params) {
      getData();
    }
  }, [params]);

  console.log(launchData);
  console.log(crewDetails);

  return (
    <div>
      <div className={styles.contentContainer}>
        {launchData && (
          <div className={styles.tileLarge}>
            <span
              className={
                launchData.success === true
                  ? styles.launchStatusSuccess
                  : launchData.success === false
                  ? styles.launchStatusFailed
                  : styles.launchStatusTbd
              }
            >
              {launchData.success === true
                ? "Successful"
                : launchData.success === false
                ? "Failed"
                : "TBD"}
            </span>
            <div className={styles.imageContainer}>
              <img src={launchData.links.patch.small} />
            </div>
            <h1>{launchData.name}</h1>
            <h2>{moment(launchData.date_utc).format("LLLL")} UTC</h2>
            <p>{launchData.details}</p>
            <a
              href={launchData.links.article}
              target="_blank"
              class="btn btn-danger"
            >
              Article
            </a>
            &nbsp;&nbsp;&nbsp;
            <a
              href={launchData.links.wikipedia}
              target="_blank"
              class="btn btn-danger"
            >
              Wikipedia
            </a>
            &nbsp;&nbsp;&nbsp;
            <a
              href={launchData.links.webcast}
              target="_blank"
              class="btn btn-danger"
            >
              Webcast
            </a>
          </div>
        )}
      </div>
      {crewDetails && crewDetails.length > 0 && (
        <h1 className={styles.crewHeading}>Crew Members</h1>
      )}
      <div className={styles.contentContainer}>
        {crewDetails &&
          crewDetails.map((crew) => (
            <a href={`/crew-details/${crew.id}`} className={styles.tileLink}>
              <div className={styles.tile}>
                <div className={styles.imageContainer}>
                  <img src={crew.image} />
                </div>
                <h1>{crew.name}</h1>
                <h2>{crew.agency}</h2>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}

export default LaunchDetails;
