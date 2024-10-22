import './Artwork.css'
import checkScrollPosition from '../CommonLogicStyles/CheckScrollPosition';
import { useRef, useState, useEffect } from 'react';
import { ArtworkVideos, ArtworkVideosTitle, ArtworkVideosIcon, ArtworkVideosIconHue } from '../../Data/ArtworkData';


export default function ArtworkContainer() {

    const artworkCardRef = useRef<HTMLDivElement>(null);
    const scrollPast = checkScrollPosition((9 / 10), artworkCardRef)
    const vid = ArtworkVideos;
    const vidTitle = ArtworkVideosTitle;
    const icon = ArtworkVideosIcon;
    const hue = ArtworkVideosIconHue;

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

    //need to do onMouseEnter and handleMouseEnter in more detail
    const handleMouseEnter = (hue: string, event: React.MouseEvent<HTMLImageElement>) => {
        (event.currentTarget as HTMLElement).style.setProperty('--hue-rotate', hue);
    };

    return (
        <div ref={artworkCardRef}>
            <div className={`ImageContainer CommonTransformations ${scrollPast ? "ImageContainerSlide" : ""}`}>
                <video ref={videoRef} autoPlay muted loop id="ArtworkVideo">
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
            <div className={`IconContainer CommonTransformations ${scrollPast ? "IconContainerSlide" : ""}`}>
                <div style={{ position: 'relative', top: '25%' }} className="row">
                    {Object.keys(vid).map((artwork) => (<div key={artwork} style={{ display: 'grid', placeItems: 'center' }}
                        className="col"><img
                            onMouseEnter={(event) => handleMouseEnter(hue[artwork], event)}
                            onClick={() => handleClick(artwork)} src={icon[artwork]} id="ArtworkVideoIcon" />
                    </div>))}
                </div>
            </div>
            <div className={`NameContainer CommonTransformations ${scrollPast ? "NameContainerSlide" : ""}`}>
                <span style={{
                    position: 'relative', top: '60%', fontSize: "2cqw",
                    fontWeight: '900', width: "50%", textAlign: 'center', height: 'fit-content'
                }}>{title}</span>
            </div>
        </div >
    );
}