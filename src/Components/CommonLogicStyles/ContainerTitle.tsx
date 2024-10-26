import './CommonStyles.css'

interface ContainerTitleProps {
    active: Boolean,
    title: string,
    color: string,
    top?: string,
    left?: string
}

export default function ContainerTitle(props: ContainerTitleProps) {
    return (
        <>
            <span style={{ top: props.top, left: props.left }}
                className={`ContainerTitle ${props.active ? "ContainerTitleVisible" : ""}`}>{props.title}
                <hr className="line" style={{ backgroundColor: props.color }} />
            </span>

        </>
    );

}