import React from 'react';

import styles from './Socials.module.scss';

import { ReactComponent as LinkedInIcon } from '../../Image/Icons/LinkedIn/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../Image/Icons/github-mark/github-mark/github-mark-white.svg';
import { ReactComponent as InstagramIcon } from '../../Image/Icons/Instagram/03 Black Glyph/Instagram_Glyph_Black.svg';

const socials: {
	name: string;
	cssClass: string;
	icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
	}>,
	href: string,
}[] = [
	{
		name: 'LinkedIn',
		cssClass: styles.LinkedIn,
		icon: LinkedInIcon,
		href: "https://www.linkedin.com/in/connor-mcdermott-97a2938b/",
	},
	{
		name: 'Github',
		cssClass: styles.Github,
		icon: GithubIcon,
		href: "https://github.com/loligator/"
	},
	{
		name: 'Instagram',
		cssClass: styles.Instagram,
		icon: InstagramIcon,
		href: ""
	},
];

export const Socials: React.FC = () => {

	return (
		<div className={styles.container}>
			{socials.map(s => (
				<div className={styles.iconBorder + ' ' + s.cssClass}>
					<s.icon className={styles.icon} />
				</div>
			))}
		</div>
	);
}