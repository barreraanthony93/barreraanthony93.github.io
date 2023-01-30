const animePhoneBack = {
    rest: {  
      y: 230,
      x: 30,
      ease: "easeOut", 
      duration: 0.4, 
      type: "tween" 
    },
    hover: { 
      y: 80,
      x: 30,
      rotate: 15,
      originX: "50%", 
      originY: '100%',
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
        rotate: {
          delay: 0.4
        }
      }
    }
  } 
  const animePhoneFront = {
    rest: {  
      y: 230,
      x: 30,
      ease: "easeOut", 
      duration: 0.4, 
      type: "tween" 
    },
    hover: { 
      y: 80,
      x: 30,
      rotate: -15,
      originX: "50%", 
      originY: '100%',
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
        rotate: {
          delay: 0.4
        }
      }
    }
  }

  export { animePhoneBack, animePhoneFront}