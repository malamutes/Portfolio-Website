import './ProgLangCard.css'

interface ProgLangCardProps {
    name: string,
    iconUrl: string
}

export default function ProgLangCard(props: ProgLangCardProps) {
    return (<div className="ProgLangCardContainer">
        <img src={props.iconUrl} alt={props.name}></img>
        <h2>{props.name}</h2>
    </div>)

}