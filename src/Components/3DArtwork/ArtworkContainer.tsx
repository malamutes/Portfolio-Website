import './Artwork.css'
import checkScrollPosition from '../CommonLogicStyles/CheckScrollPosition';
import { useRef, useState, useEffect } from 'react';
import { ArtworkVideos, ArtworkVideosTitle } from '../../Data/ArtworkData';

export default function ArtworkContainer() {

    const artworkCardRef = useRef<HTMLDivElement>(null);
    const scrollPast = checkScrollPosition((9 / 10), artworkCardRef)
    const vid = ArtworkVideos;
    const vidTitle = ArtworkVideosTitle;

    const [title, setTitle] = useState(vidTitle["Crownless"]);
    const [video, setVideo] = useState(vid["Crownless"]);

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current != null) {
            videoRef.current.load();
        }
    }, [video]);

    function handleClick(text: string) {
        setTitle(vidTitle[text]);
        setVideo(vid[text])
    }

    return (
        <div ref={artworkCardRef}>
            <div className={`ImageContainer CommonTransformations ${scrollPast ? "ImageContainerSlide" : ""}`}>
                <video ref={videoRef} autoPlay muted loop id="ArtworkVideo">
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
            <div className={`IconContainer CommonTransformations ${scrollPast ? "IconContainerSlide" : ""}`}>
                <div className="row">
                    {Object.keys(vid).map((artwork) => (<div key={artwork} className="col"><button onClick={() => handleClick(artwork)}>
                        {artwork}</button>
                    </div>))}
                </div>
            </div>
            <div className={`NameContainer CommonTransformations ${scrollPast ? "NameContainerSlide" : ""}`}>
                {title}
            </div>
        </div>
    );
}