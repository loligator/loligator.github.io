import React from 'react';
import { CmcdFooter } from '../../cmcdFooter/cmcdFooter';
import CmcdNavBar from '../../cmcdNavBar/cmcdNavBar';
import { TwoColumn } from '../../Layout/TwoColumn';

import { Posts } from '../../Blog/posts';
import { BrowsePostsColumn } from '../../Blog/BrowsePostsColumn';

export const Blog: React.FC = () => {
	return (
		<>
			<CmcdNavBar />
			<TwoColumn>
				<Posts/>
				<BrowsePostsColumn/>
			</TwoColumn>
			<CmcdFooter />
		</>
	);
}