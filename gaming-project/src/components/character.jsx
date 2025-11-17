import { useState } from "react";
import {Star} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from '@splinetool/react-spline';
const Character = () => {

    const [selectedCharacter, setSelectedCharacter] = useState('VIKI');

    const Avatar = {
        VIKI : {
            name: 'VIKI',
            power: 80,
            stable: 70,
            penetrate: 60,
            portable: 90,
            stars : 4,
            sceneUrl: 'https://prod.spline.design/9Tbo84-QV3wDr0ve/scene.splinecode'
    },

    EVA : {
        name: 'EVA',
        power: 90,
        stable: 80,
        penetrate: 80,
        portable: 90,
        stars : 5,
        sceneUrl: 'https://prod.spline.design/rA35ATvU6BTxoTbr/scene.splinecode'
    }
    }

    const currentAvatar = Avatar[selectedCharacter];

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

            <div className="relative z-10 w-full h-full items-center md:flex-row flex-col p-4 flex md:gap-4">
                <div className="w-full md:w-2/4 flex flex-col md:ml-10 md:shrink-0">
                    {/* Character details can be added here */}

                    <section
                        aria-labelledby="character-stats-heading"
                        className="bg-gray-900/80 backdrop-blur-md rounded-lg p-4 border border-gray-800 
                    shadow-[0_0_10px_rgba(167, 139, 277, 0.12)]
                    "
                    >
                        <h2 id="character-stats-heading" className="sr-only">
                            {currentAvatar.name} Statistics
                        </h2>
                        <div className="space-y-3 mb-16">
                            <div className="flex items-center">
                                <span id="power-label" className="text-gray-500 w-24">POWER</span>

                                <div className="flex-1 rounded-full overflow-hidden bg-gray-800 h-4 ">
                                    <div
                                        role="progressbar"
                                        aria-labelledby="power-label"
                                        aria-valuenow={currentAvatar.power}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        className="h-full bg-linear-to-r from-violet-700 to-white transition-all duration-500 ease-in-out" style={{width: `${currentAvatar.power}%`}}>
                                    </div>
                                </div>

                                <span className="ml-2">{currentAvatar.power}</span>
                            </div>

                            <div className="flex items-center">
                                <span id="stable-label" className="text-gray-500 w-24">STABLE</span>

                                <div className="flex-1 rounded-full overflow-hidden bg-gray-800 h-4 ">
                                    <div role="progressbar" aria-labelledby="stable-label" aria-valuenow={currentAvatar.stable} aria-valuemin="0" aria-valuemax="100" className="h-full bg-linear-to-r from-violet-700 to-white transition-all duration-500 ease-in-out" style={{width: `${currentAvatar.stable}%`}}></div>
                                </div>

                                <span className="ml-2">{currentAvatar.stable}</span>
                            </div>

                            <div className="flex items-center">
                                <span id="penetrate-label" className="text-gray-500 w-24">PENETRATE</span>

                                <div className="flex-1 rounded-full overflow-hidden bg-gray-800 h-4 ">
                                    <div role="progressbar" aria-labelledby="penetrate-label" aria-valuenow={currentAvatar.penetrate} aria-valuemin="0" aria-valuemax="100" className="h-full bg-linear-to-r from-violet-700 to-white transition-all duration-500 ease-in-out" style={{width: `${currentAvatar.penetrate}%`}}></div>
                                </div>

                                <span className="ml-2">{currentAvatar.penetrate}</span>
                            </div>

                            <div className="flex items-center">
                                <span id="portable-label" className="text-gray-500 w-24">PORTABLE</span>

                                <div className="flex-1 rounded-full overflow-hidden bg-gray-800 h-4 ">
                                    <div role="progressbar" aria-labelledby="portable-label" aria-valuenow={currentAvatar.portable} aria-valuemin="0" aria-valuemax="100" className="h-full bg-linear-to-r from-violet-700 to-white transition-all duration-500 ease-in-out" style={{width: `${currentAvatar.portable}%`}}></div>
                                </div>

                                <span className="ml-2">{currentAvatar.portable}</span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button className="bg-violet-500 px-4 py-1 text-white rounded-md font-semibold hover:bg-blue-600 focus:opacity-100 focus:ring-2 focus:ring-violet-300 opacity-45 transition-all duration-400">
                                PROFICIENT
                            </button>

                            <button className="bg-violet-500 px-4 py-1 text-white rounded-md font-semibold hover:bg-amber-600 focus:opacity-100 focus:ring-2 focus:ring-violet-300 opacity-45 transition-all duration-400">
                                REDEMPTION
                            </button>
                        </div>

                    </section>

                    <div className="grid grid-cols-2 gap-3 mt-3">
                        {Object.keys(Avatar).map((characterKey) => {
                            const character = Avatar[characterKey];
                            const isSelected = selectedCharacter === character.name;
                            return (
                                <button key={character.name}
                                    onClick={() => setSelectedCharacter(character.name)}
                                    aria-pressed={isSelected}
                                    aria-label={`Select character ${character.name}`}
                                    className={`relative lg:flex-row flex-col flex p-4 rounded-lg backdrop-blur-sm bg-gray-900/70 px-6 items-center justify-between border text-left transition-all duration-300 ${isSelected ? 'border-violet-500 shadow-[0_0_15px_rgba(167,139,277,0.5)]' : 'border-gray-700'}`}>
                                    <div className="mb-2 text-lg"> {character.name} </div>
                                    <div className="w-20 h-20 justify-center items-center mb-2 rounded-md flex bg-gray-800/65">
                                        <img src={`images/${character.name}.png`} alt={character.name} />
                                    </div>
                                    <div className="flex">
                                        {[...Array(character.stars)].map((_, index) => (
                                            <Star key={index} className="text-violet-500 w-5 h-5 fill-violet-600" />
                                        ))}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div
                    className="relative md:w-2/4 w-full grow md:h-full h-80 flex items-center justify-center overflow-hidden"
                >
                    <p className="sr-only">3D model of {currentAvatar.name}</p>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCharacter}
                            className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
                                selectedCharacter === 'EVA' ? 'lg:scale-100 scale-75' : 'scale-100'
                            }`}
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '-100%', opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <Spline scene={currentAvatar.sceneUrl} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            
            
            </div>
    );
};

export default Character;
