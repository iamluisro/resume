import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`text-align: center;`;

const AboutAvatar = styled.div`padding: 2em 0 0 0;`;

const AboutImg = styled.img`
	border-radius: 100%;
	width: 160px;
	height: 160px;
	border: 2px solid #e91eg;
	margin: 0 auto;
	display: block;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0, 0.6);
`;

const AboutName = styled.div`text-align: center;`;

const AboutH2 = styled.div`
	font-family: "Roboto", sans-serif;
	font-weight: 400;
	letter-spacing: 1.2px;
	margin: 0.5em 0 0 0;
	color: #684a83;
`;

const AboutProfessions = styled.p`
	margin: 0.2em 0 1em 0;
	letter-spacing: 1.6px;
	font-weight: 300;
	color: #684a83;
`;

const AboutBio = styled.p`
	color: #757575;
	font-size: 1em;
	font-weight: 300;
`;

const AboutLocation = styled.p`
	color: #757575;
	font-size: 1em;
	font-weight: 400;
`;

const About = ({ avatar, name, address, bio, profession, social }) => (
	<AboutStyle>
		<div className='About-container'>
			<AboutAvatar>
				<figure>
					<AboutImg src={avatar} alt={name} />
				</figure>
			</AboutAvatar>
			<AboutName>
				<AboutH2>{name}</AboutH2>
			</AboutName>
			<div className='About-job'>
				<AboutProfessions>{profession}</AboutProfessions>
			</div>
			<div className='About-bio'>
				<AboutBio>{bio} </AboutBio>
			</div>
			<div className='About-location'>
				<AboutLocation>{address}</AboutLocation>
			</div>
			<div className='About-social'>
				<Social social={social} />
			</div>
		</div>
	</AboutStyle>
);

export default About;
