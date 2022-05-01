import * as spacexApi from "../../lib/spacex-api";
import { useState, useEffect } from "react";
import styles from "./crews.module.css";
var moment = require("moment");

function Crews() {
  const [crewData, setCrewData] = useState(null);

  useEffect(() => {
    async function getData() {
      const crewData = await spacexApi.GetData("crew");
      setCrewData(crewData);
    }
    getData();
  }, []);

  console.log(crewData);

  return (
    crewData && (
      <div className={styles.contentContainer}>
        {crewData.map((crewMember) => (
          <a
            href={`/crew-details/${crewMember.id}`}
            className={styles.tileLink}
          >
            <div className={styles.tile}>
              <div className={styles.imageContainer}>
                <img src={crewMember.image} />
              </div>
              <h1>{crewMember.name}</h1>
              <h2>{crewMember.agency}</h2>
            </div>
          </a>
        ))}
      </div>
    )
  );
}

export default Crews;
