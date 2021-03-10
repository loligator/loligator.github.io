import React from 'react';
import styles from '../Styles/Components/Listing.module.css';

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
				<h3 className={styles.heading}>{game.title}</h3>
				<p className={styles.content}>{game.desc}</p>
			</div>
		</div>
	);
}

export default Listing;