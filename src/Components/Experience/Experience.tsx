import './Experience.css'
import ExperienceCard from './ExperienceCard';
import checkScrollPosition from '../CommonLogicStyles/CheckScrollPosition';
import { useRef } from 'react';
import { ExperienceData } from '../../Data/ExperienceData';
import ContainerTitle from '../CommonLogicStyles/ContainerTitle';

export default function Experience() {
    const experienceCardRef = useRef<HTMLDivElement>(null);
    const scrollPast = checkScrollPosition((9 / 10), experienceCardRef)
    const experienceData = ExperienceData;

    return (<div id="ExperienceID" className="DefaultMainContainer ExperienceContainer"
        ref={experienceCardRef}>
        <ContainerTitle active={scrollPast} title='EXPERIENCE' top='-2%' left='-52.5cqw' color='green' />
        <ExperienceCard classname={`TopCard ${scrollPast ? "TopCardSlide" : ""}`}
            title={Object.keys(experienceData)[0]} experience={experienceData[Object.keys(experienceData)[0]]} />
        <ExperienceCard classname={`MiddleCard ${scrollPast ? "MiddleCardSlide" : ""}`}
            title={Object.keys(experienceData)[1]} experience={experienceData[Object.keys(experienceData)[1]]} />
        <ExperienceCard classname={`BottomCard ${scrollPast ? "BottomCardSlide" : ""}`}
            title={Object.keys(experienceData)[2]} experience={experienceData[Object.keys(experienceData)[2]]} />
    </div>
    );
}
