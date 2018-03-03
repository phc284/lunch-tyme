import React from 'react';

import BG_Gradient from '../Cuts/cellGradientBackground@2x.png';

const StoreListItem = ({ store }) => {
    const {backgroundImageURL, name, category, contact, location} = store;

    return (
      <div className="storelist-item">
      	<div className="image-container">
      		<img className="store-img" src={backgroundImageURL} alt="" />
      		<img className="gradient" src={BG_Gradient} alt="" />
      	</div>
      	<div className="store-labels">
	      	<div className="store-name">{name}</div>
	      	<div className="store-category">{category}</div>
	      </div>
      </div>
    );
}

export default StoreListItem;
