import { Heading, Separator, SubHeading, Wrapper } from './page_header.styled';

export function PageHeader({ heading, subHeading }) {
	return (
		<Wrapper>
			<Heading>{heading}</Heading>
			{subHeading && <SubHeading>{subHeading}</SubHeading>}
			<Separator />
		</Wrapper>
	);
}
