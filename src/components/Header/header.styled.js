import styled, { css, keyframes } from 'styled-components';
import { colors, gap } from '../../common/Styles/theme';
import routeList from '../AppRouter/routeList';

const burgerGlow = keyframes`
  0% {
  	box-shadow: none;
  }
  60% {
  	box-shadow: 1px 1px 13px 0 #0400ff;
  }
  80% {
  	box-shadow: none;
  }
  100% {
  	box-shadow: 1px 1px 13px 0 #0400ff;
  }
`;

export const Wrapper = styled.div`
	background-color: ${({ pathname }) =>
		pathname === routeList.home ? 'white' : colors.main};

	.alert-enter-active {
		animation: ${burgerGlow} 4s;
	}
`;

export const Component = styled.header`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	justify-content: space-between;
	align-items: baseline;
	padding: ${gap.general};
	position: relative;
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
		color: white;

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
