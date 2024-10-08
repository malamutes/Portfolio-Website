import React from 'react'
import './AboutMeIntroduction.css'
import DropdownBox from './DropdownBox/DropdownBox'
import ProgLangCard from './DropdownBox/ProgLangCard'
import { Skills } from '../../Data/SkillsData'

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
                HLLO WORLD
            </div>
        </div>
    )
}


/* 
                 <div style={{ backgroundColor: "red", }} className="col DropdownBoxContainer">
                        <DropdownBox name='1' />
                    </div>

                    <div style={{ backgroundColor: "yellow" }} className="col DropdownBoxContainer">
                        <DropdownBox name='2' />
                    </div>

                    <div style={{ backgroundColor: "green" }} className="col DropdownBoxContainer">
                        <DropdownBox name='3' />
                    </div>

                    */