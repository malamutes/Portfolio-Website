import './Experience.css'
import { useContext, useState } from 'react';
import { darkContext } from '../CommonLogicStyles/DarkContext';

interface ExperienceCardProps {
    classname: string,
    title: string,
    experience: string
}

export default function ExperienceCard(props: ExperienceCardProps) {
    const [value, setValue] = useState<number>(100);

    const theme = useContext(darkContext);

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
                backgroundColor: `${theme ? 'rgba(31, 2, 37, 1)' : 'rgba(92, 55, 92, 1)'}`
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