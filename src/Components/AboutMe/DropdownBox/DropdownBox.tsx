import './DropdownBox.css'
import React from 'react';
import { Skills } from '../../../Data/SkillsData';

interface DropdownBoxProps {
    name: string
}

export default function DropdownBox(props: DropdownBoxProps) {
    //need to come back and check the width of this 

    return (
        <div style={{ position: 'relative', width: '250px' }}>
            <button className="btn btn-primary DropdownBox" data-bs-toggle="collapse"
                data-bs-target={`#${props.name}`}
                aria-expanded="false" aria-controls={props.name}>
                HELLO
            </button>
            <div style={{ backgroundColor: 'black', wordBreak: 'break-all' }}
                className="collapse" id={props.name}>
                aaaaaaaaaa  aaaaaaaaaaaaaaaaaaaa
                a
            </div>
        </div>);
}