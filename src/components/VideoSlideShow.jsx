import React from "react";
import { hightlightsSlides } from "../constants";
import { useEffect, useState, useRef } from "react";

const VideoSlideShow = () => {
  const videoRef = useRef([]);
  const videoSpanRed = useRef([]);
  const videoDivRed = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setloadedData] = useState([]);
  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useEffect(()=>{
    if(loadedData.length > 3){
        if(!isPlaying){
            videoRef.current[videoId].pause(); 
        }else{
            startPlay && videoRef.current[videoId].play()
        }
    }
  },[startPlay, videoId, isPlaying, loadedData])

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div className="sm:pr-20 pr-10" id="slider" key={list.id}>
            <div className="relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]">
              <div className="w-full h-full flex items-center justify-center rounded-3xl overflow-hidden bg-black">
                <video
                id="video"
                playsInline={true}
                preload="auto"
                muted
                ref={(e) =>(videoRef.current[i] = e)}
                onPlay = {() =>{
                    setVideo((prevVideo)=>({
                        ...prevVideo, isPlaying: true 
                    }))
                }}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10 ">
                {list.textLists.map((text) => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-10 flex items-center justify-center">
            <div>
                
            </div>
      </div>
    </>
  );
};

export default VideoSlideShow;
