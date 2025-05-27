import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ModelView from "./ModelView";
import { useRef, useState } from "react";
import { yellowImg } from "../utils";

const Model = () => {

    const [size, setSize] = useState('small')
    const [model, setModel]= useState({
        title: 'iPhone 15 Pro in Natural Titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img:yellowImg, 
    })

    //Camera control for the model view 
    const CameraControlSmall = useRef() 
    const CameraControlLarge = useRef()

    const small = useRef(new THREE.Group())



    useGSAP(()=>{
        gsap.to('#heading', {
            y:0, opacity:1
        })
    },[]); 

    return(
        <section className="sm:py-32 py-20 sm:px-10 px-5">
            <div className="screem-max-width ">
                <h1 id="heading" className="text-gray-500 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20">Take a closer look.</h1>
                <div className="flex flex-col items-center mt-5">
                    <div className="w-full h-[75vh] md:h=[90vh] overflow-hidden relative">
                        <ModelView/> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Model 