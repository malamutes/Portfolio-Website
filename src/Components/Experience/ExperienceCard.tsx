import './Experience.css'
import { useState } from 'react';

interface ExperienceCardProps {
    classname: string,
    title: string,
    experience: string
}

export default function ExperienceCard(props: ExperienceCardProps) {
    const [value, setValue] = useState<number>(100);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
        //number casting here because react input fields/browsers treat retrieves
        //target.value as a string always so need to specify ,
        //and same as passing in event as parameter need to specify type in tsx
    }


    return (
        <div className={`ExperienceCardContainer ${props.classname}`}>
            <div style={{
                position: 'absolute', height: '100%', width: `${value}%`,
                backgroundColor: 'rgba(31, 2, 37, 1)'
            }}>
            </div>
            <input className="InputClass"
                type="range" min='3' max='100'
                value={value} onChange={handleChange} id="customRange1"></input>
            <div className='FontContainer'>
                <span className='ExperienceFont' style={{ fontWeight: '900' }}>{props.title}</span>
                <p className='ExperienceFont'>{props.experience}</p>
            </div>


        </div >)
}