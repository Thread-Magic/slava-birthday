import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slavaMark from "../assets/slava-mark.jpg";
import slavaDaniels from "../assets/slava-daniels.jpg";
import slavaWindows from "../assets/slava-windows.jpg";
import slavaOcean from "../assets/slava-ocean.jpg";
import slavaBowling from "../assets/slava-bowling.jpg";
import slavaDresscode from "../assets/slav-dresscode.jpg";
import slavaFilm from "../assets/slava-film.jpg";
import slavaVogue from "../assets/slava-vogue.jpg";
import slavatar from "../assets/slavatar-2.png";
import slavaTicket from "../assets/slava-ticket.jpg";
import slavationArmy from "../assets/slavation-army.png";
import slavaLamp from "../assets/slava-lamp.png";
import slavaGroup from "../assets/slava-group.jpg";
import bakslava from "../assets/bakslava.jpg";
import slavaDrunk from "../assets/slava-drunk.jpg";
import slavaChair from "../assets/slava-chair.jpg";
import slavaHam from "../assets/slava-ham.jpg";
import slavaSinger from "../assets/slava-singer.jpg";
import slavaIron from "../assets/slava-iron.jpg";
import slava1 from "../assets/slava-1.jpg";
import slava2 from "../assets/slava-2.jpg";
import slava3 from "../assets/slava-3.jpg";
import slava4 from "../assets/slava-4.jpg";
import slava5 from "../assets/slava-5.jpg";
import slava6 from "../assets/slava-6.jpg";
import slava7 from "../assets/slava-7.jpg";
import slava8 from "../assets/slava-8.jpg";
import slava9 from "../assets/slava-9.jpg";
import slava10 from "../assets/slava-10.jpg";

const styles = {
  slavaWrapper: {
    width: "100%",
    overflow: "hidden",
    height: 800,
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
        centerSlidePercentage={40}
        centerMode
      >
        <div>
          <img src={slavaVogue} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava Vogue
          </p>
        </div>
        <div>
          <img src={slavatar} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slavatar
          </p>
        </div>
        <div>
          <img src={slavationArmy} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slavation Army
          </p>
        </div>
        <div>
          <img src={slavaLamp} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava Lamp
          </p>
        </div>
        <div>
          <img src={bakslava} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Bakslava
          </p>
        </div>
        <div>
          <img src={slavaMark} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
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
              fontSize: 16,
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
              fontSize: 16,
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
              fontSize: 16,
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
              fontSize: 16,
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
              fontSize: 16,
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
              fontSize: 16,
            }}
          >
            Slava Productions
          </p>
        </div>
        <div>
          <img src={slavaTicket} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava Ticket
          </p>
        </div>
        <div>
          <img src={slavaGroup} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slav, Slav & Slava
          </p>
        </div>
        <div>
          <img src={slavaDrunk} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava Ticket and Beer
          </p>
        </div>
        <div>
          <img src={slavaChair} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava & chair
          </p>
        </div>
        <div>
          <img src={slavaHam} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava & Ham
          </p>
        </div>
        <div>
          <img src={slavaSinger} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava Singer
          </p>
        </div>
        <div>
          <img src={slavaIron} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava Iron
          </p>
        </div>
        <div>
          <img src={slava1} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava
          </p>
        </div>
        <div>
          <img src={slava2} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava
          </p>
        </div>
        <div>
          <img src={slava3} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava
          </p>
        </div>
        <div>
          <img src={slava4} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava
          </p>
        </div>
        <div>
          <img src={slava5} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava
          </p>
        </div>
        <div>
          <img src={slava6} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava
          </p>
        </div>
        <div>
          <img src={slava7} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava
          </p>
        </div>
        <div>
          <img src={slava8} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava
          </p>
        </div>
        <div>
          <img src={slava9} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Slava
          </p>
        </div>
        <div>
          <img src={slava10} />
          <p
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#fafafa",
              fontSize: 16,
            }}
          >
            Alone Slava
          </p>
        </div>
      </Carousel>
    </div>
  );
}
