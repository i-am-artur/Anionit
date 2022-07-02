import styled from 'styled-components';
import { gap } from '../../common/Styles/theme';

export const PriceWrapper = styled.div`
	text-align: right;
	font-size: large;
`;

export const Price = styled.span`
	font-weight: bold;
	${({ color }) => color && `color: ${color}`};
`;

export const Order = styled.div`
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
