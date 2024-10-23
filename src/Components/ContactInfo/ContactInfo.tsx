import './ContactInfo.css'
import { ContactLinks } from '../../Data/ContactLinks'

export default function ContactInfo() {
    const contactLinksData = ContactLinks;

    return (<div id="ContactInfoID" className="DefaultMainContainer ContactInfoContainer">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <span style={{ textDecorationLine: 'underline' }}>Address</span>
                    <p>Marmion Street, Booragoon, 6154, WA, Australia</p>
                    Phone Number <br />
                    <p>(+61) 452 389 408</p>
                </div>

                <div className="col">
                    Email
                    <ul style={{ fontSize: '1cqw', listStyleType: 'none', padding: '0' }}>
                        <li>
                            {contactLinksData.CurtinEmail}
                        </li>
                        <li>
                            {contactLinksData.Gmail}
                        </li>
                    </ul>
                </div>

            </div>


        </div>
    </div>)
}

/*             <div className="row">
                <div className="col">
                    <a href={contactLinksData.Artstation} target="_blank">Artstation</a> <br />
                </div>

                <div className="col">
                    <a href={contactLinksData.Github} target="_blank">Github</a> <br />
                </div>

                <div className="col">
                    <a href={contactLinksData.Linkedln} target="_blank">LinkedIn</a> <br />
                </div>


                <div className="col-1">
                    <a href="public\PaulVan_CV.pdf" target="_blank">Resume</a>
                </div>

            </div>
            */