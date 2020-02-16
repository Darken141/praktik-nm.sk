import React from 'react';

import './card.scss';

const Card = ({ content, Image }) => {
	return (
		<div className="card">
			<div className="card__illustration">
				<Image className="benefit-icon" />
			</div>
			<div className="card__description">
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Card;
