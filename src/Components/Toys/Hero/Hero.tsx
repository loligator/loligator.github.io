import React from 'react';

import Sketch from 'react-p5';
import P5 from 'p5';
import { useWindowResize } from '../../../Utilities/useWindowResize';

export const Hero = () => {
	const windowSize = useWindowResize();

	const setup = (p5: P5, canvasParentRef: Element) => {
		p5.createCanvas(windowSize.Width, windowSize.Height/2).parent(canvasParentRef);
	}

	const draw = (p5: P5) => {
		p5.background(0);
	}

	const resizeCanvas = (p5: P5) => {
		p5.resizeCanvas(window.innerWidth, window.innerHeight/2);
	}

	return (
		<div className={"Hero"}>
			<Sketch setup={setup} draw={draw} windowResized={resizeCanvas}/>
		</div>
	)
}