import { Body, Bodies, World, Vector } from 'matter-js';
import P5 from 'p5';

class FireworkParticle {
	body: Body;
	radius: number;
	color: P5.Color;

	framesAlive: number;

	constructor(
		world: World,
		x: number,
		y: number,
		dir: Vector,
		color: P5.Color
	) {
		this.framesAlive = 0;
		this.radius = 1;
		this.color = color;
		this.body = Bodies.circle(x, y, 1, {
			collisionFilter: {
				mask: 0x0000,
			},
		});
		this.body.mass = 1;
		this.body.inverseMass = 1;
		this.body.frictionAir = 0.2;
		World.add(world, this.body);

		this.body.force = Vector.mult(dir, 10);
	}

	show(p5: P5) {
		this.color.setAlpha(p5.alpha(this.color) - 1);
		p5.fill(this.color);
		p5.stroke(this.color);
		let pos = this.body.position;
		p5.push();
		p5.translate(pos.x, pos.y);
		p5.ellipse(0, 0, this.radius * 4);
		p5.pop();
	}
}

class Firework {
	subParticles: FireworkParticle[];
	x: number;
	y: number;
	framesAlive: number;
	color: P5.Color;

	constructor(
		world: World,
		x: number,
		y: number,
		count: number,
		color: P5.Color
	) {
		this.x = x;
		this.y = y;
		this.framesAlive = 0;
		this.color = color;

		this.subParticles = [];

		for (let i = 0; i < count; i++) {
			let dir = Vector.rotate(
				Vector.create(0, -0.01),
				((2 * Math.PI) / count) * i
			);
			this.subParticles.push(new FireworkParticle(world, x, y, dir, color));
		}
	}

	show(world: World, p5: P5) {
		if (this.framesAlive > 50) {
			while (this.subParticles.length !== 0) {
				let firework = this.subParticles.pop();
				if (firework !== undefined) {
					World.remove(world, firework?.body);
				}
			}
			return false;
		}
		this.framesAlive++;
		p5.fill(this.color);
		p5.stroke(this.color);
		p5.push();
		p5.translate(this.x, this.y);
		p5.ellipse(0, 0, this.framesAlive * 10);
		p5.pop();
		this.subParticles.forEach((p) => {
			p.show(p5);
		});
		return true;
	}
}

export default Firework;
