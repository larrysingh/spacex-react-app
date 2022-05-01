import styles from "./index.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <h1 className={styles.footerText}>
        © 2022 Prabjot Singh | Data Provided By -{" "}
        <a href="https://github.com/r-spacex/SpaceX-API" target="_blank">
          SpaceX REST API
        </a>
      </h1>
    </div>
  );
}

export default Footer;
