import React from 'react'
import './AboutMeIntroduction.css'
import DropdownBox from './DropdownBox/DropdownBox'
import ProgLangCard from './DropdownBox/ProgLangCard'

const Introduction = `
Hiya!
I'm a second-year student at Curtin University, 
pursuing a Bachelor of Advanced Science (Honours) majoring in Computing. 
My studies fuel my passion for technology and innovation. 
In my free time, I enjoy 3D sculpting using Blender, 
where I can express my creativity. 
`

export default function AboutMeIntroduction() {
    return (
        <div className="AboutMeIntroductionContainer">
            <div className="container IntroductionContainer">
                <h3>{Introduction}</h3>
                <div className="row DropdownContainer">
                    <div style={{ backgroundColor: "red", }} className="col DropdownBoxContainer">
                        <DropdownBox name='1' />
                    </div>

                    <div style={{ backgroundColor: "yellow" }} className="col DropdownBoxContainer">
                        <DropdownBox name='2' />
                    </div>

                    <div style={{ backgroundColor: "green" }} className="col DropdownBoxContainer">
                        <DropdownBox name='3' />
                    </div>


                </div>
            </div>

            <div className="BackgroundContainer">
                HLLO WORLD
            </div>
        </div>
    )
}