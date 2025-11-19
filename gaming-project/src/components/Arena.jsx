import 'boxicons/css/boxicons.min.css';

const Arena = () => {
  return (
    <div className="md:min-h-[90%] p-4 lg:p-8 md:mt-0 mt-16">
      <div className="relative pt-5 text-center z-10 mb-8 md:mb-12" >
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest"
          style={{ textShadow: "0 0 13px rgba(255, 255, 255, 0.7)" }}
        >
          ARENA
        </h1>
      </div>

      <div className="lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1
        md:grid-cols-3 gap-4 md:gap-6
      ">
        
        <div className="md:col-span-1 space-y-4 md:space-y-6">
          <div className="rounded-3xl overflow-hidden border-white border relative hover:scale-105 transition-transform duration-500 aspect-[4.4/4]">
            <div className="h-full w-full absolute inset-0">
              <img src="images/bento-card1.png" alt="NFT Store promotional card" className="w-full h-full object-cover" />

              <button className='absolute bottom-0 w-full bg-black bg-opacity-50 text-white transition-all duration-400 
                hover:text-amber-600 h-16 text-nowrap text-2xl font-bold '>
                <i class='bx bx-store'></i> NFT STORE
              </button>
            </div>
          </div>

          <div className='relative overflow-hidden rounded-3xl border border-white aspect-[4.5/4] transform transition-transform duration-450 hover:scale-105'>
            <video src="videos/bento-card2.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover"></video>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-500
              hover:scale-105  
            '>
              <video src="videos/bento-card3.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover">
              </video>
                <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 font-extrabold text-2xl z-10'>
                  SCORIOX
                </h1>
            </div>

            <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-500
              hover:scale-105  
            '>
              <video src="videos/bento-card4.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover">
              </video>
                <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 font-extrabold text-2xl z-10'>
                  Floralnyx
                </h1>
            </div>

            <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-500
              hover:scale-105  
            '>
              <video src="videos/bento-card5.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover">
              </video>
                <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 font-extrabold text-2xl z-10'>
                  Titanor
                </h1>
            </div>
          </div>


          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[16/9] md:col-span-2 transform transition-transform duration-500
            hover:scale-[1.03]
          ">
            <img src="images/bento-card5.png" alt="Promotional card for buying now" className="w-full h-full object-cover" />

            <button className='absolute bottom-0 w-full bg-black bg-opacity-50 text-white transition-all duration-400 
                hover:text-amber-600 h-16 text-nowrap text-2xl font-bold
            '>
              <i class='bx bx-link-external'></i> BUY NOW
            </button>
          </div>
        
      </div>
    </div>
  </div>  
  )
}

export default Arena