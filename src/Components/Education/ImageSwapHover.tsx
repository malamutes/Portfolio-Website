import './ImageSwapHover.css'

interface ImageSwapHoverProps {
    img1: string,
    img2: string;
    className?: string;
    width: string;
    aspectRatio: string
}

/* not defining width and height here lets className from other file takes precedence
because this part is more specific than className from another file
so pass as parameters instead */

export default function ImageSwapHoverCurtin(props: ImageSwapHoverProps) {
    return (<div style={{ width: props.width, aspectRatio: props.aspectRatio }} className={`ImageSwapHoverContainer ${props.className}`}>
        <img className="ImageOne" src={props.img1}></img>
        <img className="ImageTwo" src={props.img2}></img>
    </div>)
}


export function ImageSwapHoverAXHS(props: ImageSwapHoverProps) {
    return (<div style={{ width: props.width, aspectRatio: props.aspectRatio }} className={`ImageSwapHoverContainer ${props.className}`}>
        <img style={{ top: '10%' }} className="ImageOne" src={props.img1}></img>
        <img className="ImageTwo" src={props.img2}></img>
    </div>)
}


/*so with named exports like export func (no default keyword) if it 
isnt imported with curly braces then itll import the default func instead
so it was importing curtin earlier*/ 