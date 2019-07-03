import React from 'react';
import H2Styled from '../styled/H2Styled';
//import JobDescription from './JobDescription';

const Experience = (props) => (
	<div className='Experience'>
		<H2Styled name='Experience' />
		<div className='Experience-container'>
			{props.data.map((experience, index) => (
				<div className='Experience-item' key={`Experience-${index}`}>
					<h3>
						{experience.company} - {experience.jobTitle}
					</h3>
					<p>
						{experience.startDate}-{experience.endDate}
					</p>

					<li>{experience.jobDescription}</li>
				</div>
			))}
		</div>
	</div>
);

export default Experience;
