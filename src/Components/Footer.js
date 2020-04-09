import React from 'react';

const Footer = (props) => {
	return (
		<div className="footer">
			<div className="socials-container">
			{props.socials.map((s)=>
				<div>
					<a href={s.Url}>
						<img className="social-icon" src={s.imgUrl} alt={s.Name}/>
					</a>
				</div>
			)}
			</div>
			<span className="text small">{props.copywrite}</span>
		</div>
	)
}

export default Footer;