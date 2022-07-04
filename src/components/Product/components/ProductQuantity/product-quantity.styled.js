import styled from 'styled-components';
import { gap } from '../../../../common/Styles/theme';

export const ProductSelect = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: ${gap.general};
`;
export const Quantity = styled.div`
	column-gap: ${gap.original};
	align-items: center;
	display: flex;
`;
