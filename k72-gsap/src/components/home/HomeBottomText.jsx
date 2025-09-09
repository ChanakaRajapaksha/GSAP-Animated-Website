import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeBottomText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay to start after hero text animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3500); // Start after hero text animation completes

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { 
      x: 100, 
      opacity: 0,
      filter: "blur(5px)"
    },
    visible: { 
      x: 0, 
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="font-[font2] flex items-center justify-center gap-4"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.p 
        className="absolute lg:w-[14vw] w-64 lg:right-8 right-0 bottom-28 lg:bottom-48 font-[font1] lg:text-sm text-xs lg:leading-[22px] leading-tight"
        variants={textVariants}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        K72 est une agence qui pense chaque action pour nourrir la marque.
        Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
        l'étincelle pour générer de l'émotion. Pour assurer une relation
        honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui
        doit être fait.
      </motion.p>
      
      <motion.div 
        className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-30 flex items-center px-6 pt-1 lg:px-14 border-white rounded-full uppercase"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Link className="text-[6vw] lg:mt-[1rem]" to="/projects">
          Projects
        </Link>
      </motion.div>
      
      <motion.div 
        className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-30 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Link className="text-[6vw] lg:mt-[1rem]" to="/agence">
          agence
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HomeBottomText;
