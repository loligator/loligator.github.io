import React,
{
	useState
} from 'react';

const Listing = (props) => {
	let game = props.game;

	let isLeft = props.index % 2 === 0;

	let containerClass = (isLeft ? "left" : "right");

	return (
		<>
			<div className={"listing-container " + containerClass}>
				<div className="listing-image-container">
					<img src={game.image} className="listing-image"/>
				</div>
				<div className="listing-text-container">
					<h3>{game.title}</h3>
					<p>{game.desc}</p>
				</div>
			</div>
		</>
	);
}

export default Listing;