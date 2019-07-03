import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Music = (props) => (
	<div className='Music'>
		<H2Styled name='Music' />
		<div className='Music-container'>
			{props.data.map((music, index) => (
				<div className='Music-item' key={`Music-${index}`}>
					<h3>{music.exp}</h3>
					<p>{music.exp2}</p>
					<span>{music.length}</span>
				</div>
			))}
		</div>
	</div>
);

export default Music;
