import styles from "../../styles/page/connection2.module.scss";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { Router, useRouter } from "next/router";

const connection2 = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.border}>
        <div className={styles.body}>
          <div className={styles.bodyTop1}>Application</div>
          <div className={styles.bodyTop2}>
            <button
              onClick={() => {
                router.push("/connection1");
              }}
            >
              Art Generator
            </button>
          </div>
          <div className={styles.bodyTop2}>
            <span>Connect</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default connection2;
