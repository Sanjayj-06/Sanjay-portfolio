import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  // const [meteors, setMeteors] = useState([]);

  const handleStarInteraction = (starId) => {
    setStars(prevStars => 
      prevStars.map(star => 
        star.id === starId 
          ? { ...star, isJiggling: true }
          : star
      )
    );

    // Stop jiggling after animation completes
    setTimeout(() => {
      setStars(prevStars => 
        prevStars.map(star => 
          star.id === starId 
            ? { ...star, isJiggling: false }
            : star
        )
      );
    }, 500);
  };

  useEffect(() => {
    generateStars();
    // generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Skip stars in the hero section area (center area where content is)
      const isInHeroArea = (
        x > 20 && x < 80 && // horizontal center area
        y > 20 && y < 80    // vertical center area
      );
      
      if (!isInHeroArea) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 1,
          x: x,
          y: y,
          opacity: Math.random() * 0.5 + 0.5,
          animationDuration: Math.random() * 4 + 2,
          isJiggling: false,
        });
      }
    }

    setStars(newStars);
  };

  // const generateMeteors = () => {
  //   const numberOfMeteors = 4;
  //   const newMeteors = [];

  //   for (let i = 0; i < numberOfMeteors; i++) {
  //     const x = Math.random() * 100;
  //     const y = Math.random() * 100;
      
  //     // Skip meteors that would cross through the hero content area
  //     const wouldCrossHeroArea = (
  //       (x > 10 && x < 90) && // horizontal range that could cross content
  //       (y > 15 && y < 85)    // vertical range that could cross content
  //     );
      
  //     if (!wouldCrossHeroArea) {
  //       newMeteors.push({
  //         id: i,
  //         size: Math.random() * 2 + 1,
  //         x: x,
  //         y: y,
  //         delay: Math.random() * 15,
  //         animationDuration: Math.random() * 3 + 3,
  //       });
  //     }
  //   }

  //   setMeteors(newMeteors);
  // };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star animate-pulse-subtle cursor-pointer pointer-events-auto ${
            star.isJiggling ? 'animate-bounce' : ''
          }`}
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            transform: star.isJiggling ? 'scale(1.5)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
          onClick={() => handleStarInteraction(star.id)}
          onTouchStart={() => handleStarInteraction(star.id)}
        />
      ))}
    </div>
  );
};
