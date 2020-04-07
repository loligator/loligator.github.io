import React from 'react';

const Bio = (props) => {
	return (
		<>
			<div className="bio-container">
				<h1 className="title">About Me</h1>
				<img src={props.content.ProfilePic}/>
				<p>{props.content.Intro}</p>
				<p>{props.content.WhereIWork}</p>
				<p>{props.content.AboutGameDev}</p>
			</div>
		</>
	);
}

export default Bio;