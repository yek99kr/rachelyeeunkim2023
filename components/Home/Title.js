import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Title = () => {
  const { title, updateTitle } = useContext(AppContext);
  // updateTitle(1);
  // console.log(title);
  return (
    <>
      <div
        className="select-none title"
        onClick={() => {
          if (title < 20) {
            updateTitle(title + 1);
          } else {
            updateTitle(1);
          }
        }}
      >
        <img
          className={`title ${
            title === 1 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[75vw] md:w-[500px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-125%] md:translate-y-[-120%]`}
          src="/title/googleRachel.png"
        ></img>

        <img
          className={`title ${
            title === 2 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[60vw] md:w-[460px] self-center left-1/2 top-1/2 -translate-x-[52.5%] translate-y-[-120%] md:translate-y-[-113%]`}
          src="/title/hollywoodRachel.png"
        ></img>
        <img
          className={`title ${
            title === 3 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[80vw] md:w-[580px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-120%] md:translate-y-[-115%]`}
          src="/title/clayRachel.png"
        ></img>

        <img
          className={`title ${
            title === 4 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[55vw] md:w-[350px] self-center left-1/2 top-1/2 -translate-x-[49%] translate-y-[-210%] md:translate-y-[-195%]`}
          src="/title/emojiRachel.png"
        ></img>

        <img
          className={`title ${
            title === 5 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[60vw] md:w-[420px] self-center left-1/2 top-1/2 -translate-x-[50%] rotate-[-0deg] translate-y-[-170%] md:translate-y-[-155%]`}
          src="/title/markerRachel.gif"
        ></img>

        <img
          className={`transition-[0.4s] title ${
            title === 6 ? "block" : "hidden"
          } absolute active:scale-90 cursor-pointer w-[80vw] md:w-[580px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-130%] md:translate-y-[-125%]`}
          src="/title/spongeRachel.png"
        ></img>

        <img
          className={`title ${
            title === 7 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[60vw] md:w-[420px] self-center left-1/2 top-1/2 -translate-x-[50%] rotate-[-0deg] translate-y-[-140%] md:translate-y-[-130%]`}
          src="/title/milkRachel.png"
        ></img>

        <img
          className={`title ${
            title === 8 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[80vw] md:w-[580px] self-center left-1/2 top-1/2 -translate-x-[45%] rotate-[-0deg] translate-y-[-130%] md:translate-y-[-125%]`}
          src="/title/cloudRachel.png"
        ></img>

        <img
          className={`title ${
            title === 9 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[55vw] md:w-[400px] self-center left-1/2 top-1/2 -translate-x-[50%] rotate-[-0deg] translate-y-[-125%] md:translate-y-[-117%]`}
          src="/title/comicRachel.png"
        ></img>

        <img
          className={`title ${
            title === 10 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[88vw] sm:w-[600px] md:w-[700px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-140%] sm:translate-y-[-145%] md:translate-y-[-130%]`}
          src="/title/cursiveRachel.png"
        ></img>

        <img
          className={`title ${
            title === 11 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[80vw] md:w-[600px] self-center left-1/2 top-1/2 -translate-x-[50%] rotate-[-0deg] translate-y-[-120%] md:translate-y-[-115%]`}
          src="/title/fireRachel.gif"
        ></img>

        <img
          className={`title ${
            title === 12 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[85vw] md:w-[700px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-135%] md:translate-y-[-125%]`}
          src="/title/breadRachel2.png"
        ></img>

        <img
          className={`title ${
            title === 13 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[80vw] md:w-[550px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-120%] md:translate-y-[-115%]`}
          src="/title/teleRachel.png"
        ></img>

        <div
          onClick={() => {
            console.log("hello");
          }}
          className={`title ${
            title === 14 ? "block" : "hidden"
          } pointer-events-auto absolute active:scale-90 transition-[0.2s] cursor-pointer w-[70vw] md:w-[510px] self-center left-1/2 top-1/2 -translate-x-[50%] rotate-[-0deg] translate-y-[-105%] md:translate-y-[-100%] aspect-video`}
        >
          <iframe
            className="pointer-events-none w-full h-full"
            src={
              "//player.vimeo.com/video/811880264?h=fd382ca39a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?loop=1&background=1&autoplay=1&muted=1&controls=0&quality=1080p"
            }
            // allowFulScreen
            // frameBorder="0"
          ></iframe>
        </div>

        <img
          className={`title ${
            title === 15 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[80vw] md:w-[550px] self-center left-1/2 top-1/2 -translate-x-[48%] rotate-[-0deg] translate-y-[-115%] md:translate-y-[-110%]`}
          src="/title/graffitiRachel.png"
        ></img>

        <img
          className={`title ${
            title === 16 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[50vw] md:w-[380px] self-center left-1/2 top-1/2 -translate-x-[50%] rotate-[-0deg] translate-y-[-130%] md:translate-y-[-120%]`}
          src="/title/alarmRachel.gif"
        ></img>

        <img
          className={`title ${
            title === 17 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[80vw] md:w-[580px] self-center left-1/2 top-1/2 -translate-x-[50%] rotate-[-0deg] translate-y-[-135%] md:translate-y-[-130%]`}
          src="/title/eggRachel.gif"
        ></img>

        <img
          className={`title ${
            title === 18 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[75vw] md:w-[500px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-140%] md:translate-y-[-135%]`}
          src="/title/logoRachel.png"
        ></img>

        <img
          onClick={() => {
            document.querySelector(".drawingRachel").play();
          }}
          className={`title ${
            title === 19 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[75vw] md:w-[500px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-150%] md:translate-y-[-155%]`}
          src="/title/asciiRachel.png"
        ></img>

        {/* <img
          className={`title ${
            title === 18 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[75vw] md:w-[500px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-138%] md:translate-y-[-130%]`}
          src="/title/asciiRachel2.png"
        ></img> */}

        {/* <img
          className={`title ${
            title === 20 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[30vw] md:w-[190px] self-center left-1/2 top-1/2 -translate-x-[50%] rotate-[-0deg] translate-y-[-125%] md:translate-y-[-120%]`}
          src="/title/ringRachel.png"
        ></img>

        <img
          onClick={() => {
            document.querySelector(".drawingRachel").play();
          }}
          className={`title ${
            title === 21 ? "block" : "hidden"
          } absolute active:scale-90 transition-[0.2s] cursor-pointer w-[80vw] md:w-[550px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-130%] md:translate-y-[-125%]`}
          src="/title/filledRachel.png"
        ></img> */}

        <div
          onClick={() => {
            const video = document.querySelector(".drawingRachel");
            video.pause();
            video.currentTime = 0;
          }}
          className={`title ${
            title === 20 ? "block" : "hidden"
          } pointer-events-auto absolute active:scale-90 transition-[0.2s] cursor-pointer w-[70vw] md:w-[510px] self-center left-1/2 top-1/2 -translate-x-[50%] rotate-[-0deg] translate-y-[-102%] md:translate-y-[-100%] aspect-video`}
        >
          <video
            playsInline
            muted
            controlsList="nofullscreen"
            style={{ pointerEvents: "none" }}
            className="title drawingRachel pointer-events-none w-full h-full"
            src="/title/drawingRachel.mp4"
          ></video>
        </div>
      </div>
      {/* <div className="absolute w-[90vw] sm:w-[40vw] self-center h-[30vw] sm:h-[12vw] bg-gray-300 left-1/2 top-1/2 -translate-x-1/2 translate-y-[-120%]"></div> */}
    </>
  );
};

export default Title;
