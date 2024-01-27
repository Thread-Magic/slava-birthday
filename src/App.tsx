import "./App.css";
import video from "./assets/slava-dancing.mp4";
import slavaDisapproves from "./assets/slava-disapproves.png";
import slavaApproves from "./assets/slava-approves.png";
import slavaLikes from "./assets/slava-likes.png";

function App() {
  return (
    <>
      <div className="h-48 bg-black flex items-center text-white">
        <div className="w-full text-center">
          <h1 className="text-5xl">Happy Birthday Uncle Slav! 🎉</h1>
        </div>
      </div>
      <div className="bg-white">
        <div className="relative h-screen overflow-hidden">
          <video
            autoPlay
            loop
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="h-48 bg-black flex items-center text-white">
        <img src={slavaDisapproves} alt="Slava Disapproves" />
        <img src={slavaApproves} alt="Slava Happy" />
        <img src={slavaLikes} alt="Slava Likes" />
      </div>
      <div className="h-48 bg-black flex items-center text-white">
        <div className="w-full text-center">
          <h1 className="text-3xl">Thank you for all! We 💚 you</h1>
        </div>
      </div>
    </>
  );
}

export default App;
