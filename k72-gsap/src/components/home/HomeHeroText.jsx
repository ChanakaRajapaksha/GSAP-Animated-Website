import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Video from "./Video";

const HomeHeroText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay to start after background video animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Start after video animation completes

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      filter: "blur(10px)"
    },
    visible: { 
      y: 0, 
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const middleLineVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      filter: "blur(10px)"
    },
    visible: { 
      y: 0, 
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div 
      className="font-[font1] mt-72 lg:mt-0 pt-8 text-center"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div 
        className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[7vw] leading-[10vw]"
        variants={textVariants}
      >
        L'étincelle
      </motion.div>
      
      <motion.div 
        className="lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[11vw] leading-[10vw]"
        variants={middleLineVariants}
      >
        qui
        <motion.div 
          className="h-[7vw] w-[16vw] rounded-full mt-6 overflow-hidden"
          initial={{ scale: 0, rotate: -180 }}
          animate={isVisible ? { 
            scale: 1, 
            rotate: 0,
            transition: {
              duration: 1.5,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          } : { scale: 0, rotate: -180 }}
        >
          <Video />
        </motion.div>
        génère
      </motion.div>
      
      <motion.div 
        className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[5vw] leading-[10vw]"
        variants={textVariants}
      >
        la créativité
      </motion.div>
    </motion.div>
  );
};

export default HomeHeroText;
