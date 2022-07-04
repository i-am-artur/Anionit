import styled from 'styled-components';
import { gap, media } from '../../../../common/Styles/theme';
import { ProductWrapper } from '../../../../common/Styles/common';

export const Image = styled.img`
	width: 100%;

	${media.Tablet} {
		width: 167px;
	}
`;

export const Options = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: ${gap.original};

	${media.Desktop} {
		display: flex;
		justify-content: flex-end;
	}
`;

export const DesignationContent = styled.span`
	color: ${(props) => (props.color ? props.color : 'inherit')};
`;

export const ProductContainer = styled.div`
	margin-top: ${gap.section};

	${media.Tablet} {
		margin-top: ${gap.m_section};
		//margin-top: 0;
		column-gap: ${gap.general};
		display: flex;
		flex-direction: row;
		align-items: center;
	}
`;

export const ProductContent = styled(ProductWrapper)`
	margin-top: 0;
	width: 100%;
`;
