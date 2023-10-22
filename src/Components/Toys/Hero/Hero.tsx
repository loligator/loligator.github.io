import React from 'react';

import HeroAnim from './HeroAnim';

const anim = new HeroAnim();

export const Hero = () => {
	return <div ref={(ref) => ref?.appendChild(anim.canvas)}></div>;
};
