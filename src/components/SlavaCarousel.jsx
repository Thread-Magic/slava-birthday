import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slavaMark from "../assets/slava-mark.jpg";
import slavaDaniels from "../assets/slava-daniels.jpg"
import slavaWindows from "../assets/slava-windows.jpg"
import slavaOcean from "../assets/slava-ocean.jpg"
import slavaBowling from "../assets/slava-bowling.jpg"
import slavaDresscode from "../assets/slav-dresscode.jpg"
import slavaFilm from "../assets/slava-film.jpg"

const styles = {
    slavaWrapper: {
        display: 'flex',
        margin: '50px auto 20px auto',
        width: 500
    },
    img: {
        with: 500,
        height: 500
    },
    p: {
        position: 'absolute',
        top: 0,
        marginLeft: 10,
        fontWeight: 'bold',
        bacgroundColor: 'red',
        color: '#fafafa',
        fontSize: 25
    }
}

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
                    <p style={styles.p}>Slava Mark</p>
                </div>
                <div>
                    <img src={slavaDaniels} />
                    <p style={styles.p}>Slava Daniels</p>
                </div>
                <div>
                    <img src={slavaWindows} />
                    <p style={styles.p}>Slava Windows</p>
                </div>
                <div>
                    <img src={slavaOcean} />
                    <p style={styles.p}>Slava Ocean</p>
                </div>
                <div>
                    <img src={slavaBowling} />
                    <p style={styles.p}>Slava Bowling</p>
                </div>
                <div>
                    <img src={slavaDresscode} />
                    <p style={styles.p}>Slava Dresscode</p>
                </div>
                <div>
                    <img src={slavaFilm} />
                    <p style={styles.p}>Slava Productions</p>
                </div>
            </Carousel>
        </div>
    );
}
