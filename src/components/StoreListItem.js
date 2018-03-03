import React from 'react';

const StoreListItem = ({ store }) => {
    const {backgroundImageURL, name, category} = store;
    console.log(backgroundImageURL)
    return (
      <div className="storelist-item">
      	<img src={backgroundImageURL} alt="" />
      	<div clasName="store-labels">
	      	<div className="store-name">{name}</div>
	      	<div className="store-category">{category}</div>
	      </div>
      </div>
    );
}

export default StoreListItem;
