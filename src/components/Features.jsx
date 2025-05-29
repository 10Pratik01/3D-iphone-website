import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animatewithGsap } from '../utils/animation';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger); 

const Features = () => {
    const videoRef = useRef()

  useGSAP(() => {
    animatewithGsap("#features_title", { y: 0, opacity: 1 });
    // animatewithGsap(".g_grow", {scale:1, y:0, opacity:1, ease:'power1'}, {scrub:5.5})
    gsap.to('.g_grow', {
        scale:1, 
        opacity:1, 
        ease:'power1',
        scrollTrigger:{
            trigger:".g_grow",
            start:"top 90%",
            scrub:5.5,
        }
    })
  }, []);
  return (
    <section className="h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1
            id="features_title"
            className="text-gray-700 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5
          font-medium opacity-0 translate-y-20"
          >
            Explore the full story.
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center overflow-hidden">
        <div className="mt-32 mb-24 pl-24 ">
          <h2 className="text-5xl lg:test-7xl font-semibold">iPhone.</h2>
          <h2 className="text-5xl lg:test-7xl font-semibold">
            Forged in titanium.{" "}
          </h2>
        </div>

        <div className="flex items-center justify-center flex-col sm:px-10">
          <div className="relative h-[50vh] w-full flex items-center">
            <video
              playsInline
              id="exploreVideo"
              className="w-full h-full object-cover object-center"
              preload="none"
              muted
              autoPlay
              ref={videoRef}
            >
              <source src={exploreVideo} type="video/mp4" />
            </video>
            </div>
            
            <div className="flex flex-col w-full relative ">
                <div className="w-full flex flex-col md:flex-row gap-5 items-center">
                    <div className="overflow-hidden flex-1 h-[15vh] ">
                        <img src={explore1Img} alt="titanium" className="w-full h-full object-cover object-center scale-150 opacity-0 g_grow" />
                    </div>
                    <div className="overflow-hidden flex-1 h-[15vh] ">
                        <img src={explore2Img} alt="titanium" className="w-full h-full object-cover object-center scale-150 opacity-0 g_grow" />
                    </div>
                </div>  
            </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
