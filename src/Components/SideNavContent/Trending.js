import React from 'react';

function Trending(props) {
    return (
        <>
            <div className="sidenavContentHeader">Trending</div>
            <a href="#"><div className="sidenavContent">Best Sellers</div></a>
            <a href="#"><div className="sidenavContent">New Releases</div></a>
            <a href="#"> <div className="sidenavContent">Movers and Shakers</div></a>
        </>
    );
}

export default Trending;