import styled from 'styled-components';
import { gap, media } from '../../common/Styles/theme';

export const ProductHeader = styled.div`
	row-gap: ${gap.original};
	display: flex;
	flex-direction: column;
	align-items: center;

	${media.Tablet} {
		display: grid;
		column-gap: ${gap.general};
		grid-template-columns: 186px auto;
	}

	${media.Desktop} {
		grid-template-columns: 300px auto;
	}
`;

export const ProductHeading = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: ${gap.original};

	${media.Tablet} {
		align-items: flex-end;
	}
`;

export const Image = styled.img`
	width: 100%;
`;

export const PriceWrapper = styled.div`
	text-align: right;
	font-size: large;
`;

export const Price = styled.span`
	font-weight: bold;
	${({ color }) => color && `color: ${color}`};
`;

export const Order = styled.div`
	column-gap: ${gap.general};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Total = styled.span`
	font-weight: bold;
	${({ color }) => color && `color: ${color}`};
`;

export const Description = styled.div`
	& p {
		margin-top: ${gap.general};
		margin-bottom: ${gap.general};
	}

	& .distributor {
		display: flex;
		flex-direction: column;
	}
`;
