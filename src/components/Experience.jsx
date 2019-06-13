import React from "react";

const Experience = props => (
	<div className='Experience'>
		<div className='Experience-container'>
			{props.data.map((experience, index) => (
				<div className='Experience-item' key={`Experience-${index}`}>
					<h3>
						{experience.company} - {experience.jobTitle}
					</h3>
					<p>
						{experience.startDate}-{experience.endDate}
					</p>
					<p>{experience.jobDescription}</p>
				</div>
			))}
		</div>
	</div>
);

export default Experience;
