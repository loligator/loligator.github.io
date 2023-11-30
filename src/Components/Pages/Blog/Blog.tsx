import React from 'react';
import { CmcdFooter } from '../../cmcdFooter/cmcdFooter';
import CmcdNavBar from '../../cmcdNavBar/cmcdNavBar';
import { TwoColumn } from '../../Layout/TwoColumn';

export const Blog: React.FC = () => {
	return (
		<>
			<CmcdNavBar />
			<TwoColumn>
				<Blog/>
				<BlogPosts/>
			</TwoColumn>
			<CmcdFooter />
		</>
	);
}