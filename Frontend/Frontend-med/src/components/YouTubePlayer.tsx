import React from 'react';

type Props= { 
    videoId:string

}

const YouTubePlayer = ({ videoId }:Props) => {
    return (
        <div className="youtube-player">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
               
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default YouTubePlayer;
