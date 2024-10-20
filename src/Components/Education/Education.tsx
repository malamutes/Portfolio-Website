import { useEffect, useState } from 'react'
import './Education.css'
import { useRef } from 'react';
import { EducationImages } from '../../Data/EducationImages';
import CurtinEducationDescription from './EducationDescription';
import { AXHSEducationDescription } from './EducationDescription';
import ImageSwapHoverCurtin from './ImageSwapHover';
import { ImageSwapHoverAXHS } from './ImageSwapHover';
import checkScrollPosition from '../CommonLogicStyles/CheckScrollPosition';


export default function Education() {
    const curtinContainerRef = useRef<HTMLDivElement>(null);
    const educationImages = EducationImages;


    const scrollPast = checkScrollPosition((9 / 10), curtinContainerRef)


    const ImageHoverStyle = "ImageSwapHoverStyle";


    return (
        <div id="EducationID" className="DefaultMainContainer EducationContainer">
            <div className={`SchoolCommonStyles CurtinContainer ${scrollPast ? "Expanded" : ""}`} id="CurtinContainer" ref={curtinContainerRef}>
                <ImageSwapHoverCurtin width="80%" aspectRatio="1" img1={educationImages[2]}
                    img2={educationImages[3]} className={ImageHoverStyle} />

                <CurtinEducationDescription />

            </div>

            <div className={`SchoolCommonStyles AXHSContainer ${scrollPast ? "Expanded" : ""}`}>
                <ImageSwapHoverAXHS width="80%" aspectRatio="1" img1={educationImages[0]}
                    img2={educationImages[1]} className={ImageHoverStyle} />

                <AXHSEducationDescription />
            </div>

        </div>

    )
}


/*    

                        
 */

