import { useLayoutEffect, useState } from 'react';

type WindowDimensions = {
	Width: number,
	Height: number
}

export const useWindowResize = () => {
	const [size, setSize] = useState<WindowDimensions>(
		{Width: 0, Height: 0}
	);

	useLayoutEffect(() => {
		const updateSize = () => {
			setSize({ 
				Width: window.innerWidth,
				Height: window.innerHeight
			});
		}
		updateSize();
		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	return size;
}