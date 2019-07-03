import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = (props) => (
	<div className='Certificates'>
		<H2Styled name='Certificates' />
		<div className='Certificates-container'>
			{props.data.map((certificate, index) => (
				<div className='Certificates-item' key={`Certificate-${index}`}>
					<h3>{certificate.institution}</h3>
					<p>{certificate.name}</p>
					<span>{certificate.date}</span>

					<p>{certificate.description}</p>
				</div>
			))}
		</div>
	</div>
);

export default Certificates;
