import React from "react";

const Skills = props => (
	<div className='Skills'>
		<div className='Skills-container'>
			{props.data.map((skills, index) => (
				<div className='Skills-item' key={`Skills- ${index}`}>
					<h5>{skills.name}</h5>
					<div className='Skills-line'>
						<span>{skills.percentage}</span>
					</div>
				</div>
			))}
		</div>
	</div>
);
export default Skills;
