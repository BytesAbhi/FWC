import LandPageVid from "../assets/Videos/Landing Page Video.mp4";

const ActionBar = () => {
  return (
    <div className="py-12 px-24 -z-10" id="mainDiv">
      <h2 className="font-extrabold text-7xl mt-[4rem] ml-12">
        We Care for Your Brand
      </h2>
      <h3 className="font-bold text-7xl mt-8 mb-16 ml-12">
        Let's build Together
      </h3>
      <span className="w-full grid place-items-center pb-32 pt-24">
        <video
          autoPlay
          muted
          loop
          src={LandPageVid}
          className="w-[90%]"
          id="ScaleVid"
        />
      </span>
    </div>
  );
};

export default ActionBar;
