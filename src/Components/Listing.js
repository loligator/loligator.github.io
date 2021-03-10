import React from 'react';

const Listing = (props) => {
	let game = props.game;

	let isLeft = props.index % 2 === 0;

	let containerClass = (isLeft ? "left" : "right");

	let imgStyle = {
		"background-image": "url(" + game.image + ")",
		"min-height": "100%"
	};

	return (
		<div className={"listing-container " + containerClass}>
			<div
				className="listing-image-container parallax"
				style={imgStyle}
			></div>
			<div className="listing-text-container">
				<h3 className={"listing__header"}>{game.title}</h3>
				<p className={"listing__content"}>{game.desc}</p>
			</div>
		</div>
	);
}

export default Listing;