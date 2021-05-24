import React from 'react';
import {useAmazonContext} from '../Context/AmazonContext';

function SideNavRow(props) {

    const {setSubContainer, setSubContainerEntries} = useAmazonContext();

    const openRow = () => {
        setSubContainer(true);
        setSubContainerEntries(props.entries);
    }

    return (
        <div className="sidenavRow" onClick={() => (props.entries && openRow())}>
            <div>{props.text}</div>
            <i class="fas fa-chevron-right"></i>
        </div>
    );
}

export default SideNavRow;