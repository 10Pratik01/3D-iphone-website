import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Model = () => {
    useGSAP(()=>{
        gsap.to('heading', {
            y:0, opacity:1
        })
    },[]); 

    return(
        <section className="sm:py-32 py-20 sm:px-10 px-5">
            <div className="screen-max-width">
                <h1 id="heading" className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20">Take a closer look</h1>
            </div>
        </section>
    )
}

export default Model 