import './ContactInfo.css'
import { ContactLinks } from '../../Data/ContactLinks'

export default function ContactInfo() {
    const contactLinksData = ContactLinks;

    return (<div id="ContactInfoID" className="DefaultMainContainer ContactInfoContainer">
        <div style={{
            textAlign: 'center'
        }}>
            <ul style={{
                fontSize: '2cqw', listStyleType: 'none', padding: '0',
                position: 'relative', top: 'calc(10%)px', marginTop: '5%'
            }}>
                <li>
                    <span style={{ textDecorationLine: 'underline' }}>Email</span>
                </li>
                <li>
                    {contactLinksData.CurtinEmail}
                </li>
                <li>
                    <p>{contactLinksData.Gmail}</p>

                </li>

                <li>
                    <span style={{ textDecorationLine: 'underline' }}>Address</span>
                    <p>Marmion Street, Booragoon, 6154, WA, Australia</p>
                    Phone Number <br />
                    <span>(+61) 452 389 408</span>
                </li>

                <li>
                    <a href={contactLinksData.Artstation} target="_blank">Artstation</a> <br />
                </li>

                <li>
                    <a href={contactLinksData.Github} target="_blank">Github</a> <br />
                </li>

                <li>
                    <a href={contactLinksData.Linkedln} target="_blank">LinkedIn</a> <br />
                </li>

                <li>
                    <a href="public\PaulVan_CV.pdf" target="_blank">Resume</a>
                </li>
            </ul>
        </div>
    </div>)
}