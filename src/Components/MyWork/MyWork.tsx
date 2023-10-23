import React from 'react';

import styles from './MyWork.module.scss';

import WalgreensLogo from '../../Image/Icons/Companies/Walgreens.png';
import AmazonAWSLogo from '../../Image/Icons/Companies/Amazon-AWS.png';
import MetaLogo from '../../Image/Icons/Meta/1 Positive Primary/RGB/Meta_lockup_positive primary_RGB.svg';
import MastercardLogo from '../../Image/Icons/Companies/Mastercard.svg';

import { WorkItem } from './WorkItem';

export const MyWork: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.table}>
				<WorkItem
					logo={WalgreensLogo}
					company={'Walgreens'}
					jobTitle={'Software Engineer'}
					details={['Frontend Mobile Dev', 'Backend Messaging APIs']}
					tech={['TypeScript', 'Android', 'Angular', 'Java', 'Git']}
				/>
				<WorkItem
					logo={AmazonAWSLogo}
					company={'Amazon AWS'}
					jobTitle={'SDE 2'}
					details={[
						'Cloud Architecture',
						'Frontend and API Dev',
						'DevOps/Testing',
					]}
					tech={['TypeScript', 'React', 'CDK IaC', 'Java/Spring', 'Git']}
				/>
				<WorkItem
					logo={MetaLogo}
					company={'Meta for Business'}
					jobTitle={'Software Engineer'}
					details={[
						'Consultant at Perficient',
						'Frontend/Backend UI',
						'Component Development',
					]}
					tech={['Flow JavaScript', 'React', 'Hack/PHP', 'Mercurial']}
				/>
				<WorkItem
					logo={MastercardLogo}
					company={'Mastercard'}
					jobTitle={'Software Engineer'}
					details={[
						'Consultant at Perficient',
						'Frontend/Backend UI',
						'Optimization and Testing',
					]}
					tech={['.NET', 'C#', 'VBScript', 'JavaScript', 'Git']}
				/>
			</div>
		</div>
	);
};
