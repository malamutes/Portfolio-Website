import './Artwork.css'
import checkScrollPosition from '../CommonLogicStyles/CheckScrollPosition';
import { useRef, useState, useEffect } from 'react';
import { ArtworkVideos, ArtworkVideosTitle, ArtworkVideosIcon, ArtworkVideosIconHue, ArtworkVideoColor } from '../../Data/ArtworkData';
import ContainerTitle from '../CommonLogicStyles/ContainerTitle';

export default function ArtworkContainer() {

    const artworkCardRef = useRef<HTMLDivElement>(null);
    const scrollPast = checkScrollPosition((9 / 10), artworkCardRef)
    const vid = ArtworkVideos;
    const vidTitle = ArtworkVideosTitle;
    const icon = ArtworkVideosIcon;
    const hue = ArtworkVideosIconHue;
    const col = ArtworkVideoColor

    const [title, setTitle] = useState(vidTitle["Crownless"]);
    const [video, setVideo] = useState(vid["Crownless"]);
    const [color, setColor] = useState('blue')

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current != null) {
            videoRef.current.load();
        }
    }, [video]);

    function handleClick(text: string) {
        setTitle(vidTitle[text]);
        setVideo(vid[text])
        setColor(col[text])
    }

    //need to do onMouseEnter and handleMouseEnter in more detail
    const handleMouseEnter = (hue: string, event: React.MouseEvent<HTMLImageElement>) => {
        (event.currentTarget as HTMLElement).style.setProperty('--hue-rotate', hue);
    };

    return (
        <div ref={artworkCardRef}>
            <ContainerTitle active={scrollPast} title='ARTWORK' left='-45cqw' top='5%' color='blue' />
            <div className={`ImageContainer CommonTransformations ${scrollPast ? "ImageContainerSlide" : ""}`}>
                <video style={{ border: `0.25cqw double ${color}` }} ref={videoRef} autoPlay muted loop id="ArtworkVideo">
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
                <span className='ArtworkTitle'>{title}</span>
            </div>
        </div >
    );
}