import './SideNav.css'
import React, { useEffect } from 'react';
import { useState } from 'react';

export default function SideNav() {
    const anchors = ["AboutMe", "Education", "Experience", "Artwork",
        "Websites"];

    const contactInfo = "ContactInfo";

    //dropping contact info so it can be displayed dynamically later

    const [isShow, setIsShow] = useState(true);
    const [above768px, setAbove768px] = useState((window.innerWidth > 768) ? true : false);
    //for initial render



    const toggleShow = () => {
        setIsShow(isShow => !isShow);
    }

    useEffect(() => {
        const handleResize = () => {
            const isAbove768 = window.innerWidth > 768;
            if (above768px !== isAbove768) {
                setAbove768px(isAbove768);
            }

            if (above768px === true) {
                setIsShow(true);
            }
            else if (above768px === false) {
                setIsShow(false)
            }

        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [above768px]);

    return (
        <>
            <button className="ToggleViewBox " data-bs-toggle="collapse"
                data-bs-target="#SideNavContainer" aria-expanded="true" aria-controls="SideNavContainer"></button>
            <div className={`SideNavContainer collapse ${isShow ? "show" : ""} `} id="SideNavContainer">
                <ul className="MyUnorderedList">
                    {anchors.map((anchor, index) => (
                        <li key={index} className="AnchorLinksDiv">
                            <a href={`#${anchor}ID`}>
                                {anchor}
                            </a>
                        </li>
                    ))}
                    <li key={contactInfo} className="AnchorLinksDiv DynamicContactInfo">
                        <a href={`#${contactInfo}ID`}>
                            {contactInfo}
                        </a>
                    </li>

                </ul>


            </div>
        </>

    )
}
