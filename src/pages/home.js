import * as spacexApi from "../lib/spacex-api";
import { useState, useEffect } from "react";
import styles from "./home.module.css";
var moment = require("moment");

function Home() {
  const [nextLaunch, setNextLaunch] = useState(null);
  const [lastLaunch, setLastLaunch] = useState(null);

  useEffect(() => {
    async function getData() {
      const nextLaunch = await spacexApi.GetData("launches/next");
      const lastLaunch = await spacexApi.GetData("launches/latest");
      setNextLaunch(nextLaunch);
      setLastLaunch(lastLaunch);
    }
    getData();
  }, []);

  return (
    nextLaunch &&
    lastLaunch && (
      <div className={styles.contentContainer}>
        <div className={styles.tile}>
          <h1>Latest Launch</h1>
          <h2>{moment(lastLaunch.date_utc).format("LLLL")} UTC</h2>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${lastLaunch.links.youtube_id}`}
            className={styles.video}
          ></iframe>
        </div>
        <div className={styles.tile}>
          <h1>Next Launch</h1>
          <h2>{moment(nextLaunch.date_utc).format("LLLL")} UTC</h2>
          {!nextLaunch.links.youtube_id && <p>Video Link Coming Soon</p>}
          {nextLaunch.links.youtube_id && (
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${nextLaunch.links.youtube_id}`}
              className={styles.video}
            ></iframe>
          )}
        </div>
      </div>
    )
  );
}

export default Home;
