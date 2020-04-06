import React,
{
	useState
} from 'react';

const Listing = (props) => {
	let game = props.game;

	let isLeft = props.index % 2 == 0;

	return (
		<>
			<div className="listing-container left">
				<div className="listing-image">
					<img src={game.image}/>
				</div>
				<div>
					<h3>{game.title}</h3>
					<p>{game.desc}</p>
				</div>
			</div>
		</>
	);
}

export default Listing;