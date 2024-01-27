import "./App.css";
import video from "./assets/slava-dancing.mp4";
import slavaDisapproves from "./assets/slava-disapproves.png";
import slavaApproves from "./assets/slava-approves.png";
import slavaLikes from "./assets/slava-likes.png";

function App() {
  const enableMusic = (e: any) => {
    e.preventDefault();
    const video = document.querySelector("video");

    if (video) {
      video.muted = false;
    }
  };

  return (
    <div className="bg-black">
      <div className="h-48 flex items-center text-white">
        <div className="w-full text-center">
          <h1 className="text-5xl">Happy Birthday Uncle Slav! 🎉</h1>
          <p className="text-lg mt-10">
            <a href="#" onClick={enableMusic}>
              Enable the great music
            </a>{" "}
            and enjoy the show!
          </p>
        </div>
      </div>
      <div className="bg-white">
        <video loop autoPlay muted className="w-screen">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex items-center text-white mt-12">
        <div className="w-full text-center py-40 px-60 pb-10">
          <h1 className="text-4xl">You are important to us! 🫶🏻</h1>
          <br />

          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tellus diam, dapibus ut finibus ac, porttitor at nulla. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed tortor velit,
            dapibus nec pharetra et, congue pharetra ipsum. Maecenas condimentum
            feugiat purus, et eleifend sem commodo at. Nunc quis nibh purus.
            Praesent in efficitur elit. Ut lacus enim, euismod in aliquam eu,
            luctus ut nunc. Phasellus hendrerit ullamcorper est at euismod. Ut
            pharetra convallis libero, ut auctor massa imperdiet in. Sed eget
            iaculis est. Etiam feugiat sagittis semper. Vestibulum finibus
            tortor dolor, a iaculis nisl laoreet sit amet. Integer consectetur
            lectus non convallis eleifend. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Suspendisse
            dignissim tellus vulputate ante imperdiet placerat. Morbi vitae mi
            porta quam rhoncus vehicula. Fusce aliquam vitae turpis id tempus.
            Donec vel ligula pulvinar, ultrices orci ac, vestibulum neque.
            Vestibulum ornare sem eu nulla pharetra pharetra. Maecenas vel
            euismod magna.
          </p>
        </div>
      </div>
      <div className="flex items-center text-white mt-12">
        <img src={slavaDisapproves} alt="Slava Disapproves" />
        <img src={slavaApproves} alt="Slava Happy" />
        <img src={slavaLikes} alt="Slava Likes" />
      </div>
      <div className="h-40 flex items-center text-white">
        <div className="w-full text-center">
          <h1 className="text-3xl">Thank you for all! We 💚 you</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
