import { useEffect, useRef } from "react";

const VantaEffect = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const loadScripts = () => {
      return new Promise((resolve) => {
        // Load THREE.js and VANTA scripts
        const threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
        threeScript.async = true;
        threeScript.onload = () => {
          const vantaScript = document.createElement('script');
          vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
          vantaScript.async = true;
          vantaScript.onload = () => resolve();
          document.body.appendChild(vantaScript);
        };
        document.body.appendChild(threeScript);
      });
    };

    const initializeVanta = () => {
      if (window.VANTA) {
        vantaRef.current = window.VANTA.NET({
          el: "#vanta-container",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 20.00,
          minWidth: 20.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xffffff,
          backgroundColor: 0x000000
        });
      }
    };

    loadScripts().then(() => {
      initializeVanta();
    });

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
      }
    };
  }, []);

  return (
    <div id="vanta-container" className="w-full h-screen sm:h-[50vh] md:h-[75vh] lg:h-screen">
      <div className="flex justify-center items-center text-center h-full w-full">
        <div className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold">
          Business | Marketing | Web Development | SEO
        </div>
      </div>
    </div>
  );
};

export default VantaEffect;
