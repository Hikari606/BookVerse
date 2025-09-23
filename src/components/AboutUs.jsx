import React, { useEffect, useState } from "react";

function AboutUs({ lang }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
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
        className={`text-lg font-semibold font-sans mb-2 transform transition-all duration-1000 delay-200 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {lang === "EN"
          ? "At BookVerse, we believe every book has a story to tell and every reader deserves a journey. Our mission is to bring the world of literature closer to you, making reading enjoyable, inspiring, and accessible to everyone."
          : "في بوك فيرس، نؤمن أن لكل كتاب قصة تستحق أن تُروى ولكل قارئ رحلة فريدة. هدفنا هو تقريب عالم الأدب إليك، وجعل القراءة ممتعة وملهمة وسهلة الوصول للجميع."}
      </p>
      <p
        className={`text-md font-medium font-sans mt-4 transform transition-all duration-1000 delay-400 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {lang === "EN"
          ? "Join our community, explore new titles, and dive into the magic of reading!"
          : "!انضم إلى مجتمعنا، استكشف عناوين جديدة، وانغمس في سحر القراءة "}
      </p>
    </div>
  );
}
export default AboutUs;
