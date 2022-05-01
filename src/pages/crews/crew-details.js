import * as spacexApi from "../../lib/spacex-api";
import { useState, useEffect } from "react";
import styles from "./crews.module.css";
import { useParams } from "react-router-dom";
var moment = require("moment");

function CrewDetails() {
  let params = useParams();
  const [crewMemberData, setCrewMemberData] = useState(null);

  useEffect(() => {
    async function getData() {
      const crewData = await spacexApi.GetData("crew", params.id);
      setCrewMemberData(crewData);
    }
    if (params) {
      getData();
    }
  }, [params]);

  console.log(crewMemberData);

  return (
    <div className={styles.contentContainer}>
      {crewMemberData && (
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
      )}
    </div>
  );
}

export default CrewDetails;
