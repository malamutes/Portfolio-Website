import './SkillsCard.css'

interface SkillsCardProps {
    iconUrl: string,
    name: string,

}

export default function SkillsCard(props: SkillsCardProps) {
    const IconNameCard: React.CSSProperties = {
        position: "relative",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",

    }

    return (
        <div style={IconNameCard} className="DummyContainer">
            <img className="LanguageImageIcon" src={props.iconUrl} alt="LanguageIcon" />
            <span className="DisplayText">{props.name}</span>
        </div>
    )

}