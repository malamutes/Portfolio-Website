import './Websites.css'
import { useRef } from 'react';
import checkScrollPosition from '../CommonLogicStyles/CheckScrollPosition';

export default function WebsiteCarousel() {
    const indicatorStyle: React.CSSProperties = {
        backgroundColor: 'purple'
    }

    const carouselRef = useRef<HTMLDivElement>(null);
    const scrollPast = checkScrollPosition((9 / 10), carouselRef)

    return (
        <div id="carouselExampleControls" className="carousel slide CarouselContainer" data-bs-ride="carousel" ref={carouselRef}>
            <div className={`carousel-indicators CommonTransformations ${scrollPast ? "CarouselIndicatorSlide" : ""}`} id='CarouselIndicator'>
                <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></a>
                <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></a>
                <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3" ></a>
            </div>
            <div className={`carousel-inner CommonTransformations ${scrollPast ? "CarouselInnerSlide" : ""}`}>
                <div style={{ backgroundColor: 'red' }} className="carousel-item CarouselItem">

                </div>
                <div style={{ backgroundColor: 'blue' }} className="carousel-item CarouselItem">

                </div>
                <div style={{ backgroundColor: 'cyan' }} className="carousel-item active CarouselItem">

                </div>
            </div>
            <a className={`carousel-control-prev CommonTransformations ${scrollPast ? "CarouselPrevSlide" : ""}`} href="#carouselExampleControls" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className={`carousel-control-next CommonTransformations ${scrollPast ? "CarouselNextSlide" : ""}`} href="#carouselExampleControls" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>

    );
}

