import { CompanyDescription, Image, Wrapper } from './company.styled';
import content from '../content';
import companyLogo from '../../../assets/gtpuritas.jpg';

export function CompanyInfo() {
	return (
		<Wrapper>
			<CompanyDescription>
				<h3>
					{content.company.title}: {content.company.name}
				</h3>
				<address>
					<div>
						{content.company.street} {content.company.building}{' '}
						{content.company.unit}
					</div>
					<div>
						{content.company.postal} {content.company.city},{' '}
						{content.company.country}
					</div>
				</address>
				<div>
					tel: <a href={`tel:${content.phone}`}>{content.phone}</a>
				</div>
				<div>
					email: <a href={`mailto:${content.email}`}>{content.email}</a>
				</div>
			</CompanyDescription>
			<Image src={companyLogo} alt={`Logo ${content.company.name}`} />
		</Wrapper>
	);
}
