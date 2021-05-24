import React, {useState, useEffect} from 'react';
import SideNavContent from './SideNavContent';
import SubContainer from './SubContainer';
import {Transition} from 'react-transition-group';
import {useAmazonContext} from '../Context/AmazonContext';

function Sidenav(props) {

    const {subContainer, setSubContainer} = useAmazonContext();

    
    return (
        <div className="sidenav" style={props.state === "entering" ? {animation: "moveSideBar .3s forwards"} : props.state === "entered" ? 
        {transform: "translateX(-0px)"} : {animation: "moveSideBar .3s reverse backwards"}}>
            <div className="sidenavHeader">
            <i className="fas fa-user-circle"></i> Hello, Sign In
            </div>
            <Transition
            in={!subContainer}
            timeout={300}
            unmountOnExit
            mountOnEnter>
            {state => (
                <SideNavContent setSubContainer={setSubContainer} 
                subContainer={subContainer} state={state} />
            )}
            </Transition>
            <Transition
            in={subContainer}
            timeout={300}
            unmountOnExit
            mountOnEnter>
            {state => (
                <SubContainer state={state} setSubContainer={setSubContainer} />
            )}
            </Transition>
        </div>
    );
}

export default Sidenav;