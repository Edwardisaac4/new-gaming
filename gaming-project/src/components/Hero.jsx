import { useRef, useEffect } from 'react';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        // Apply a parallax effect by translating the video at a slower rate than the scroll
        const scrollY = window.scrollY;
        videoRef.current.style.transform = `translateY(${scrollY * 0.7}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="relative mb-[10%] w-full h-screen overflow-hidden flex justify-center">
      <video
        ref={videoRef}
        src="videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-[110%] object-cover -top-[5%] left-0 -z-10"
      ></video>

      <div className="absolute flex-col flex items-center gap-5 bottom-[15%]">
        <img src="images/illu-text.png" alt="" className="md:w-120 w-[20rem]" />

        <h1 className="font-bold md:text-2xl text-1xl">
          Explore, Capture, Conquer
        </h1>

        <div className="md:w-[75%] h-[0.1px] w-[60%] bg-[#baba]"></div>

        <button
          className="h-10 px-16 bg-linear-to-r from bg-purple-500 to rounded-lg font-medium text-nowrap hover:from-purple-600 hover:to-indigo-700 text-white
          transition-colors duration-300 cursor-pointer"
        >
          Play Now
        </button>

        <div className="flex gap-5 text-3xl items-center font-extrabold text-gray-200">
            <img src="images/illu-logo.png" alt="" className="md:h-16 h-12"/> ZERO
        </div>

        <p className="text-center max-w-[80%] text-[#babaff]">
            Notice: This is a demo gaming website created for educational purposes only. All game content, images, and videos are used under fair use policy and belong to their respective owners.
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 lg:right-24 right-5 flex flex-col items-center">
        <div className="relative w-6 h-10">
          <div className="scroll-arrows"></div>
        </div>
        <p className="text-[#babaff] mt-2 text-sm sm:block hidden">Scroll Down</p>
      </div>
    </main>
  );
}

export default Hero