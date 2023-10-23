import React from 'react';

import style from './Bio.module.scss';

export const Bio: React.FC = () => {
	return (
		<div className={style.container + ' ' + style.extend}>
			<div className={style.text}>
				<h2>Hi! My name is Connor McDermott</h2>
				<h3>I'm a Software Engineer!</h3>
				<p>
					Welcome to my portfolio! I'm a passionate software engineer with a
					versatile skill set in frontend development, backend systems, and even
					the captivating world of game development. My journey began at
					Michigan State University, where I earned a degree in Computer Science
					in 2017, laying the foundation for an exciting career in the tech
					industry.
				</p>
				<p>
					With experiences at renowned tech giants like Amazon AWS, where I
					honed my problem-solving abilities and industry expertise, and
					consulting engagements with Meta and Mastercard, I've cultivated a
					deep understanding of cutting-edge technologies and a knack for
					building robust and scalable software solutions. Currently, I'm proud
					to be a part of the innovative team at Walgreens Boots Alliance, where
					I continue to develop high quality frontend elements and rock-solid
					backend APIs. Whether it's crafting engaging user interfaces,
					architecting robust backend systems, or crafting immersive gaming
					experiences, I'm committed to delivering high-quality solutions that
					not only meet but exceed expectations. Explore my portfolio to see
					some of my recent projects and discover how I can help bring your
					digital vision to life. Let's create something incredible together!
				</p>
			</div>
		</div>
	);
};
