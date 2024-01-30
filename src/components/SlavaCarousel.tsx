import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slavaMark from "../assets/slava-mark.jpg";
import slavaDaniels from "../assets/slava-daniels.jpg";
import slavaWindows from "../assets/slava-windows.jpg";
import slavaOcean from "../assets/slava-ocean.jpg";
import slavaBowling from "../assets/slava-bowling.jpg";
import slavaDresscode from "../assets/slav-dresscode.jpg";
import slavaFilm from "../assets/slava-film.jpg";
import slavaVogue from "../assets/slava-vogue.png";

const styles = {
  slavaWrapper: {
    width: 500,
  },
  img: {
    with: 500,
    height: 500,
  },
};

export default function SlavaCarousel() {
  return (
    <div style={styles.slavaWrapper}>
      <Carousel
        showArrows
        showStatus
        showIndicators
        infiniteLoop={false}
        showThumbs
        useKeyboardArrows
        autoPlay={false}
        stopOnHover
        swipeable
        dynamicHeight
        emulateTouch
        autoFocus={false}
      >
        <div>
          <img src={slavaMark} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 25,
            }}
          >
            Slava Mark
          </p>
        </div>
        <div>
          <img src={slavaDaniels} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 25,
            }}
          >
            Slava Daniels
          </p>
        </div>
        <div>
          <img src={slavaWindows} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 25,
            }}
          >
            Slava Windows
          </p>
        </div>
        <div>
          <img src={slavaOcean} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 25,
            }}
          >
            Slava Ocean
          </p>
        </div>
        <div>
          <img src={slavaBowling} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 25,
            }}
          >
            Slava Bowling
          </p>
        </div>
        <div>
          <img src={slavaDresscode} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 25,
            }}
          >
            Slava Dresscode
          </p>
        </div>
        <div>
          <img src={slavaFilm} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 25,
            }}
          >
            Slava Productions
          </p>
        </div>
        <div>
          <img src={slavaVogue} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 25,
            }}
          >
            Slava Vogue
          </p>
        </div>
      </Carousel>
    </div>
  );
}
