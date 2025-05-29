import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { animatewithGsap } from "../utils/animation";

gsap.registerPlugin(ScrollTrigger);

const Chip = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: 'top 80% '
      },
      opacity: 0,
      scale: 1.5,
      duration: 2,
      ease: 'power2.inOut'
    })

    // gsap.to(".g_fadeIn", {
    //   opacity: 1,
    //   y: 0,
    //   duration: 1,
    //   ease: "power2.inOut",
    //   scrollTrigger: {
    //     trigger: '.g_fadeIn',
    //     toggleActions: "restart, reverse, restart, reverse",
    //     start: "top 85%",
    //   },
    // });
    animatewithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="sm:py-20 py-16 sm:px-10 px-5">
      <div className="screen-max-width">
        <div
          id="chip"
          className="flex justify-center items-center w-full my-20"
        >
          <img src={chipImg} alt="Chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center`">
          <h2 className="text-4xl md:text-7xl font-semibold text-center">
            A17 Pro Chip.
            <br />A monster win for gaming
          </h2>

          <p className="text-gray-600 font-semibold text-xl md:text-2xl py-10 text-center">
            It's here. The biggest redesign in the history of Apple GPUs
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex items-center justify-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="absolute w-[95%] h-[90%] rounded-[56px] overflow-hidden">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                autoPlay
                muted
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray-600 font-semibold text-center mt-3 md:text-3xl">
            Hokai: star Rail
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-start gap-24">
          <div className="flex flex-1 justify-center flex-col">
            <p
              
              className="text-gray-700 text-xl font-normal mb:10 md:font-semibold g_fadeIn"
            >
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              {""}
              <span className="text-white">
                best graphic performance by far
              </span>{" "}
              .
            </p>

            <p
              
              className="text-gray-700 text-xl font-normal md:font-semibold g_fadeIn "
            >
              Mobile {""}
              <span className="text-white">
                games will look and feel so immersive
              </span>{" "}
              , with incredibly detailed environments and characters.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="text-gray-700 text-xl font-normal md:font-semibold">
              New
            </p>
            <p className="text-white text-3xl md:text-5xl font-normal md:font-semibold my-2">
              Pro-class GPU
            </p>
            <p className="text-gray-700 text-xl font-normal md:font-semibold">
              with 6 cores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chip;
