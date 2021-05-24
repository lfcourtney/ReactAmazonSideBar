import React from 'react';
import SideNavRow from './SideNavRow';
import {useAmazonContext} from '../Context/AmazonContext';

function SubContainer(props) {
    
    const {subContainerEntries, setSubContainer} = useAmazonContext();

    return (
        <div className="sub-container" style={props.state === "entering" ? {animation: "moveSubContainer .3s forwards"} : 
        props.state === "entered" ? {transform: "translateX(0px)"} : {animation: "moveSubContainer .3s reverse backwards"}}>
            <div className="sub-header" onClick={() => setSubContainer(false)}>
            <i class="fas fa-chevron-left"></i> MAIN MENU
            </div>
            {subContainerEntries.map(subEntry => (
                <>
                <div className="sidenavContentHeader">{subEntry.title}</div>
                {subEntry.entries.map(superEntry => (
                    <SideNavRow text={superEntry.title} />
                 ))}
                </>
            ))}
            <div style={{minHeight: "60px"}}></div>
        </div>
    );
}

export default SubContainer;