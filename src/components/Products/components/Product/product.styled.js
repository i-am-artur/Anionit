import styled from 'styled-components';
import { gap } from '../../../../common/Styles/theme';

export const Options = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: ${gap.original};
`;

export const DesignationContent = styled.span`
	color: ${(props) => (props.color ? props.color : 'inherit')};
`;
