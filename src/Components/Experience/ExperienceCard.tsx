import './Experience.css'
import { useState } from 'react';

interface ExperienceCardProps {
    classname: string
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
                backgroundColor: 'black'
            }}>
            </div>
            <input style={{
                position: 'absolute', transformOrigin: 'center',
                width: '7.5cqw', transform: 'rotate(270deg)', margin: '-2.5cqw'

            }}
                type="range" className="form-range" min='3' max='100'
                value={value} onChange={handleChange} id="customRange1"></input>
            <p style={{ fontSize: '1cqw' }}>
                ASDHASUIDHSADUIHIUSAH
                ASDHASUIDHSADUIHIUSAH
                ASDHASUIDHSADUIHIUSAH
                ASDHASUIDHSADUIHIUSAH

                ASDHASUIDHSADUIHIUSAH
                ASDHASUIDHSADUIHIUSAH
            </p>

        </div>)
}