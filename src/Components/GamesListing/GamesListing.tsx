import React from 'react';

import Listing from '../Listing/Listing';

interface GamesListingProps {
	games: any[],
}

const GamesListing = (props: GamesListingProps) => {
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