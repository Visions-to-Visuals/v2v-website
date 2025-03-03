function initCanvas() {
    const canvas1 = document.getElementById("canvas1");
    if (!canvas1) return;
    
    const ctx1 = canvas1.getContext("2d");
    if (!ctx1) return;

    const STAR_DENSITY = 5 * 10e7;
    const GRAVITATIONAL_CONSTANT = 2e-10;
  
    const getStarCount = () => Math.floor(window.innerWidth / 35);
    let STAR_COUNT = getStarCount();
    const MAX_STAR_RADIUS = 10;
    const MIN_STAR_RADIUS = 1;
    const MAX_STAR_VELOCITY = 1.25;
    const MIN_STAR_VELOCITY = -1.25;
    const COMET_SPEED = 2.5;
    const MAX_COMET_RADIUS = 4;
    const COMET_FRICTION = 0.995;
    const TAIL_LENGTH_FACTOR = 8;
    const STAR_RADIUS_CAP = 15;
    const TAIL_FALLOFF_SPEED = 0.15;
    const maxTailLength = 80;
    const TRAIL_POINTS = 12;
    const TRAIL_OPACITY_DECAY = 0.92;

    let stars = [];
    let top = 0;
  
    function random(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    function randomLow(min, max, lambda = 5) {
      const u = Math.random();
      const randomValue = -Math.log(1 - u) / lambda;
      const scaledValue = Math.floor(randomValue * (max - min + 1));
      return Math.min(scaledValue, max - min) + min;
    }
  
    function distanceBetweenStars(star1, star2) {
      const dx = star2.x - star1.x;
      const dy = star2.y - star1.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  
    function mergeStars(star1, star2) {
      const totalMass = star1.radius ** 3 + star2.radius ** 3;
      const totalMomentumX = star1.vx * star1.radius ** 3 + star2.vx * star2.radius ** 3;
      const totalMomentumY = star1.vy * star1.radius ** 3 + star2.vy * star2.radius ** 3;
  
      const mergedRadius = Math.cbrt(totalMass);
  
      const largerStar = star1.radius >= star2.radius ? star1 : star2;
      const smallerStar = star1 === largerStar ? star2 : star1;
  
      star1.radius = mergedRadius;
      star1.vx = totalMomentumX / mergedRadius ** 3;
      star1.vy = totalMomentumY / mergedRadius ** 3;
      star1.x = largerStar.x;
      star1.y = largerStar.y;
  
      if (star1.radius >= MAX_STAR_RADIUS / 2) {
        star1.isFront = false;
      }

      if (star1.radius >= STAR_RADIUS_CAP) {
        star1.radius = STAR_RADIUS_CAP;
      }
  
      stars = stars.filter(star => star !== smallerStar);
      addNewStar();
    }
  
    function addNewStar() {
      if (stars.length > STAR_COUNT) return;
  
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
  
      switch (side) {
        case 0:
          x = random(0, canvas1.width);
          y = -20;
          vx = random(MIN_STAR_VELOCITY, MAX_STAR_VELOCITY);
          vy = random(0, MAX_STAR_VELOCITY);
          break;
        case 1:
          x = canvas1.width + 20;
          y = random(0, canvas1.height);
          vx = random(MIN_STAR_VELOCITY, 0);
          vy = random(MIN_STAR_VELOCITY, MAX_STAR_VELOCITY);
          break;
        case 2:
          x = random(0, canvas1.width);
          y = canvas1.height + 20;
          vx = random(MIN_STAR_VELOCITY, MAX_STAR_VELOCITY);
          vy = random(MIN_STAR_VELOCITY, 0);
          break;
        case 3:
          x = -20;
          y = random(0, canvas1.height);
          vx = random(0, MAX_STAR_VELOCITY);
          vy = random(MIN_STAR_VELOCITY, MAX_STAR_VELOCITY);
          break;
      }
  
      stars.push({
        x,
        y,
        radius: Math.max(randomLow(MIN_STAR_RADIUS, MAX_STAR_RADIUS), randomLow(MIN_STAR_RADIUS, MAX_STAR_RADIUS)),
        vx,
        vy,
        tailLength: 0,
        trail: [], // Array to store previous positions
        trailOpacities: [] // Array to store opacity for each trail point
      });
    }
  
    function createStars() {
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: random(0, canvas1.width),
          y: random(0, canvas1.height),
          radius: randomLow(MIN_STAR_RADIUS, MAX_STAR_RADIUS),
          vx: random(MIN_STAR_VELOCITY, MAX_STAR_VELOCITY),
          vy: random(MIN_STAR_VELOCITY, MAX_STAR_VELOCITY),
          trail: [],
          trailOpacities: []
        });
      }
    }
  
    function drawStars() {
      ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  
      stars.forEach(star => {
        ctx1.beginPath();
        ctx1.arc(star.x, star.y - top, star.radius, 0, Math.PI * 2);
        ctx1.fillStyle = "black"
        ctx1.fill();
        ctx1.closePath();
      });
    }
  
    function updateStars() {
      stars.forEach(star => {
        // Update trail before updating position
        if (star.trail.length >= TRAIL_POINTS) {
          star.trail.pop();
          star.trailOpacities.pop();
        }
        star.trail.unshift({ x: star.x, y: star.y });
        star.trailOpacities.unshift(1);

        // Update trail opacities
        star.trailOpacities = star.trailOpacities.map(opacity => opacity * TRAIL_OPACITY_DECAY);

        star.x += star.vx;
        star.y += star.vy;
  
        if (star.x < -100 || star.x > canvas1.width + 100 || star.y < -100 || star.y > canvas1.height + 100) {
          stars = stars.filter(s => s !== star);
          addNewStar();
        }
  
        const m1 = (4 / 3) * Math.PI * Math.pow(star.radius, 3) * STAR_DENSITY;
        stars.forEach(otherStar => {
          if (star !== otherStar) {
            const r = distanceBetweenStars(star, otherStar);
            const m2 = (4 / 3) * Math.PI * Math.pow(otherStar.radius, 3) * STAR_DENSITY;
            const F = (GRAVITATIONAL_CONSTANT * (m1 * m2)) / r ** 2;
            star.vx += (F * (otherStar.x - star.x)) / r / m1;
            star.vy += (F * (otherStar.y - star.y)) / r / m1;
          }
        });
      });
  
      stars.forEach(star => {
        stars.forEach(otherStar => {
          if (star !== otherStar) {
            const r = distanceBetweenStars(star, otherStar);
            const combinedRadius = star.radius + otherStar.radius;
  
            if (r <= combinedRadius && !star.merging && !otherStar.merging) {
              mergeStars(star, otherStar);
              star.merging = true;
            }
          }
        });
      });
  
      stars.forEach(star => {
        star.merging = false;
        const speed = Math.sqrt(star.vx ** 2 + star.vy ** 2);
  
        if (speed > COMET_SPEED - 0.25) {
          star.vx *= COMET_FRICTION;
          star.vy *= COMET_FRICTION;
        }
  
        if (speed > COMET_SPEED * 5) {
          star.vx *= 0.7;
          star.vy *= 0.7;
        }
  
        if (speed > COMET_SPEED && star.radius <= MAX_COMET_RADIUS) {
          star.tailLength = speed * TAIL_LENGTH_FACTOR + 3;

          // Draw the trail
          if (star.trail.length > 1) {
            ctx1.beginPath();
            ctx1.moveTo(star.trail[0].x, star.trail[0].y - top);
            
            for (let i = 1; i < star.trail.length; i++) {
              const point = star.trail[i];
              const opacity = star.trailOpacities[i];
              
              if (i === 1) {
                ctx1.lineTo(point.x, point.y - top);
              } else {
                const prevPoint = star.trail[i - 1];
                const xc = (prevPoint.x + point.x) / 2;
                const yc = (prevPoint.y + point.y) / 2;
                ctx1.quadraticCurveTo(prevPoint.x, prevPoint.y - top, xc, yc - top);
              }
            }

            const gradient = ctx1.createLinearGradient(
              star.trail[0].x,
              star.trail[0].y - top,
              star.trail[star.trail.length - 1].x,
              star.trail[star.trail.length - 1].y - top
            );

            gradient.addColorStop(0, "rgba(255, 165, 0, 0.8)");
            gradient.addColorStop(0.3, "rgba(255, 69, 0, 0.6)");
            gradient.addColorStop(0.6, "rgba(255, 0, 0, 0.4)");
            gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

            ctx1.strokeStyle = gradient;
            ctx1.lineWidth = star.radius * 1.5;
            ctx1.lineCap = 'round';
            ctx1.lineJoin = 'round';
            ctx1.stroke();
          }
        }
      });
    }
  
    function animate() {
      drawStars();
      updateStars();
      requestAnimationFrame(animate);
    }
  
    function handleResize() {
        const oldHeight = canvas1.height;
        const oldWidth = canvas1.width;
        
        // Update star count based on new width
        STAR_COUNT = getStarCount();
        
        // Adjust number of stars if needed
        while (stars.length < STAR_COUNT) {
            addNewStar();
        }
        while (stars.length > STAR_COUNT) {
            stars.pop();
        }

        // Adjust star positions if canvas size changed significantly
        if (Math.abs(oldHeight - canvas1.height) > 50 || Math.abs(oldWidth - canvas1.width) > 50) {
            stars.forEach(star => {
                // Keep stars in relative positions
                star.x = (star.x / oldWidth) * canvas1.width;
                star.y = (star.y / oldHeight) * canvas1.height;
                
                // Clear trails as they might be invalid in new dimensions
                star.trail = [];
                star.trailOpacities = [];
            });
        }
    }
  
    // Add resize listener
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);

    // Start animation
    createStars();
    animate();

    // Return cleanup function
    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleResize);
    };
}

// Try to initialize immediately if document is already loaded
if (document.readyState === 'complete') {
    initCanvas();
} else {
    // Otherwise wait for DOM content to load
    document.addEventListener("DOMContentLoaded", initCanvas);
}

// Backup initialization in case the canvas takes longer to be available
setTimeout(initCanvas, 100);
  