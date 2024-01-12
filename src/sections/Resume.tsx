import React from 'react'
import './section.css'
import './resume.css'
import python_img from '../images/icons/logos/python.svg'
import nodejs_img from '../images/icons/logos/nodejs.svg'
import java_img from '../images/icons/logos/java.svg'
import sql_img from '../images/icons/logos/sql.svg'
import swift_img from '../images/icons/logos/swift.svg'
import graphql_img from '../images/icons/logos/graphql.svg'
import SectionTitle from './components/section-title'

function ProgrammingLanguage({
    name,
    icon,
    isVisible,
}: {
    name: string
    icon: any
    isVisible: boolean
}) {
    if (!isVisible) {
        return <div />
    }
    return (
        <div
            className="programming-language-title"
            style={{
                opacity: isVisible ? 1 : 0,
            }}
        >
            {/*<h3>{name}</h3>*/}
            <img src={icon} className="programming-language-icon" />
        </div>
    )
}

function Resume() {
    return (
        <div className="content-section" id="resume">
            <div className="content-container">
                <div className="line" />
                <SectionTitle sectionName="resume">Resume</SectionTitle>
                <div className="line" />
                <div className="top-padding bottom-padding">
                    <div className="resume-container">
                        <embed
                            src="resume.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0"
                            width="850"
                            height="1125"
                            type="application/pdf"
                        />
                        {/*<div className="programming-languages-container">*/}
                        {/*    <ProgrammingLanguage*/}
                        {/*        name={'Python'}*/}
                        {/*        icon={python_img}*/}
                        {/*        isVisible={true}*/}
                        {/*    />*/}
                        {/*    <ProgrammingLanguage*/}
                        {/*        name={'NodeJS'}*/}
                        {/*        icon={nodejs_img}*/}
                        {/*        isVisible={true}*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
