import React from 'react';

import Sketch from 'react-p5';
import P5 from 'p5';
import { useWindowResize } from '../../../Utilities/useWindowResize';

import Particle from './Particle';
import { Engine, World } from 'matter-js';

interface PlinkoState {
	engine: Engine;
	world: World;
	particles: Particle[];
}

let plinkoState: PlinkoState;

export const Plinko = () => {
	const windowSize = useWindowResize();

	const setup = (p5: P5, canvasParentRef: Element) => {
		p5.createCanvas(windowSize.Width, windowSize.Height/2).parent(canvasParentRef);
		let engine = Engine.create();
		let world = engine.world;
		plinkoState = {engine, world, particles: []}

		newParticle();
	}

	const newParticle = () => {
		plinkoState.particles.push(
			new Particle(
				plinkoState.world,
				windowSize.Width/2,
				windowSize.Height/2 - 10,
				10
			)
		);
	}

	const draw = (p5: P5) => {
		if (p5.frameCount % 60 === 0) {
			newParticle();
		}

		p5.background(0);
		Engine.update(plinkoState.engine);
		for (let i = 0; i < plinkoState.particles.length; i++) {
			let p = plinkoState.particles[i];
			if (!p.show(plinkoState.world, p5)) {
				plinkoState.particles.splice(i, 1);
				i--;
			}
		}
	}

	const resizeCanvas = (p5: P5) => {
		p5.resizeCanvas(window.innerWidth, window.innerHeight/4);
	}

	return (
		<div className={"Hero"}>
			<Sketch setup={setup} draw={draw} windowResized={resizeCanvas}/>
		</div>
	)
}