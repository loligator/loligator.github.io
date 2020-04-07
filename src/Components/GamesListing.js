import React, 
	{ 
		useState
	} from 'react';

import Listing from './Listing';

const GamesListing = (props) => {
	let games = props.games;

	let gameIndex = 0;
	return (
		<div className="games-listing">
			{
				games.map(g => (
					<>
						<Listing game={g} index={gameIndex++}/>
					</>
				))
			}
		</div>
	);
}

export default GamesListing;