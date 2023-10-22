import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default class HeroAnim {
	canvas: HTMLCanvasElement;

	camera: THREE.PerspectiveCamera;
	scene: THREE.Scene;
	renderer: THREE.WebGLRenderer;
	sun: THREE.DirectionalLight;
	cube?: THREE.Mesh;

	loader: GLTFLoader;

	constructor() {
		this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / (window.innerHeight * 0.75), 0.01, 10);
		this.camera.position.z = 5;

		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x111111);

		this.sun = new THREE.DirectionalLight(0xffffff, 3);
		this.sun.position.z = 3;
		this.scene.add(this.sun);

		this.renderer = new THREE.WebGLRenderer( { antialias: true } );
		this.renderer.setSize( window.innerWidth, window.innerHeight * 0.75 );
		this.renderer.setAnimationLoop(t => {this.animate(t)});

		this.canvas = this.renderer.domElement;

		this.loader = new GLTFLoader();
		this.createObjects();
	}

	animate(time: number): void {
		if (this.cube) {
			this.cube.rotation.x = time / 2000;
			this.cube.rotation.y = time / 1000;
		}
		this.renderer.render( this.scene, this.camera );
	}

	createObjects (): void {
		this.loadModel('src/Assets/Models/Monkey.gltf');
	}

	loadModel(path: string) {
		this.loader.load(
			path,
			( gltf ) => {
        // called when the resource is loaded
        this.scene.add( gltf.scene );
			},
			( xhr ) => {
				// called while loading is progressing
				console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
			},
			( error ) => {
				// called when loading has errors
				console.error( 'An error happened', error );
			},
		);
	}
}