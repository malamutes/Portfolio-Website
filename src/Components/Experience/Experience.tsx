import './Experience.css'
import ExperienceCard from './ExperienceCard';
import checkScrollPosition from '../CommonLogicStyles/CheckScrollPosition';
import { useRef } from 'react';

export default function Experience() {
    const experienceCardRef = useRef<HTMLDivElement>(null);
    const scrollPast = checkScrollPosition((9 / 10), experienceCardRef)

    return (<div id="ExperienceID" className="DefaultMainContainer ExperienceContainer"
        ref={experienceCardRef}>
        <ExperienceCard classname={`TopCard ${scrollPast ? "TopCardSlide" : ""}`} />
        <ExperienceCard classname={`MiddleCard ${scrollPast ? "MiddleCardSlide" : ""}`} />
        <ExperienceCard classname={`BottomCard ${scrollPast ? "BottomCardSlide" : ""}`} />
    </div>
    );
}
