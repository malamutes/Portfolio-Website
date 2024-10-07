import './SideNav.css'

export default function SideNav() {
    const anchors = ["AboutMe", "Education", "Experience", "Artwork",
        "Websites", "ContactInfo"];

    return (
        <div className="SideNavContainer">
            {anchors.map((anchor, index) => (
                <div key={index} className="AnchorLinksDiv">
                    <a href={`#${anchor}ID`}>
                        {anchor}
                    </a>
                </div>
            ))}
        </div>
    )
}
