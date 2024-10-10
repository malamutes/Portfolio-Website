import './Experience.css'

interface ExperienceCardProps {
    classname: string
}

export default function ExperienceCard(props: ExperienceCardProps) {
    return (<div className={`ExperienceCardContainer ${props.classname}`}>
    </div>)
}