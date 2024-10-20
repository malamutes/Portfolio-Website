import React from 'react'
import './AboutMeIntroduction.css'
import DropdownBox from './DropdownBox/DropdownBox'
import SkillsCard from './DropdownBox/SkillsCard'
import { SkillsNew } from '../../Data/SkillsData'
import { ContactLinks } from '../../Data/ContactLinks'

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

    return (
        <div className="AboutMeIntroductionContainer">
            <div className="IntroductionContainer">
                <h3>{Introduction}</h3>
                <div className="PhotoContainer"></div>
                <div style={{
                    position: "absolute", top: "42.5%", left: "5%", backgroundColor: "green",
                    width: "50%", height: "50%", display: "grid", placeItems: "center"
                }}>
                    {Object.keys(skillsData).map((skillset, index) =>
                    (<div key={skillset} style={{
                        transform: `rotate(${index * 360 / 15}deg) translate(${Math.log(index * 2.5) * 3.5}cqw)`
                    }}
                        className="SkillsCardContainer">
                        <SkillsCard iconUrl={skillsData[skillset]} name={skillset} />
                    </div>
                    ))}
                </div>

            </div>

            <div className="BackgroundContainer">
                <span style={{ fontSize: "1cqw" }}>Address
                    <p>Marmion Street, Booragoon, 6154, WA, Australia</p>
                    Phone Number <br />
                    <p>(+61) 452 389 408</p>
                </span>

                Email
                <ul style={{ fontSize: '0.9cqw', listStyleType: 'none', padding: '0' }}>
                    <li>
                        {contactLinksData.CurtinEmail}
                    </li>
                    <li>
                        {contactLinksData.Gmail}
                    </li>
                </ul>
                <a href={contactLinksData.Artstation} target="_blank"><span style={{ fontSize: "1cqw" }}>Artstation</span></a> <br />
                <a href={contactLinksData.Github} target="_blank"><span style={{ fontSize: "1cqw" }}>Github</span></a> <br />
                <a href={contactLinksData.Linkedln} target="_blank"><span style={{ fontSize: "1cqw" }}>LinkedIn</span></a> <br />
                <a href="public\PaulVan_CV.pdf" target="_blank"><span style={{ fontSize: "1cqw" }}>Resume</span></a>

            </div>
        </div>
    )
}

/*       */