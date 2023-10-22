import React from 'react';

import { start } from './ThreeDScene';

const canvas = start();

export const Anim: React.FC = () => {
	
	return (
		<div ref={ ref => ref?.appendChild(canvas)}></div>
	);
}