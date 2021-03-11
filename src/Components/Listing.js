import React from 'react';
import styles from '../Styles/Components/Listing.module.css';

const Listing = (props) => {
	let game = props.game;

	let isLeft = props.index % 2 === 0;

	let containerClass = (isLeft ? styles.left : styles.right);

	let imgStyle = {
		"background-image": "url(" + game.image + ")",
		"min-height": "100%"
	};

	return (
		<div className={styles.container + " " + containerClass}>
			<div
				className={styles.imageContainer + " parallax"}
				style={imgStyle}
			></div>
			<div className={styles.textContainer}>
				<h3 className={styles.heading}>{game.title}</h3>
				<p className={styles.content}>{game.desc}</p>
			</div>
		</div>
	);
}

export default Listing;
