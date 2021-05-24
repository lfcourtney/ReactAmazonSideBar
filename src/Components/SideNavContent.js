import React, {useEffect, useState} from 'react';
import SideNavRow from './SideNavRow';
import DropDown from './DropDowns/DropDown';
import {useAmazonContext} from '../Context/AmazonContext';

function SideNavContent(props) {
    const [dropDownEntries, setDropDownEntries] = useState(null);

    const {entryStore} = useAmazonContext();

    return (
        <div className="sideNavContainer" style={props.state === "exiting" ? {animation: "moveMainContainer .3s forwards"} : 
        props.state === "entering" ? {animation: "moveMainContainer .3s reverse backwards"} : null} >

            {entryStore &&(
                entryStore.map((entry, index) => {
                    return(
                <>
                <div className="sidenavContentHeader">{entry.title}</div>
                {
                    entry.entries.map((subEntry, index) => {
                        if(subEntry.type){
                            !dropDownEntries && setDropDownEntries(index);
                            return <DropDown entries={entry.entries.slice(index + 1)} />
                        }else if(dropDownEntries && index < dropDownEntries){
                            return (!entry.type.rows ? <a href="#"><div className="sidenavContent">{subEntry.title}</div></a>
                            : <SideNavRow text={subEntry.title} entries={subEntry.entries}/>)
                        }
                        })
                }
                {index !== entryStore.length - 1 && <hr/>}
                </>
            )}
            )
            )}
            <div style={{minHeight: "60px"}}></div>
        </div>
    );
}

export default SideNavContent;