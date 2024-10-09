import React from 'react'
import './AboutMeIntroduction.css'
import DropdownBox from './DropdownBox/DropdownBox'
import ProgLangCard from './DropdownBox/ProgLangCard'
import { Skills } from '../../Data/SkillsData'
import { ContactLinks } from '../../Data/ContactLinks'

const Introduction = `
Hiya!
I'm a second-year student at Curtin University, 
pursuing a Bachelor of Advanced Science (Honours) majoring in Computing. 
My studies fuel my passion for technology and innovation. 
In my free time, I enjoy 3D sculpting using Blender, 
where I can express my creativity. 
`

export default function AboutMeIntroduction() {
    const skillsData = Skills;
    const contactLinksData = ContactLinks;
    const colorDebug = ['red', 'yellow', 'green'];

    return (
        <div className="AboutMeIntroductionContainer">
            <div className="container IntroductionContainer">
                <h3>{Introduction}</h3>
                <div className="row DropdownContainer">
                    {Object.keys(skillsData).map((skillset, index) =>
                    (<div key={skillset} className="col DropdownBoxContainer" style={{ backgroundColor: colorDebug[index] }}>
                        <DropdownBox name={skillset} example={skillsData[skillset]} />
                    </div>
                    ))}
                </div>
            </div>

            <div className="BackgroundContainer">
                <span style={{ textDecorationLine: 'underline' }}>Address</span>
                <p>Marmion Street, Booragoon, 6154, WA, Australia</p>
                Phone Number <br />
                <p>(+61) 452 389 408</p>

                Email
                <ul style={{ fontSize: '0.75cqw', listStyleType: 'none', padding: '0' }}>
                    <li>
                        {contactLinksData.CurtinEmail}
                    </li>
                    <li>
                        {contactLinksData.Gmail}
                    </li>
                </ul>
                <a href={contactLinksData.Artstation} target="_blank">Artstation</a> <br />
                <a href={contactLinksData.Github} target="_blank">Github</a> <br />
                <a href={contactLinksData.Linkedln} target="_blank">LinkedIn</a> <br />
                <a href="public\PaulVan_CV.pdf" target="_blank">Resume</a>

            </div>
        </div>
    )
}
