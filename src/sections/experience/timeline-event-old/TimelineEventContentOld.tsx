import React from 'react'
import { TimelineEventContentListIconOld } from './TimelineEventContentListIconOld'

import trophy from '../../../images/icons/color/trophy.svg'
import java from '../../../images/icons/logos/java.svg'
import python from '../../../images/icons/logos/python.svg'
import nodejs from '../../../images/icons/logos/nodejs.svg'
import react from '../../../images/icons/logos/react.svg'
import typescript from '../../../images/icons/logos/typescript.svg'
import swift from '../../../images/icons/logos/swift.svg'
import sql from '../../../images/icons/logos/sql.svg'
import aws from '../../../images/icons/logos/aws.svg'
import azure from '../../../images/icons/logos/azure.svg'
import { TimelineEventContentListOld } from './TimelineEventContentListOld'

const iconMap: { [key: string]: string } = {
    java,
    python,
    nodejs,
    react,
    typescript,
    swift,
    sql,
    aws,
    azure,
}

type TTimelineEventContent = {
    // languages: string[]
    // awards: {
    //     name: string
    //     quantity: number
    //     hoverText: string
    // }[]
    children: any
}

export function TimelineEventContentOld({
    // languages,
    // awards,
    children,
}: TTimelineEventContent) {
    const awardsRef = React.useRef(null)
    return (
        <div>
            {/*<p className="timeline-element-content top-padding bottom-padding">*/}
            {/*    {children}*/}
            {/*</p>*/}
            {/*<div className={'timeline-element-content-split-pane'}>*/}
            {/*    <TimelineEventContentListOld*/}
            {/*        title={'Tech'}*/}
            {/*        list={languages}*/}
            {/*        iconMap={iconMap}*/}
            {/*    />*/}
            {/*    /!*<div style={{ flex: 1 }}>*!/*/}
            {/*    /!*    <h4 className={'timeline-element-content-split-pane-title'}>*!/*/}
            {/*    /!*        Tech*!/*/}
            {/*    /!*    </h4>*!/*/}
            {/*    /!*    <ul>*!/*/}
            {/*    /!*        {languages.map((language) => (*!/*/}
            {/*    /!*            <div key={language}>*!/*/}
            {/*    /!*                <li key={language}>*!/*/}
            {/*    /!*                    {language + '  '}*!/*/}
            {/*    /!*                    <img*!/*/}
            {/*    /!*                        src={iconMap[language.toLowerCase()]}*!/*/}
            {/*    /!*                        style={{*!/*/}
            {/*    /!*                            width: '25px',*!/*/}
            {/*    /!*                            height: '100%',*!/*/}
            {/*    /!*                            display: 'inline',*!/*/}
            {/*    /!*                            verticalAlign: 'middle',*!/*/}
            {/*    /!*                        }}*!/*/}
            {/*    /!*                    />*!/*/}
            {/*    /!*                </li>*!/*/}
            {/*    /!*            </div>*!/*/}
            {/*    /!*        ))}*!/*/}
            {/*    /!*    </ul>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    {awards.length > 0 && (*/}
            {/*        <TimelineEventContentListOld*/}
            {/*            title={'Awards'}*/}
            {/*            list={awards.map((award) => award.name)}*/}
            {/*            iconMap={{}}*/}
            {/*            defaultIcon={trophy}*/}
            {/*        />*/}
            {/*        // <div*/}
            {/*        //     className={'timeline-element-content-split-pane-right'}*/}
            {/*        //     style={{ flex: 1 }}*/}
            {/*        // >*/}
            {/*        //     <h4*/}
            {/*        //         className={*/}
            {/*        //             'timeline-element-content-split-pane-title'*/}
            {/*        //         }*/}
            {/*        //     >*/}
            {/*        //         Awards*/}
            {/*        //     </h4>*/}
            {/*        //     <ul ref={awardsRef}>*/}
            {/*        //         {awards.map((award) => (*/}
            {/*        //             <li*/}
            {/*        //                 style={{*/}
            {/*        //                     display: 'flex',*/}
            {/*        //                     // whiteSpace: 'nowrap',*/}
            {/*        //                 }}*/}
            {/*        //                 key={award.name}*/}
            {/*        //             >*/}
            {/*        //                 <AwardListItem*/}
            {/*        //                     itemName={award.name}*/}
            {/*        //                     quantity={award.quantity}*/}
            {/*        //                     hoverText={award.hoverText}*/}
            {/*        //                     awardsContainerRef={awardsRef}*/}
            {/*        //                 />*/}
            {/*        //             </li>*/}
            {/*        //         ))}*/}
            {/*        //     </ul>*/}
            {/*        //     <div />*/}
            {/*        // </div>*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>
    )
}
