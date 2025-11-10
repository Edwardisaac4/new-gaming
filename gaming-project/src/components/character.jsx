const Character = () => {
  return (
    <div className="mb-[10%] w-full h-screen overflow-hidden relative">
      <div className="relative text-center z-10 pt-4">
        <h1
          className="font-bold tracking-widest text-5xl md:-mb-14 mb-8"
          style={{ textShadow: "0 0 13px rgba(255, 255, 255, 0.7)" }}
        >
          FIGHTERS
        </h1>
      </div>

      <div className="relative z-10 w-full h-full items-center md:flex-row flex-col p-4">
        <div className="w-full md:w-2/4 flex flex-col md:ml-10">
          {/* Character details can be added here */}

          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-800 ">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
