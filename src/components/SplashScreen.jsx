import React, { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timerFade = setTimeout(() => setFade(true), 2500); //  يبدأ
    const timerFinish = setTimeout(onFinish, 3000); //  ينتهي
    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerFinish);
    };
  }, [onFinish]);

  const stars = Array.from({ length: 50 }, () => ({
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
    size: Math.random() * 2 + 1 + "px",
    duration: Math.random() * 5 + 2 + "s",
  }));

  return (
    <div
      className={`fixed inset-0 bg-[#436078] flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.duration}s infinite alternate`,
          }}
        />
      ))}

      <div className="text-center z-10">
        <h1 className="text-5xl font-bold text-white animate-pulse">BookVerse</h1>
        <p className="text-white mt-2 text-lg">Explore, Read, Enjoy</p>
      </div>

      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
            100% { opacity: 0.2; transform: scale(0.8); }
          }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;
