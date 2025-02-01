import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const words = "Frontend Developer, Mobile App Developer";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(words.substring(0, index));

      if (!reverse) {
        if (index < words.length) {
          setIndex((prev) => prev + 1);
        } else {
          setReverse(true);
        }
      } else {
        if (index > 0) {
          setIndex((prev) => prev - 1);
        } else {
          setReverse(false);
        }
      }
    }, 50); // Adjust speed here

    return () => clearInterval(interval);
  }, [index, reverse]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915efe]" /> {/* Circle */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-blue-600">Mulugeta</span>
          </h1>

          {/* Typing effect text */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a passionate <span className="text-blue-400">{displayText}</span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
