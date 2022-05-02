import * as spacexApi from "../lib/spacex-api";
import { useState, useEffect } from "react";
import styles from "./company.module.css";
var moment = require("moment");

function Company() {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    async function getData() {
      const companyData = await spacexApi.GetData("company");
      setCompanyData(companyData);
    }
    getData();
  }, []);

  return (
    companyData && (
      <div className={styles.contentContainer}>
        <div className={styles.tileLarge}>
          <h1>{companyData.name}</h1>
          <h2>{companyData.summary}</h2>
          <h1>Facts</h1>
          <h2>
            <strong>Founded</strong> - {companyData.founded}
          </h2>
          <h2>
            {" "}
            <strong>Employees</strong> - {companyData.employees}
          </h2>
          <h2>
            {" "}
            <strong>Test Sites</strong> - {companyData.test_sites}
          </h2>
          <h2>
            {" "}
            <strong>Vehicles</strong> - {companyData.vehicles}
          </h2>
          <h1>Key People</h1>
          <h2>
            {" "}
            <strong>CEO</strong> - {companyData.ceo}
          </h2>
          <h2>
            {" "}
            <strong>CTO</strong> - {companyData.cto}
          </h2>
          <h2>
            {" "}
            <strong>COO</strong> - {companyData.coo}
          </h2>
          <h2>
            {" "}
            <strong>CTO Propulsion</strong> - {companyData.cto_propulsion}
          </h2>
        </div>
      </div>
    )
  );
}

export default Company;
