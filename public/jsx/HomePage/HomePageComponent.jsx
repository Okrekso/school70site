import React, { Link } from 'react'

import './HomePage-styles.scss'

import NavBlock from '../navBlock/navBlock'

import ProposalBlock from '../proposalBlockComponent/ProposalBlock'
import EventBlock from '../eventBlockComponent/eventBlock'

export default function HomePage(){
    return(
        <div id = 'homePageContainer'>
            {/* <NavBlock /> */}
            <ProposalBlock />
            <EventBlock />
        </div>
    );
}