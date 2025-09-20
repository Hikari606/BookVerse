import React, { useEffect, useState } from "react";

function AboutUs({ lang }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // الانميشن 
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1
        className={`text-4xl font-bold font-sans mb-4 transform transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {lang === "EN" ? "About Us" : "من نحن"}
      </h1>
      <p
        className={`text-lg font-bold font-sans mb-2 transform transition-all duration-1000 delay-200 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {lang === "EN"
          ? "Welcome to BookVerse! Our mission is to connect readers with their favorite books and make reading more fun and accessible."
          : "مرحباً بك في بوك فيرس! هدفنا هو ربط القراء بكتبهم المفضلة وجعل القراءة أكثر متعة وسهولة."}
      </p>
    </div>
  );
}

export default AboutUs;
