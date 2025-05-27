import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from "../utils"
import { useEffect, useState } from "react"

const Hero = () => {
    const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoSrcSet = () => {
        if(window.innerWidth < 750){
            setvideoSrc(smallHeroVideo)
        }else {
            setvideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet); 
        return () =>{
            window.removeEventListener('resize', handleVideoSrcSet)
        } 
    },[])

    useGSAP(()=>{
        gsap.to('#hero', {
            opacity:1, 
            delay:1.5, 
        })
        gsap.to('#cta', {
            opacity: 1, 
            y:-20,
            delay:2.3
        })
    }, [])


    return (
        <section className="w-full h-[calc(100vh-60px)] bg-black relative">
                <div className="h-5/6 w-full  flex items-center justify-center flex-col">
                    <p id="hero" className="text-center font-semibold text-3xl text-gray-300 opacity-0 max-md:mb-10 ">iPhone 15 pro</p>

                    <div className="md:w-10/12 w-9/12">
                        <video autoPlay muted playsInline={true} key={videoSrc} className="pointer-events-none">
                            <source src={videoSrc}  type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div id="cta" 
                className="flex flex-col items-center opacity-0 translate-y-30">
                    <a href="#highlights" className="btn_padding_x  rounded-3xl bg-blue-500 my-5 hover:bg-transparent border border-transparent hover:border hover:text-blue-500 hover:border-blue-500"> Buy </a>
                    <p>From $199/Month or $999</p>
                </div>
        </section>
    )
}

export default Hero