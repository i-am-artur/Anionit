import content from '../content';
import { Wrapper } from '../contacts.styled';
import partnerLogo from '../../../assets/pervet.png';
import { Fragment } from 'react';

export function PartnerInfo() {
	return (
		<Fragment>
			{content.partner.title}:
			<Wrapper>
				<div>
					<h3>{content.partner.name}</h3>
					<address>
						<div>
							{content.partner.street} {content.partner.building}
						</div>
						<div>
							{content.partner.postal} {content.partner.city},{' '}
							{content.partner.country}
						</div>
					</address>
					<div>
						tel:{' '}
						<a href={`tel:${content.partner.phone}`}>{content.partner.phone}</a>
					</div>
					<div>
						email:{' '}
						<a href={`mailto:${content.partner.email}`}>
							{content.partner.email}
						</a>
					</div>
				</div>
				<img src={partnerLogo} alt={`Logo ${content.partner.name}`} />
			</Wrapper>
		</Fragment>
	);
}
