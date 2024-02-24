/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./App.css";
import video from "./assets/slava-dancing.mp4";
import Slavatar from "./assets/slavatar.png";
import BarbieSlav from "./assets/barbie-slav.png";
import slavaDisapproves from "./assets/slava-disapproves.png";
import slavaApproves from "./assets/slava-approves.png";
import slavaLikes from "./assets/slava-likes.png";
import SlavaCarousel from "./components/SlavaCarousel";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const disableMusic = (e: any) => {
    e.preventDefault();
    const video = document.querySelector("video");

    if (video) {
      video.muted = true;
    }
  };

  const enableMusic = (e: any) => {
    e.preventDefault();
    const video = document.querySelector("video");

    if (video) {
      video.muted = false;
    }
  };

  const handleSlavaVent = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
    enableMusic(e);
  };

  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      setIsModalOpen(false);
      disableMusic(e);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.addEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="bg-black main-container">
      <header className="slava-head base-container">
        <h2 className="hidden md:inline">The man, the myth, the legend</h2>
        <img src={Slavatar} alt="Slavatar" className="rotating" />
        <h1>
          <a href="/">UNCLESLAV.COM</a>
        </h1>
        <img src={Slavatar} alt="Slavatar" className="rotating backwards" />
        <h2 className="hidden md:inline">The man, the myth, the legend</h2>
      </header>

      <div className="max-w-[1250px] m-auto flex flex-wrap md:flex-nowrap mt-100 slava-news-feed mt-8">
        <div className="left-muscle md:mr-10">
          <p className="news-title">📰 Uncle In The News</p>
          <ul>
            <li>
              Breaking: Uncle Slav Bench Presses the Server Rack to Optimize
              Data Center Space – Efficiency at Its Peak!
            </li>
            <li>
              Exclusive: Uncle Slav's Secret to Unbreakable Code? A Strict Diet
              of Legos and Protein Shakes!
            </li>
            <li>
              Alert: Uncle Slav's Dance Moves Now a Mandatory Programming
              Language at Tech Giants – 'If You Can't Dance, You Can't Code!
            </li>
            <li>
              Revealed: How Uncle Slav Coded an AI to Sort His Lego Collection –
              And It's Now Running the Company!
            </li>
            <li>
              Innovation or Madness? Uncle Slav Launches 'CodeFit' – The First
              Coding Bootcamp Where You Squat to Debug!
            </li>
          </ul>
        </div>
        <div className="right-muscle mt-10 w-full md:mt-[-20px]">
          <img src={BarbieSlav} alt="BarbieSlav" />
        </div>
      </div>

      <div className="slava-facts w-full md:w-fit m-auto mt-24">
        <p className="news-title">💥 Top Uncle Slava Facts 💥</p>
        <ul className="w-full md:w-[960px]">
          <li className="w-full md:w-[960px]">
            Uncle Slav doesn’t need github. He keeps the entire code in his mind
          </li>
          <li className="w-full md:w-[960px]">
            Uncle Slava's code once had a race condition. The code lost.
          </li>
          <li className="w-full md:w-[960px]">
            Uncle Slav's hair is so majestic, it has its own CSS class that
            can't be overridden.
          </li>
          <li className="w-full md:w-[960px]">
            Uncle Slav doesn’t use recursion; his hair loops infinitely without
            causing a stack overflow.
          </li>
          <li className="w-full md:w-[960px]">
            Uncle Slav can refactor legacy code with a flick of his hair,
            turning spaghetti code into a well-organized masterpiece.
          </li>
          <li className="w-full md:w-[960px]">
            Uncle Slav's keyboard doesn't have a backspace because Uncle Slav
            never makes mistakes.
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center text-white mt-12 w-screen h-98">
        <SlavaCarousel />
      </div>

      <div className="h-48 flex items-center text-white mt-[-300px] md:mt-0">
        <div className="w-full text-center">
          <h1 className="text-5xl">Happy Birthday Uncle Slav! 🎉</h1>
          <p className="text-lg mt-10">
            <a
              href="#"
              onClick={handleSlavaVent}
              style={{ color: "rgba(0, 187, 153, 1)" }}
            >
              Click here
            </a>{" "}
            and enjoy the show!
          </p>
        </div>
      </div>

      <div
        className={`bg-white modal-dancing w-screen ${
          isModalOpen ? "open" : "closed"
        }`}
      >
        <video loop autoPlay muted className="w-screen">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="md:flex sm:base-container justify-between items-center text-white md:px-10">
        <img src={slavaDisapproves} alt="Slava Disapproves" />

        <img src={slavaApproves} alt="Slava Happy" />

        <img src={slavaLikes} alt="Slava Likes" />
      </div>

      <div className="h-40 base-container items-center text-white">
        <div className="w-full text-center p-10">
          <h1 className="text-3xl">Thank you for all! We 💚 you</h1>
        </div>
      </div>

      <header className="slava-head base-container">
        <h2 className="hidden md:inline">The man, the myth, the legend</h2>
        <img src={Slavatar} alt="Slavatar" className="rotating" />
        <h1>
          <a href="/">UNCLESLAV.COM</a>
        </h1>
        <img src={Slavatar} alt="Slavatar" className="rotating backwards" />
        <h2 className="hidden md:inline">The man, the myth, the legend</h2>
      </header>
    </div>
  );
}

export default App;
