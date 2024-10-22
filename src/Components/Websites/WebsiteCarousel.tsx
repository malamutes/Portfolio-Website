import './Websites.css'

export default function WebsiteCarousel() {
    const indicatorStyle: React.CSSProperties = {
        width: '1cqw',
        height: '1cqw',
        borderRadius: '50%'
    }

    return (<div id="carouselExampleControls" className="carousel slide CarouselContainer" data-bs-ride="carousel">
        <div className='carousel-indicators '>
            <a style={indicatorStyle} type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></a>
            <a style={indicatorStyle} type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></a>
            <a style={indicatorStyle} type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3" ></a>
        </div>
        <div className="carousel-inner">
            <div style={{ backgroundColor: 'red' }} className="carousel-item CarouselItem">

            </div>
            <div style={{ backgroundColor: 'blue' }} className="carousel-item CarouselItem">

            </div>
            <div style={{ backgroundColor: 'cyan' }} className="carousel-item active CarouselItem">

            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
    </div>

    );
}

