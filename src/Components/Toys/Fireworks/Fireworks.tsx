import React from 'react';

import Sketch from 'react-p5';
import P5 from 'p5';
import { useWindowResize } from '../../../Utilities/useWindowResize';

import Mortar from './Mortar';
import { Engine, World } from 'matter-js';
import Firework from './Firework';
import Skyline from '../../../Image/SkylineAtNight.jpg';

interface FireworkState {
	engine: Engine;
	world: World;
	mortars: Mortar[];
	fireworks: Firework[];
}

let fireworksState: FireworkState;
let bg: P5.Image;

export const FireworksHero = () => {
	const windowSize = useWindowResize();

	const setup = (p5: P5, canvasParentRef: Element) => {
		bg = p5.loadImage(Skyline);

		p5.createCanvas(windowSize.Width, windowSize.Height/2).parent(canvasParentRef);
		let engine = Engine.create();
		let world = engine.world;
		fireworksState = {engine, world, mortars: [], fireworks: []}

		newMortar();
	}

	const resizeCanvas = (p5: P5) => {
		p5.resizeCanvas(window.innerWidth, window.innerHeight/2);
	}

	const newMortar = (x?: number, y?: number) => {
		fireworksState.mortars.push(
			new Mortar(
				fireworksState.world,
				x ?? windowSize.Width/2,
				y ?? windowSize.Height/2,
				5,
			)
		);
	}

	const newFirework = (x: number, y: number, color: P5.Color) => {
		fireworksState.fireworks.push(
			new Firework(
				fireworksState.world,
				x, y,
				15,
				color
			)
		)
	}

	const pickColor = (p5: P5): P5.Color => {
		let colors = [
			p5.color(255, 0, 0),
			p5.color(0, 255, 0),
			p5.color(0, 0, 255)
		]
		return colors[Math.floor(Math.random() * colors.length)];
	}

	const draw = (p5: P5) => {
		if (p5.frameCount % 60 === 0) {
			newMortar();
		}

		p5.background(bg);
		Engine.update(fireworksState.engine);
		for (let i = 0; i < fireworksState.mortars.length; i++) {
			let p = fireworksState.mortars[i];
			if (!p.show(fireworksState.world, p5)) {
				newFirework(
					fireworksState.mortars[i].x,
					fireworksState.mortars[i].y,
					pickColor(p5)
				);
				fireworksState.mortars.splice(i, 1);
				
				i--;
			}
		}
		for (let i = 0; i < fireworksState.fireworks.length; i++) {
			let f = fireworksState.fireworks[i];
			if (!f.show(fireworksState.world, p5)) {
				fireworksState.fireworks.splice(i, 1);
				i--;
			}
		}
	}

	const handleClick = (p5: P5) => {
		newMortar(p5.mouseX, p5.mouseY);
	}

	return (
		<div className={"Hero"}>
			<Sketch setup={setup} draw={draw} windowResized={resizeCanvas} mouseClicked={handleClick}/>
		</div>
	)
}