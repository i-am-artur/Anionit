import styled from 'styled-components';
import { gap } from '../../common/Styles/theme';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column-reverse;
	row-gap: ${gap.general};
	margin-top: ${gap.section};
	margin-bottom: ${gap.section};
`;
