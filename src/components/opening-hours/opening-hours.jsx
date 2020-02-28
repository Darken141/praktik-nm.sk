import React from 'react';

import './opening-hours.scss';

const OpeningHours = ({ openingHours }) => {
	return (
		<div className="table">
			{openingHours.map(({ id, day, time }) => (
				<div className="row" key={id}>
					<div className="col-day">{day}</div>
					<div className="col-hour">{time}</div>
				</div>
			))}
		</div>
	);
};

export default OpeningHours;
