import './Education.css'

export default function CurtinEducationDescription() {
    return (
        <div className="EducationDescription">
            <span>FEB 2023 - PRESENT</span> <br />
            <span style={{ fontWeight: 'bold' }}>Bachelor of Advanced Science, Computing Major (Honours)</span>
            <ul style={{ padding: "2.5%", margin: 0, maxWidth: '80%' }}>
                <li>
                    Achieved a course weighted average of 76 for Semester 1 of 2024
                </li>

                <li>
                    Achieved Course weighted average of 82.5 for semester 2 of 2023
                </li>

                <li>
                    Achieved a course weighted average of 75.25 for Semester 1 of 2023
                </li>
            </ul>
            Topics: Operating Systems, C, Unix, Kotlin, Java, Python, Data Mining, Data structures, Comp-Vision Research, Database
            <a href='https://www.curtin.edu.au/' target='_blank'>CURTIN</a>
        </div>
    );
}

export function AXHSEducationDescription() {
    return (
        <div className="EducationDescription">
            <span>FEB 2016 – DEC 2022</span> <br />
            <span style={{ fontWeight: 'bold' }}>High School Diploma (WACE certificate)</span>
            <ul style={{ padding: '2.5%', margin: 0, maxWidth: '80%' }}>
                <li>
                    Achieved ATAR of 98+ doing Mathematics Specs, Methods, Physics, Chemistry and English
                </li>

                <li>
                    Achieved 80%+ for Specs, Methods, Physics and English in final WACE exam
                </li>

                <li>
                    Achieved Distinction multiple times for CAT competition.
                </li>
                <a href='https://applecross.wa.edu.au/' target='_blank'>APPLECROSS</a>
            </ul>

        </div>
    );
}