import React from 'react';

const Bio = (props: any) => {
	return (
		<>
			<div className="bio-container">
					<img className="bio-profile-pic"  src={props.content.ProfilePic} alt=""/>
					<div className="bio-text">
						<h1 className="title">About Me</h1>
						<p>{props.content.Intro}</p>
						<p>{props.content.WhereIWork}</p>
						<p>{props.content.AboutGameDev}</p>
					</div>
			</div>
		</>
	);
}

export default Bio;