import { useEffect, useState } from 'react'
import './Education.css'
import { useRef } from 'react';
import { EducationImages } from '../../Data/EducationImages';
import CurtinEducationDescription from './EducationDescription';
import { AXHSEducationDescription } from './EducationDescription';
import ImageSwapHoverCurtin from './ImageSwapHover';
import { ImageSwapHoverAXHS } from './ImageSwapHover';


export default function Education() {
    const [isScrollPast, setIsScrollPast] = useState(false);
    const curtinContainerRef = useRef<HTMLDivElement>(null);
    const educationImages = EducationImages;

    useEffect(() => {
        const toggleSetIsScrollPast = () => {
            if (curtinContainerRef.current != null) {
                const threshold = window.innerWidth * 9 / 10;
                const curtinContainerRect = curtinContainerRef.current.getBoundingClientRect();
                if (threshold - curtinContainerRect.bottom >= 0) {
                    console.log("ADASIDIOj");
                    setIsScrollPast(true);
                }
            }

        }

        if (isScrollPast === false) {
            window.addEventListener('scroll', toggleSetIsScrollPast);
        }


        return () => {
            window.removeEventListener('scroll', toggleSetIsScrollPast);
        }

    }, [/* empty array so it only runs once per initial render*/])


    const ImageHoverStyleCurtin = "ImageSwapHoverStyleCurtin";
    const ImageHoverStyleAXHS = "ImageSwapHoverStyleAXHS";

    return (
        <div id="EducationID" className="DefaultMainContainer EducationContainer">
            <div className={`SchoolCommonStyles CurtinContainer ${isScrollPast ? "Expanded" : ""}`} id="CurtinContainer" ref={curtinContainerRef}>
                <ImageSwapHoverCurtin width="1000px" aspectRatio="1" img1={educationImages[2]}
                    img2={educationImages[3]} className={ImageHoverStyleCurtin} />

                <CurtinEducationDescription />
            </div>

            <div className={`SchoolCommonStyles AXHSContainer ${isScrollPast ? "Expanded" : ""}`}>
                <ImageSwapHoverAXHS width="1000px" aspectRatio="1" img1={educationImages[0]}
                    img2={educationImages[1]} className={ImageHoverStyleAXHS} />
                <AXHSEducationDescription />
            </div>
        </div>

    )
}


/* 

    
            */
