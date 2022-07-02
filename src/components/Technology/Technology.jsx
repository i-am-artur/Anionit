import content from './content';
import { Text } from './technology.styled';
import { PageHeader } from '../../common/components/PageHeader/PageHeader';
import { Fragment } from 'react';

export default function Technology() {
	return (
		<Fragment>
			<PageHeader heading={content.heading} subHeading={content.subHeading} />
			{content.text.map((part, index) => (
				<Text key={index}>{part}</Text>
			))}
		</Fragment>
	);
}
