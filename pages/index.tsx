import type { NextPage } from "next";
import styles from "../styles/page/page1.module.scss";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Image from "next/image";
import dmh from "../asset/dmh.png";
import Texaglo from "../asset/Texaglo.png";
import Header from "../component/header";
import Footer from "../component/footer";

const Home: NextPage = () => {
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 60,
    height: 17,
    padding: 3.5,
    margin: 0,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(2px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(40px)",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.mode === "dark" ? "black" : "white",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "white" : "black",
      width: 16,
      height: 16,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.border}>
        <div className={styles.body}>
          <div className={styles.bodyTop}>Art Generator</div>
          <div className={styles.bodyMain}>
            <div className={styles.left}>
              <div className={styles.part1}>
                <div>Layer 1</div>
                <button>+</button>
              </div>
              <div className={styles.part2}>
                <div>Layer 2</div>
                <button>+</button>
              </div>
              <div className={styles.part3}>
                <button>+</button>
              </div>
            </div>
            <div className={styles.center}>
              <div className={styles.quote}></div>
              <div className={styles.tapGroup}>
                <div className={styles.setTap}>
                  <button>PREVIEW</button>
                  <button> MAKE GIF</button>
                  <button>Generate</button>
                </div>
                <div className={styles.actTap}>
                  <div className={styles.btnFunc}>
                    <div>
                      <span>How many NFT...</span>
                    </div>
                    <div className={styles.leftTap}>
                      <button>UPLOAD</button>
                      <button>UPDATE</button>
                    </div>
                  </div>
                  <div className={styles.btnDown}>
                    <button>DOWNLOAD</button>
                  </div>
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
                <button>Project Name</button>
              </div>

              <div>
                <button>Website Name</button>
              </div>

              <div>
                <button>Project Description</button>
              </div>

              <div>
                <button>Base uri</button>
              </div>

              <div>
                <span>DIMENSIONS</span>
              </div>

              <div className={styles.xy}>
                <span>X</span>
                <span>Y</span>
              </div>

              <div>
                <span>image Rarity</span>
              </div>

              <div className={styles.traitState}>
                <div>
                  <span>25%</span>
                  <span>Trait 1</span>
                  <Slider
                    aria-label="time-indicator"
                    size="small"
                    min={0}
                    step={1}
                    value={20}
                    sx={{
                      width: "35%",
                      color: "white",
                    }}
                  />
                </div>
                <div>
                  <span>25%</span>
                  <span>Trait 2</span>
                  <Slider
                    aria-label="time-indicator"
                    size="small"
                    min={0}
                    step={1}
                    value={40}
                    sx={{
                      width: "35%",
                      color: "white",
                    }}
                  />
                </div>
                <div>
                  <span>20%</span>
                  <span>Trait 3</span>
                  <Slider
                    aria-label="time-indicator"
                    size="small"
                    min={0}
                    step={1}
                    value={15}
                    sx={{
                      width: "35%",
                      color: "white",
                    }}
                  />
                </div>
                <div>
                  <span>20%</span>
                  <span>Trait 4</span>
                  <Slider
                    aria-label="time-indicator"
                    size="small"
                    min={0}
                    step={1}
                    value={35}
                    sx={{
                      width: "35%",
                      color: "white",
                    }}
                  />
                </div>
                <div>
                  <span>10%</span>
                  <span>Trait 5</span>
                  <Slider
                    aria-label="time-indicator"
                    size="small"
                    min={0}
                    step={1}
                    value={40}
                    sx={{
                      width: "35%",
                      color: "white",
                    }}
                  />
                </div>
              </div>
              <div className={styles.chainState}>
                <div className={styles.chain1}>
                  <div className={styles.chainTitle}>Ethereum</div>
                  <FormControlLabel
                    style={{ margin: 0 }}
                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  />
                  <span className={styles.chainTitle}>Solana</span>
                </div>
                <div className={styles.chain2}>
                  <span className={styles.chainTitle}>IPFS</span>
                  <FormControlLabel
                    style={{ margin: 0 }}
                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  />
                  <span className={styles.chainTitle}>Arweave</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
