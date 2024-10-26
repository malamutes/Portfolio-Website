import React from 'react'
import './AboutMeIntroduction.css'
import DropdownBox from './DropdownBox/DropdownBox'
import SkillsCard from './DropdownBox/SkillsCard'
import { SkillsNew } from '../../Data/SkillsData'
import { ContactLinks } from '../../Data/ContactLinks'
import { useState, useEffect, useRef } from 'react'
import checkScrollPosition from '../CommonLogicStyles/CheckScrollPosition'

const Introduction = `
Hiya!
I'm a second-year student at Curtin University, 
pursuing a Bachelor of Advanced Science (Honours) majoring in Computing. 
My studies fuel my passion for technology and innovation. 
In my free time, I enjoy 3D sculpting and modelling, 
where I can express my creativity. 
`

export default function AboutMeIntroduction() {
    const skillsData = SkillsNew;
    const contactLinksData = ContactLinks;

    const [distance, setDistance] = useState(3.5);
    const [metric, setMetric] = useState('cqw');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 2000) {
                setDistance(525);
                setMetric('%');
                console.log("HELLO");
            } else {
                setDistance(3.5);
                setMetric('cqw');
                console.log("BYE");
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => { window.removeEventListener("resize", handleResize), console.log("HAHAR") };
    }, []);

    const [mount, setMount] = useState(false);

    //this is for initial render where im just using a hook to run after initial mount for auto anims on load
    useEffect(() => {
        setMount(true);

    }, []);

    return (
        <div className="AboutMeIntroductionContainer">
            <div className="IntroductionContainer">
                <h3 className={`${mount ? "IntroductionSlide" : ""}`}>{Introduction}</h3>
                <div className={`PhotoContainer ${mount ? "PhotoContainerSlide" : ""}`}>
                    <img style={{ maxWidth: '100%', height: 'auto' }}
                        src='https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk2NTM5ODY4NjY1MzU4MTQy/alaskan-malamute-right-dog-for-you.jpg'
                    />
                </div>
                <div style={{
                    position: "absolute", top: "47.5%", left: "5%", width: "50%",
                    height: "50%", display: "grid", placeItems: "center"
                }}>
                    {Object.keys(skillsData).map((skillset, index) =>
                    (<div key={skillset} className={`SkillsCardContainer ${mount ? "StartUpRotation" : ""}`} style={{
                        '--rotation': `${index * 360 / 15}deg`, '--translation': `${Math.log(index * 2.5) * distance}${metric}`
                    } as React.CSSProperties}>
                        <SkillsCard iconUrl={skillsData[skillset]} name={skillset} />
                    </div>
                    ))}
                </div>

            </div>

            <div className={`BackgroundContainer ${mount ? "BackgroundContainerSlide" : ""}`}>
                <span className='BackgroundFont'>Address
                    <p>Marmion Street, Booragoon, 6154, WA, Australia</p>
                    Phone Number <br />
                    <p>(+61) 452 389 408</p>
                </span>

                Email
                <ul style={{ listStyleType: 'none', padding: '0' }} className='BackgroundFont'>
                    <li>
                        {contactLinksData.CurtinEmail}
                    </li>
                    <li>
                        {contactLinksData.Gmail}
                    </li>
                </ul>
                <a href={contactLinksData.Artstation} target="_blank"><span className="BackgroundFont">Artstation</span></a> <br />
                <a href={contactLinksData.Github} target="_blank"><span className="BackgroundFont">Github</span></a> <br />
                <a href={contactLinksData.Linkedln} target="_blank"><span className="BackgroundFont">LinkedIn</span></a> <br />
                <a href="public\PaulVan_CV.pdf" target="_blank"><span className="BackgroundFont">Resume</span></a>

            </div>
        </div>
    )
}
