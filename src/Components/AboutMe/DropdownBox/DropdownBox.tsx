import './DropdownBox.css'
import React from 'react';
import { examples, Skills } from '../../../Data/SkillsData';

interface DropdownBoxProps {
    example: examples
    name: string
}

export default function DropdownBox(props: DropdownBoxProps) {
    //need to come back and check the width of this 


    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <button className="btn btn-primary DropdownBox" data-bs-toggle="collapse"
                data-bs-target={`#${props.name}`}
                aria-expanded="false" aria-controls={props.name}>
                <span style={{ fontSize: '1cqw' }}>{props.name}</span>
            </button>
            <div style={{ backgroundColor: 'orange' }}
                className="collapse " id={props.name}>
                <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}> {/* can do arraws or bullet points here*/}
                    {Object.values(props.example).map((item, index) =>
                    (<li key={Object.keys(props.example)[index]}>
                        <div className="IconNameCard">
                            <img className="LanguageImageIcon" src={item} alt="LanguageIcon" />
                            <span className="DisplayText">{Object.keys(props.example)[index]}</span>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>);
}