import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Video = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount (page load/refresh)
    setIsLoaded(true);
  }, []);

  return (
    <div className="h-full w-full relative overflow-hidden">
      {/* Animated overlay for smooth transition */}
      <motion.div
        className="absolute inset-0 z-10 bg-black"
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: isLoaded ? 0 : 1,
          scale: isLoaded ? 1.1 : 1
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
      />
      
      {/* Video with entrance animation */}
      <motion.div
        className="h-full w-full"
        initial={{ 
          scale: 1.1, 
          opacity: 0,
          filter: "blur(10px)"
        }}
        animate={{ 
          scale: isLoaded ? 1 : 1.1,
          opacity: isLoaded ? 1 : 0,
          filter: isLoaded ? "blur(0px)" : "blur(10px)"
        }}
        transition={{ 
          duration: 1.5, 
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="../../../public/hero.mp4"
          onLoadedData={() => setIsLoaded(true)}
        />
      </motion.div>

      {/* Subtle gradient overlay for depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 2, delay: 0.8 }}
      />
    </div>
  );
};

export default Video;
