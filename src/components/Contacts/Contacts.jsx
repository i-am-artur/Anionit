import content from './content';
import { PageHeader } from '../../common/components/PageHeader/PageHeader';
import { CompanyInfo } from './components/CompanyInfo';
import { PartnerInfo } from './components/PartnerInfo';
import { Separator } from '../../common/components/PageHeader/page_header.styled';

export default function Contacts() {
	return (
		<div>
			<PageHeader heading={content.heading} />
			<CompanyInfo />
			<Separator />
			<PartnerInfo />
		</div>
	);
}
