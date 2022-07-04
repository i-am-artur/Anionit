import styled from 'styled-components';
import { gap, media } from '../../../common/Styles/theme';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column-reverse;
	row-gap: ${gap.general};
	column-gap: ${gap.general};
	margin-top: ${gap.section};
	margin-bottom: ${gap.section};

	${media.Tablet} {
		align-items: center;
	}

	${media.Desktop} {
		flex-direction: row-reverse;
	}
`;

export const Image = styled.img`
	width: 100%;

	${media.Tablet} {
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	}

	${media.Desktop} {
		width: 400px;
	}
`;

export const CompanyDescription = styled.div`
	${media.Desktop} {
		width: 50%;
	}
`;
