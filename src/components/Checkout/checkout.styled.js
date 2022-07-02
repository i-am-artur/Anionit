import styled from 'styled-components';
import { gap } from '../../common/Styles/theme';
import { pxToRem } from '../../common/Styles/helpers';
import Input from '../../common/components/Input/Input';
import { ButtonLink } from '../../common/components/Link/ButtonLink';

export const ShoppingCart = styled.div`
	margin-top: 12px;
	margin-bottom: 12px;
	row-gap: ${gap.original};
	column-gap: ${gap.original};
	display: grid;
	grid-template-columns: auto min-content min-content;
	align-items: center;
`;

export const Heading = styled.h3`
	margin-top: 24px;
	margin-bottom: 6px;
`;

export const Total = styled.div`
	text-align: right;
	font-weight: bold;
`;

export const ProductSelect = styled.div``;
export const ClientInfo = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: ${gap.original};
`;

export const CheckoutInput = styled(Input)`
	box-sizing: border-box;
	width: 100%;
	padding: 8px;
	font-size: ${pxToRem(17)};
	border: 1px solid #ccc;
`;

export const CheckoutButton = styled(ButtonLink)`
	cursor: not-allowed;
	border-radius: 0;
`;
