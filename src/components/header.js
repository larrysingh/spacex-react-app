import styles from "./index.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <a href="#">
        <img src="/assets/logo.png" width="200px" className={styles.logo} />
      </a>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid justify-content-center">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className={styles.navItem}>
                <a class="nav-link active" href="/">
                  HOME
                </a>
              </li>
              <li className={styles.navItem}>
                <a class="nav-link active" href="/crews">
                  CREWS
                </a>
              </li>
              <li className={styles.navItem}>
                <a class="nav-link active" href="/launches">
                  LAUNCHES
                </a>
              </li>
              <li className={styles.navItem}>
                <a class="nav-link active" href="/rockets">
                  ROCKETS
                </a>
              </li>
              <li className={styles.navItem}>
                <a class="nav-link active" href="/company">
                  COMPANY
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
