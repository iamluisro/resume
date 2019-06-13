import React from "react";

const Certificates = props => (
	<div className='Certificates'>
		<div className='Certificates-container'>
			{props.data.map((certificate, index) => (
				<div className='Certificates-item' key={`Certificate-${index}`}>
					<h3>{certificate.name}</h3>
					<p>{certificate.institution}</p>
					<span>{certificate.date}</span>

					<p>{certificate.description}</p>
				</div>
			))}
		</div>
	</div>
);

export default Certificates;
