import styles from "../../styles/page/connection2.module.scss";
import Header from "../../component/header";
import Footer from "../../component/footer";

const connection2 = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.border}>
        <div className={styles.body}>
          <div className={styles.bodyTop1}>Application</div>
          <div className={styles.bodyTop2}>
            <span>Art Generator</span>
            <span>Connect</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default connection2;
