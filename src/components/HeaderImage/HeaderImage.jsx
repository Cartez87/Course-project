import React from "react";
import bgImage from 'public/images/header-image.jpg';

import './HeaderImage.scss';

const HeaderImage = () => {

    return (
        <div className="header-image" style={{ backgroundImage: `url(${bgImage})` }}>
            
        </div>
    )
}

export default HeaderImage;