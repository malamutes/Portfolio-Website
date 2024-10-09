import { useEffect, useState } from 'react'
import './Education.css'
import { useRef } from 'react';

export default function Education() {
    const [isScrollPast, setIsScrollPast] = useState(false);
    const curtinContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const toggleSetIsScrollPast = () => {
            if (curtinContainerRef.current != null) {
                const threshold = window.innerWidth * 2 / 3;
                const curtinContainerRect = curtinContainerRef.current.getBoundingClientRect();
                if (threshold - curtinContainerRect.top >= 0) {
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

    return (<div id="EducationID" className="DefaultMainContainer EducationContainer">
        <div className={`CurtinContainer ${isScrollPast ? "Expanded" : ""}`} id="CurtinContainer" ref={curtinContainerRef}>

        </div>

        <div className={`AXHSContainer ${isScrollPast ? "Expanded" : ""}`}>

        </div>
    </div>)
}