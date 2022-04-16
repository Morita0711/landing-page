import styles from "../../styles/page/connection1.module.scss";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { connect } from "http2";

const page1 = () => {
  const walletConnect = async () => {
    console.log("walletConnect");
    try {
      const resp = await window.solana.request({ method: "connect" });
      resp.publicKey.toString();
      console.log(resp.publicKey.toString());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.border}>
        <div className={styles.body}>
          <div className={styles.bodyTop1}>Application</div>
          <div className={styles.bodyTop2} onClick={() => walletConnect()}>
            Connect wallet
          </div>
          <div className={styles.bodyTop3}>
            <button>Connect</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page1;
