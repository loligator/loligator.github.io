import { Body, Bodies, World, Vector } from 'matter-js';
import P5 from 'p5';

class Mortar {
	body: Body;
	radius: number;
	x: number;
	y: number;

	constructor(world: World, x: number, y: number, r: number) {
		this.x = (Math.random() * 100) - 50 + x;
		this.y = y;
		this.radius = r;
		this.body = Bodies.circle(this.x, y, r);
		World.add(world, this.body);
		this.body.mass = 5;
		this.body.inverseMass = 1 / 5;
		let myVec = Vector.create((Math.random() * 2) - 1, -4);
		this.body.force = Vector.mult(Vector.normalise(myVec), .3);
	}

	show(world: World, p5: P5) {
		if (this.body.velocity.y >= 0) {
			World.remove(world, this.body);
			return false;
		}
		p5.fill(255);
		p5.stroke(255);
		let pos = this.body.position;
		p5.push();
		this.y = pos.y;
		this.x = pos.x;
		p5.translate(pos.x, pos.y);
		p5.ellipse(0, 0, this.radius * 2);
		p5.pop();

		return true;
	}
}

export default Mortar;