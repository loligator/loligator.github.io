import React from 'react'

import style from './Bio.module.scss'

export const Bio: React.FC = () => {
	return (
		<div className={style.container + ' ' + style.extend}>
			<div className={style.text}>
				<h2>Hi! My name is Connor McDermott</h2>
				<h3>I'm a Software Engineer!</h3>
				<p>
					Since graduating from Michigan State University (Go Green!) in 2017,
					I've been working in several different types of environments, with
					different ways of working, all focused on software!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quisquam
					expedita! Soluta, sequi. Excepturi labore veritatis consequatur modi
					corrupti iure explicabo minus in qui ipsum, tempore aliquid cum a
					distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Officiis laudantium, ullam ratione molestias iure, necessitatibus
					deleniti, porro hic pariatur odit autem provident impedit expedita
					repellendus illum officia? Unde, eum! Quae.
				</p>
			</div>
		</div>
	)
}
