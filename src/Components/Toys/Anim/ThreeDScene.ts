import * as Three from 'three';

import starIcon from '../../../Image/Star.png';

let camera: Three.PerspectiveCamera;
let scene: Three.Scene;
let renderer: Three.WebGLRenderer;
let material: Three.PointsMaterial;

let cube: Three.Mesh | undefined;
let stars: Three.Points;

export const start = (): HTMLCanvasElement => {
	const element = initScene();

	createObjects();
	createStars();

	return element;
}

export const initScene = (): HTMLCanvasElement => {
	camera = new Three.PerspectiveCamera(70, window.innerWidth / (window.innerHeight * 0.75), 0.01, 10);

	camera.position.z = 5;

	scene = new Three.Scene();
	scene.background = new Three.Color(0x111111);

	const light = new Three.DirectionalLight(0xffffff, 3);
	light.position.z = 3;
	scene.add(light);

	renderer = new Three.WebGLRenderer( {antialias: true} );
	renderer.setSize( window.innerWidth, window.innerHeight * 0.75 );
	renderer.setAnimationLoop(animate);

	return renderer.domElement;
}

const animate = (t: number) => {
	if (cube) {
		cube.rotation.x = t / 2000;
		cube.rotation.y = t / 1000;
	}

	renderer.render( scene, camera );
}

const createObjects = () => {
	const geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
	const material = new Three.MeshPhongMaterial( {color: new Three.Color(0xffffff)});
	cube = new Three.Mesh(geometry, material);

	scene.add(cube);
}

const createStars = () => {
	const geometry = new Three.BufferGeometry();
	const vertices = [];

	const sprite = new Three.TextureLoader().load(starIcon);
	sprite.colorSpace = Three.SRGBColorSpace;

	for (let i = 0; i < 100; i++) {
		let x = 20 * Math.random() - 10;
		let y = 20 * Math.random() - 10;
		let z = 20 * Math.random() - 10;

		vertices.push(x, y, z);
	}

	geometry.setAttribute('position', new Three.Float32BufferAttribute(vertices, 3));

	material = new Three.PointsMaterial( { size: .3, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true });
	material.color.setHSL( 1.0, 0.3, 0.7, Three.SRGBColorSpace );

	stars = new Three.Points( geometry, material);
	scene.add(stars);

	window.addEventListener('resize', onWindowResize );
}

const onWindowResize = () => {
	camera.aspect = window.innerWidth / (window.innerHeight);
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight * 0.75);
}