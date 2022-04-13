import styles from "../../styles/page/page1.module.scss";

const page1 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div>1</div>
        <div className={styles.headeroption}>
          <span>Register</span>
          <span>Play</span>
          <span>2</span>
        </div>
      </div>
      <div className={styles.border}>
        <div className={styles.body}>
          <div className={styles.bodyTop}>
            <span className={styles.title}>Art Generator</span>
          </div>
          <div className={styles.bodyMain}>
            <div className={styles.left}>
              <div>
                <div>Layer 1</div>
                <div>+</div>
              </div>
              <div>
                <div>Layer 2</div>
                <div>+</div>
              </div>
              <div>+</div>
            </div>
            <div className={styles.center}>
              <div className={styles.quote}></div>
              <div className={styles.setTap}>
                <button>PREVIEW</button>
                <button> MAKE GIF</button>
                <button>Generate</button>
              </div>
              <div className={styles.actTap}>
                <div className={styles.btnFunc}>
                  <div>
                    <input placeholder="How many NFT..." />
                  </div>
                  <div className={styles.leftTap}>
                    <button>UPLOAD</button>
                    <button>UPDATE</button>
                  </div>
                </div>
                <div className="">
                  <button className={styles.btnDown}>DOWNLOAD</button>
                </div>
              </div>
              <div className={styles.solState}>
                <span>20 SOL</span>
              </div>
            </div>
            <div className={styles.right}>
              <div>
                <span>Layer name</span>
              </div>
              <div>
                <input placeholder="Project Name" />
              </div>
              <div>
                <input placeholder="Website Name" />
              </div>
              <div>
                <input placeholder="Project Description" />
              </div>
              <div>
                <input placeholder="Base uri" />
              </div>
              <div>
                <span>DIMENSIONS</span>
              </div>
              <div>
                <input placeholder="X" />
                <input placeholder="Y" />
              </div>
              <div>
                <span>image Rarity</span>
              </div>
              <div>
                <div>
                  <span>25%</span>
                  <span>Trait 1</span>
                  <span></span>
                </div>
                <div>
                  <span>25%</span>
                  <span>Trait 2</span>
                  <span></span>
                </div>
                <div>
                  <span>20%</span>
                  <span>Trait 3</span>
                  <span></span>
                </div>
                <div>
                  <span>20%</span>
                  <span>Trait 4</span>
                  <span></span>
                </div>
                <div>
                  <span>10%</span>
                  <span>Trait 5</span>
                  <span></span>
                </div>
              </div>
              <div>
                <div>
                  <span>Ethereum%</span>
                  <span></span>
                  <span>Solana</span>
                </div>
                <div>
                  <span>IPFS</span>
                  <span></span>
                  <span>Arweave</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page1;
