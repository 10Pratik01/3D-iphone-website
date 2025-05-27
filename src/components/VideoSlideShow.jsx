import React from "react";
import { hightlightsSlides } from "../constants";
import { useEffect, useState, useRef } from "react";
import { pauseImg, playImg, replayImg } from "../utils";

const VideoSlideShow = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

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

  const handleProcess = (type, i) => {
    switch(type) {
        case 'video-end':
            setVideo((pre) => ({...pre, isEnd:true, videoId: i+1}))
            break; 
        case 'video-last':
            setVideo((pre)=> ({...pre, isLastVideo:true}))
            break;
        case 'video-reset':
            setVideo((pre) => ({...pre, isEnd:false , videoId:0, isLastVideo:false}))
            break; 
        case "play":
            setVideo((pre) => ({...pre, isPlaying:!pre.isPlaying }))
            break; 
        default: 
            break; 
    }
  }

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
            <div className="flex items-center justify-center py-5 px-5 bg-zinc-700 backdrop-blur rounded-full ">
                {videoRef.current.map((_,i) => (
                    <span
                        key={i}
                        ref={(el) => (videoRef.current[i] = el )}
                        className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
                    >
                        <span 
                        className="absolute h-full w-full rounded-full" 
                        ref={(el) => (videoSpanRef.current[i] = el)}
                        />
                    </span>
                ))}
            </div>
            <button className="ml-4 p-4 rounded-full bg-zinc-700 backdrop-blur flex items-center justify-center">
                <img src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg} alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'} 
                onClick={isLastVideo ? () => handleProcess('video-reset') : !isPlaying ? handleProcess('play') : handleProcess('pause') }
                />
            </button>
      </div>
    </>
  );
};

export default VideoSlideShow;
