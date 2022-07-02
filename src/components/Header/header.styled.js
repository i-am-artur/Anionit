import styled, { css } from 'styled-components';
import { colors, gap, width } from '../../common/Styles/theme';
import routeList from '../AppRouter/routeList';

export const Wrapper = styled.div`
	// background-color: ${colors.main};
`;

export const Component = styled.header`
	display: flex;
	// max-width: ${width.max_width};
	margin-left: auto;
	margin-right: auto;
	justify-content: space-between;
	align-items: center;
	padding: ${gap.general};
	position: relative;
	background-color: ${({ pathname }) =>
		pathname === routeList.home ? 'white' : colors.main};
`;
export const Options = styled.div`
	display: flex;
	align-items: center;
`;

const CartItems_Quantity = css`
	::before {
		top: -4px;
		left: 2px;
		position: absolute;
		width: 20px;
		height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;

		${({ items_quantity }) => {
			if (items_quantity > 0) {
				return `
				content: "${items_quantity}";
				background-color: red;
				`;
			}
		}};
	}
`;

export const ShoppingCart = styled('div')`
	position: relative;
	width: 30px;
	height: 30px;

	${CartItems_Quantity};
`;
